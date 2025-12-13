import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  audioUrl: string;
  coverUrl: string;
  genre: string[];
}

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  likedSongs: number[];
  playSong: (song: Song) => void;
  togglePlayPause: () => void;
  playNextSong: (songs: Song[]) => void;
  playPreviousSong: (songs: Song[]) => void;
  toggleLike: (songId: number) => void;
  setCurrentTime: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [likedSongs, setLikedSongs] = useState<number[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Инициализация аудио элемента при монтировании
  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;

    // Обработчики событий
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    // Установка начальной громкости
    audio.volume = volume;

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const playSong = useCallback(
    (song: Song) => {
      if (!audioRef.current) return;

      if (song !== currentSong) {
        setCurrentSong(song);
        setCurrentTime(0);
        audioRef.current.src = song.audioUrl;
        audioRef.current.load();
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.error("Ошибка воспроизведения:", err);
            setIsPlaying(false);
          });
      }
    },
    [currentSong],
  );

  const togglePlayPause = useCallback(() => {
    if (!currentSong || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Ошибка воспроизведения:", err);
        });
    }
  }, [currentSong, isPlaying]);

  const playNextSong = useCallback(
    (songs: Song[]) => {
      if (!currentSong || !audioRef.current) return;

      const currentIndex = songs.findIndex(
        (song) => song.id === currentSong.id,
      );
      const nextIndex = (currentIndex + 1) % songs.length;
      playSong(songs[nextIndex]);
    },
    [currentSong, playSong],
  );

  const playPreviousSong = useCallback(
    (songs: Song[]) => {
      if (!currentSong || !audioRef.current) return;

      const currentIndex = songs.findIndex(
        (song) => song.id === currentSong.id,
      );
      const prevIndex =
        currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
      playSong(songs[prevIndex]);
    },
    [currentSong, playSong],
  );

  const toggleLike = useCallback((songId: number) => {
    setLikedSongs((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId],
    );
  }, []);

  const handleSetVolume = useCallback(
    (newVolume: number) => {
      setVolume(newVolume);
      if (!isMuted && audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    },
    [isMuted],
  );

  const handleSetCurrentTime = useCallback((time: number) => {
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  }, []);

  const handleToggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        likedSongs,
        playSong,
        togglePlayPause,
        playNextSong,
        playPreviousSong,
        toggleLike,
        setCurrentTime: handleSetCurrentTime,
        setVolume: handleSetVolume,
        toggleMute: handleToggleMute,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within PlayerProvider");
  }
  return context;
};

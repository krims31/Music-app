import { useRef, useState } from "react";
import { songs } from "../../data/songs";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaHeart,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";
import "./Music.scss";

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

const music = {
  name: "Trending",
  seeAll: "See all",
};

export default function Music() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.7);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [likedSongs, setLikedSongs] = useState<number[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Функция для переключения треков
  const playNextSong = () => {
    if (!currentSong) return;

    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    const nextSong = songs[nextIndex];

    togglePlayPause(nextSong);
  };

  const playPreviousSong = () => {
    if (!currentSong) return;

    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    const prevSong = songs[prevIndex];

    togglePlayPause(prevSong);
  };

  // Функция для добавления/удаления из любимых
  const toggleLike = (songId: number, e: React.MouseEvent) => {
    e.stopPropagation();

    setLikedSongs((prev) => {
      if (prev.includes(songId)) {
        return prev.filter((id) => id !== songId);
      } else {
        return [...prev, songId];
      }
    });
  };

  const togglePlayPause = (song?: Song) => {
    console.log("Клик по песне:", song?.title);

    if (song && song !== currentSong) {
      console.log("Загружаем аудио:", song.audioUrl);
      setCurrentSong(song);
      if (audioRef.current) {
        audioRef.current.src = song.audioUrl;
        audioRef.current.load();

        audioRef.current.oncanplay = () => {
          console.log("Аудио готово к воспроизведению");
        };

        audioRef.current.onerror = (e) => {
          console.error("Ошибка загрузки аудио:", e);
        };

        audioRef.current
          .play()
          .then(() => {
            console.log("Воспроизведение началось");
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("Ошибка воспроизведения:", err);
          });
      }
    } else if (currentSong) {
      if (audioRef.current) {
        if (isPlaying) {
          console.log("Пауза");
          audioRef.current.pause();
        } else {
          console.log("Продолжаем воспроизведение");
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
      } else {
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <>
      <div className="music-container">
        <div className="music-header">
          <h1>{music.name}</h1>
          <button className="see-all-btn">{music.seeAll}</button>
        </div>

        <div className="songs-list">
          {songs.map((song) => (
            <div
              key={song.id}
              className={`song-item ${currentSong?.id === song.id ? "active" : ""}`}
              onClick={() => togglePlayPause(song)}
            >
              <div className="song-left">
                <img
                  src={song.coverUrl}
                  alt={song.title}
                  className="song-cover"
                />
                <div className="song-info">
                  <h3 className="song-title">{song.title}</h3>
                  <p className="song-artist">{song.artist}</p>
                </div>
              </div>

              <div className="song-right">
                {/* Кнопка "лайк" в списке песен */}
                <button
                  className={`like-btn ${likedSongs.includes(song.id) ? "liked" : ""}`}
                  onClick={(e) => toggleLike(song.id, e)}
                  aria-label={
                    likedSongs.includes(song.id)
                      ? "Удалить из любимых"
                      : "Добавить в любимые"
                  }
                >
                  <FaHeart size={14} />
                </button>

                <span className="song-duration">{song.duration}</span>

                <button
                  className="play-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause(song);
                  }}
                  aria-label={
                    currentSong?.id === song.id && isPlaying
                      ? "Пауза"
                      : "Воспроизвести"
                  }
                >
                  {currentSong?.id === song.id && isPlaying ? (
                    <FaPause size={14} />
                  ) : (
                    <FaPlay size={14} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          // Автоматическое переключение на следующий трек
          playNextSong();
        }}
      />

      {currentSong && (
        <div className="music-player">
          <div className="player-left">
            <img
              src={currentSong.coverUrl}
              alt={currentSong.title}
              className="player-cover"
            />
            <div className="player-song-info">
              <h4>{currentSong.title}</h4>
              <p>{currentSong.artist}</p>
            </div>

            {/* Кнопка "лайк" в плеере */}
            <button
              className={`like-btn-player ${likedSongs.includes(currentSong.id) ? "liked" : ""}`}
              onClick={() =>
                toggleLike(currentSong.id, {
                  stopPropagation: () => {},
                } as React.MouseEvent)
              }
              aria-label={
                likedSongs.includes(currentSong.id)
                  ? "Удалить из любимых"
                  : "Добавить в любимые"
              }
            >
              <FaHeart size={16} />
            </button>
          </div>

          <div className="player-center">
            <div className="player-controls">
              {/* Кнопка предыдущего трека */}
              <button
                className="control-btn prev-btn"
                onClick={playPreviousSong}
                aria-label="Предыдущий трек"
              >
                <FaStepBackward size={16} />
              </button>

              {/* Основная кнопка воспроизведения/паузы */}
              <button
                className="control-btn play-btn-main"
                onClick={() => togglePlayPause()}
                aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
              >
                {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
              </button>

              {/* Кнопка следующего трека */}
              <button
                className="control-btn next-btn"
                onClick={playNextSong}
                aria-label="Следующий трек"
              >
                <FaStepForward size={16} />
              </button>
            </div>

            <div className="player-progress">
              <span className="time-current">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleProgressChange}
                className="progress-bar"
              />
              <span className="time-total">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="player-right">
            <button
              className="volume-btn"
              onClick={toggleMute}
              aria-label={isMuted ? "Включить звук" : "Выключить звук"}
            >
              {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      )}
    </>
  );
}

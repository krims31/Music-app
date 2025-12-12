import { useRef, useState } from "react";
import { songs } from "../components/data/songs";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaHeart,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";
import "./Favourites.scss";

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

const favourites = {
  name: "My Favourites",
  seeAll: "See all",
};

export const Favourites = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.7);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [likedSongs, setLikedSongs] = useState<number[]>([1, 2, 3, 4, 5, 6]); // Все песни в избранном

  const audioRef = useRef<HTMLAudioElement>(null);

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
    if (song && song !== currentSong) {
      setCurrentSong(song);
      if (audioRef.current) {
        audioRef.current.src = song.audioUrl;
        audioRef.current.load();
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("Ошибка воспроизведения:", err);
          });
      }
    } else if (currentSong) {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
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
      <div className="favourites-wrapper">
        <div className="favourites-container">
          <div className="favourites-header">
            <h1>{favourites.name}</h1>
            <button className="see-all-btn">{favourites.seeAll}</button>
          </div>

          <div className="favourites-list">
            {songs.map((song) => (
              <div
                key={song.id}
                className={`favourite-item ${currentSong?.id === song.id ? "active" : ""}`}
                onClick={() => togglePlayPause(song)}
              >
                <div className="favourite-left">
                  <img
                    src={song.coverUrl}
                    alt={song.title}
                    className="favourite-cover"
                  />
                  <div className="favourite-info">
                    <h3 className="favourite-title">{song.title}</h3>
                    <p className="favourite-artist">{song.artist}</p>
                  </div>
                </div>

                <div className="favourite-right">
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

                  <span className="favourite-duration">{song.duration}</span>

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
          playNextSong();
        }}
      />

      {currentSong && (
        <div className="favourites-player">
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
              <button
                className="control-btn prev-btn"
                onClick={playPreviousSong}
                aria-label="Предыдущий трек"
              >
                <FaStepBackward size={16} />
              </button>

              <button
                className="control-btn play-btn-main"
                onClick={() => togglePlayPause()}
                aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
              >
                {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
              </button>

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
};

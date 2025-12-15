import { useState, useRef } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeMute,
  FaHeart,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";
import "./Recently.scss";
import x from "./assets/17_by_XXXTentacion_cover.jpg";
import travis from "./assets/Travis_Scott_Astroworld.jpg";
import carti from "./assets/Whole_Lotta_Red.png";
import weeknd from "./assets/ab67616d00001e024718e2b124f79258be7bc452.jpeg";
import legend from "./assets/ab67616d0000b2733e0698e4ae5ffb82a005aeeb.jpeg";
import ed from "./assets/ed-sheeran-divide-cd.jpg";
import Sidebar from "../Sidebar/Sidebar"; // Импортируйте ваш Sidebar компонент

const RES = {
  recently: "Recently plays",
  nameLegend: "Wishing Well",
  artist1: "Juice WRLD",
  nameEd: "Castle on the Hill",
  artist2: "Ed Sheeran",
  nameCarti: "Sky",
  artist3: "Playboi carti",
  nameTravis: "Sicko MODE",
  artist4: "Travis Scott",
  nameWeeknd: "Starboy",
  artist5: "The Weeknd",
  nameX: "Jocelyn Flores",
  artist6: "XXXtentacion",
  seeall: "See all",
};

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

const songs: Song[] = [
  {
    id: 1,
    title: "Wishing Well",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:45",
    audioUrl: "./music/Juice-WRLD-Wishing-Well-(HipHopKit.com).mp3",
    coverUrl: legend,
    genre: ["Hip-hop", "Emo rap", "R&B"],
  },
  {
    id: 2,
    title: "Castle on the Hill",
    artist: "Ed Sheeran",
    album: "Divide",
    duration: "4:21",
    audioUrl: "./music/Castle On The Hill - Ed Sheeran.mp3",
    coverUrl: ed,
    genre: ["Pop & Rock", "R&B"],
  },
  {
    id: 3,
    title: "Sky",
    artist: "Playboi carti",
    album: "Whole Lotta Red",
    duration: "3:13",
    audioUrl: "./music/Playboi Carti - Sky (Official Audio).mp3",
    coverUrl: carti,
    genre: ["R&B"],
  },
  {
    id: 4,
    title: "Sicko Mode",
    artist: "Travis Scott",
    album: "Astroworld",
    duration: "5:12",
    audioUrl: "./music/Travis Scott - SICKO MODE ft. Drake.mp3",
    coverUrl: travis,
    genre: ["Hip-hop"],
  },
  {
    id: 5,
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "3:50",
    audioUrl: "./music/SpotiDown.App - Starboy - The Weeknd.mp3",
    coverUrl: weeknd,
    genre: ["Pop"],
  },
  {
    id: 6,
    title: "Jocelyn Flores",
    artist: "XXXTENTACION",
    album: "17",
    duration: "1:59",
    audioUrl: "./music/Xxxtentacion_-_Jocelyn_Flores_17_2017_(Rilds.com).mp3",
    coverUrl: x,
    genre: ["Emo rap"],
  },
];

export default function Recently() {
  // Состояние для мобильного меню
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // Состояния для плеера
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.7);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [likedSongs, setLikedSongs] = useState<number[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Функции для управления мобильным меню
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Функции для плеера (без изменений)
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

  const toggleLike = (songId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

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
            setIsPlaying(false);
          });
      }
    } else if (currentSong) {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((err) => console.error("Ошибка воспроизведения:", err));
        }
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

  const getSongState = (songId: number) => {
    return {
      isCurrent: currentSong?.id === songId,
      isPlaying: currentSong?.id === songId && isPlaying,
    };
  };

  return (
    <div className="page-wrapper">
      {/* Бургер кнопка для мобильного меню */}
      <button 
        className={`burger-btn ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Меню"
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>

      {/* Sidebar с пропсами для управления мобильным меню */}
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        onCloseMobileMenu={closeMobileMenu}
      />

      {/* Основной контейнер с прокруткой */}
      <div className="main-content-scrollable">
        <div className="recently-container">
          <h1>{RES.recently}</h1>

          {/* Сетка для альбомов */}
          <div className="albums-grid">
            {/* Juice WRLD */}
            <div className="juice-wrld album-container">
              <div className="album-cover-wrapper">
                <img src={legend} alt="Juice WRLD - Wishing Well" />
                <button
                  onClick={() => togglePlayPause(songs[0])}
                  className="play-button-overlay"
                  aria-label={getSongState(1).isPlaying ? "Pause" : "Play"}
                >
                  {getSongState(1).isPlaying ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} />
                  )}
                </button>
              </div>
              <h1>{RES.nameLegend}</h1>
              <p>{RES.artist1}</p>
            </div>

            {/* Ed Sheeran */}
            <div className="ed-sheeran album-container">
              <div className="album-cover-wrapper">
                <img src={ed} alt="Ed Sheeran" />
                <button
                  onClick={() => togglePlayPause(songs[1])}
                  className="play-button-overlay"
                  aria-label={getSongState(2).isPlaying ? "Pause" : "Play"}
                >
                  {getSongState(2).isPlaying ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} />
                  )}
                </button>
              </div>
              <h1>{RES.nameEd}</h1>
              <p>{RES.artist2}</p>
            </div>

            {/* Playboi Carti */}
            <div className="carti album-container">
              <div className="album-cover-wrapper">
                <img src={carti} alt="Playboi Carti" />
                <button
                  onClick={() => togglePlayPause(songs[2])}
                  className="play-button-overlay"
                  aria-label={getSongState(3).isPlaying ? "Pause" : "Play"}
                >
                  {getSongState(3).isPlaying ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} />
                  )}
                </button>
              </div>
              <h1>{RES.nameCarti}</h1>
              <p>{RES.artist3}</p>
            </div>

            {/* Travis Scott */}
            <div className="travis album-container">
              <div className="album-cover-wrapper">
                <img src={travis} alt="Travis Scott" />
                <button
                  onClick={() => togglePlayPause(songs[3])}
                  className="play-button-overlay"
                  aria-label={getSongState(4).isPlaying ? "Pause" : "Play"}
                >
                  {getSongState(4).isPlaying ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} />
                  )}
                </button>
              </div>
              <h1>{RES.nameTravis}</h1>
              <p>{RES.artist4}</p>
            </div>

            {/* The Weeknd */}
            <div className="The-weeknd album-container">
              <div className="album-cover-wrapper">
                <img src={weeknd} alt="The Weeknd" />
                <button
                  onClick={() => togglePlayPause(songs[4])}
                  className="play-button-overlay"
                  aria-label={getSongState(5).isPlaying ? "Pause" : "Play"}
                >
                  {getSongState(5).isPlaying ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} />
                  )}
                </button>
              </div>
              <h1>{RES.nameWeeknd}</h1>
              <p>{RES.artist5}</p>
            </div>

            {/* XXXTentacion */}
            <div className="x album-container">
              <div className="album-cover-wrapper">
                <img src={x} alt="XXXTentacion" />
                <button
                  onClick={() => togglePlayPause(songs[5])}
                  className="play-button-overlay"
                  aria-label={getSongState(6).isPlaying ? "Pause" : "Play"}
                >
                  {getSongState(6).isPlaying ? (
                    <FaPause size={20} />
                  ) : (
                    <FaPlay size={20} />
                  )}
                </button>
              </div>
              <h1>{RES.nameX}</h1>
              <p>{RES.artist6}</p>
            </div>
          </div>
        </div>

        <div className="see-all">
          <h1>{RES.seeall}</h1>
        </div>

        {/* Пространство для скролла */}
        <div className="scroll-space">
          <div className="placeholder-section">
            <h2>Ваши плейлисты</h2>
            <div className="placeholder-grid">
              <div className="placeholder-item">Добавьте сюда плейлист 1</div>
              <div className="placeholder-item">Добавьте сюда плейлист 2</div>
              <div className="placeholder-item">Добавьте сюда плейлист 3</div>
              <div className="placeholder-item">Добавьте сюда плейлист 4</div>
            </div>
          </div>

          <div className="placeholder-section">
            <h2>Рекомендуемые треки</h2>
            <div className="placeholder-grid">
              <div className="placeholder-item">Добавьте сюда трек 1</div>
              <div className="placeholder-item">Добавьте сюда трек 2</div>
              <div className="placeholder-item">Добавьте сюда трек 3</div>
              <div className="placeholder-item">Добавьте сюда трек 4</div>
            </div>
          </div>

          <div className="placeholder-section">
            <h2>Новые релизы</h2>
            <div className="placeholder-grid">
              <div className="placeholder-item">Добавьте сюда альбом 1</div>
              <div className="placeholder-item">Добавьте сюда альбом 2</div>
              <div className="placeholder-item">Добавьте сюда альбом 3</div>
              <div className="placeholder-item">Добавьте сюда альбом 4</div>
            </div>
          </div>
        </div>
      </div>

      {/* Аудио элемент */}
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
        onError={(e) => {
          console.error("Аудио ошибка:", e);
          setIsPlaying(false);
        }}
      />

      {/* Панель управления плеером */}
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
          </div>

          <div className="player-center">
            <div className="player-controls">
              <button
                className="control-btn prev-btn"
                onClick={playPreviousSong}
              >
                <FaStepBackward size={16} />
              </button>

              <button
                className="control-btn play-btn-main"
                onClick={() => togglePlayPause()}
              >
                {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
              </button>

              <button className="control-btn next-btn" onClick={playNextSong}>
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
              className={`like-btn-player ${likedSongs.includes(currentSong.id) ? "liked" : ""}`}
              onClick={() => toggleLike(currentSong.id)}
            >
              <FaHeart size={16} />
            </button>

            <button className="volume-btn" onClick={toggleMute}>
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
    </div>
  );
}

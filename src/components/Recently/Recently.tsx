import { useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "./Recently.scss";
import x from "./assets/17_by_XXXTentacion_cover.jpg";
import travis from "./assets/Travis_Scott_Astroworld.jpg";
import carti from "./assets/Whole_Lotta_Red.png";
import weeknd from "./assets/ab67616d00001e024718e2b124f79258be7bc452.jpeg";
import legend from "./assets/ab67616d0000b2733e0698e4ae5ffb82a005aeeb.jpeg";
import ed from "./assets/ed-sheeran-divide-cd.jpg";

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

interface Music {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  audioUrl: string;
  coverUrl: string;
  genre: string[];
}

const music: Music[] = [
  {
    id: 1,
    title: "Wishing Well",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:45",
    audioUrl: "./music/Juice-WRLD-Wishing-Well-(HipHopKit.com).mp3",
    coverUrl: "",
    genre: ["Hip-hop", "Emo rap", "R&B"],
  },
  {
    id: 2,
    title: "Castle on the Hill",
    artist: "Ed Sheeran",
    album: "Divide",
    duration: "4:21",
    audioUrl: "./music/Castle On The Hill - Ed Sheeran.mp3",
    coverUrl: "",
    genre: ["Pop & Rock", "R&B"],
  },
  {
    id: 3,
    title: "Sky",
    artist: "Playboi carti",
    album: "Whole Lotta Red",
    duration: "3:13",
    audioUrl: "./music/Playboi Carti - Sky (Official Audio).mp3",
    coverUrl: "",
    genre: ["R&B"],
  },
  {
    id: 4,
    title: "Sicko Mode",
    artist: "Travis Scott",
    album: "Astroworld",
    duration: "5:12",
    audioUrl: "./music/Travis Scott - SICKO MODE ft. Drake.mp3",
    coverUrl: "",
    genre: ["Hip-hop"],
  },
  {
    id: 5,
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "3:50",
    audioUrl: "./music/SpotiDown.App - Starboy - The Weeknd.mp3",
    coverUrl: "",
    genre: ["Pop"],
  },
  {
    id: 6,
    title: "Jocelyn Flores",
    artist: "XXXTENTACION",
    album: "17",
    duration: "1:59",
    audioUrl: "./music/Xxxtentacion_-_Jocelyn_Flores_17_2017_(Rilds.com).mp3",
    coverUrl: "",
    genre: ["Emo rap"],
  },
];

export default function Recently() {
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Функция для воспроизведения/паузы песни
  const togglePlayPause = (songId: string, audioUrl: string) => {
    if (currentSongId === songId) {
      // Если это текущая песня, пауза/продолжение
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          ?.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Ошибка воспроизведения:", err));
      }
    } else {
      // Если это новая песня
      setCurrentSongId(songId);

      if (audioRef.current) {
        audioRef.current.pause();

        audioRef.current.src = audioUrl;

        audioRef.current.load();
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            console.log("Воспроизведение начато:", songId);
          })
          .catch((err) => {
            console.error("Ошибка воспроизведения:", err);
            setIsPlaying(false);
          });
      }
    }
  };

  // Получаем состояние для конкретной песни
  const getSongState = (songId: string) => {
    return {
      isCurrent: currentSongId === songId,
      isPlaying: currentSongId === songId && isPlaying,
    };
  };

  return (
    <>
      <div className="recently-container">
        <h1>{RES.recently}</h1>

        {/* Juice WRLD */}
        <div className="juice-wrld album-container">
          <div className="album-cover-wrapper">
            <img src={legend} alt="Juice WRLD - Wishing Well" width={150} />
            <button
              onClick={() => togglePlayPause("juice", music[0].audioUrl)}
              className="play-button-overlay"
              aria-label={getSongState("juice").isPlaying ? "Pause" : "Play"}
            >
              {getSongState("juice").isPlaying ? (
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
            <img src={ed} alt="Ed Sheeran" width={150} />
            <button
              onClick={() => togglePlayPause("ed", music[1].audioUrl)}
              className="play-button-overlay"
              aria-label={getSongState("ed").isPlaying ? "Pause" : "Play"}
            >
              {getSongState("ed").isPlaying ? (
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
            <img src={carti} alt="Playboi Carti" width={150} />
            <button
              onClick={() => togglePlayPause("carti", music[2].audioUrl)}
              className="play-button-overlay"
              aria-label={getSongState("carti").isPlaying ? "Pause" : "Play"}
            >
              {getSongState("carti").isPlaying ? (
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
            <img src={travis} alt="Travis Scott" width={150} />
            <button
              onClick={() => togglePlayPause("travis", music[3].audioUrl)}
              className="play-button-overlay"
              aria-label={getSongState("travis").isPlaying ? "Pause" : "Play"}
            >
              {getSongState("travis").isPlaying ? (
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
            <img src={weeknd} alt="The Weeknd" width={150} />
            <button
              onClick={() => togglePlayPause("weeknd", music[4].audioUrl)}
              className="play-button-overlay"
              aria-label={getSongState("weeknd").isPlaying ? "Pause" : "Play"}
            >
              {getSongState("weeknd").isPlaying ? (
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
            <img src={x} alt="XXXTentacion" width={150} />
            <button
              onClick={() => togglePlayPause("x", music[5].audioUrl)}
              className="play-button-overlay"
              aria-label={getSongState("x").isPlaying ? "Pause" : "Play"}
            >
              {getSongState("x").isPlaying ? (
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

      <div className="see-all">
        <h1>{RES.seeall}</h1>
      </div>

      {/* Скрытый аудио элемент */}
      <audio
        ref={audioRef}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentSongId(null);
        }}
        onError={(e) => {
          console.error("Аудио ошибка:", e);
          setIsPlaying(false);
        }}
      />
    </>
  );
}

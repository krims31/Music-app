import { useState } from "react";
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

const Music = [
  {
    id: 1,
    name: "Wishing Well",
    artist: "Juice WRLD",
    album: "Legends Never Die",
    duration: "3:45",
  },
  {
    id: 2,
    name: "Castle on the Hill",
    artist: "Ed Sheeran",
    album: "Divide",
    duration: "4:21",
  },
  {
    id: 3,
    name: "Sky",
    artist: "Playboi Carti",
    album: "Whole Lotta Red",
    duration: "3:13",
  },
  {
    id: 4,
    name: "SICKO MODE",
    artist: "Travis Scott",
    album: "Astroworld",
    duration: "5:12",
  },
  {
    id: 5,
    name: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "3:50",
  },
  {
    id: 6,
    name: "Jocelyn Flores",
    artist: "XXXtentacion",
    album: "17",
    duration: "1:59",
  },
];

export default function Recently() {
  const [isPlayingJuice, setIsPlayingJuice] = useState(false);
  const [isPlayingEd, setIsPlayingEd] = useState(false);
  const [isPlayingCarti, setIsPlayingCarti] = useState(false);
  const [isPlayingTravis, setIsPlayingTravis] = useState(false);
  const [isPlayingWeeknd, setIsPlayingWeeknd] = useState(false);
  const [isPlayingX, setIsPlayingX] = useState(false);

  return (
    <>
      <div className="recently-container">
        <h1>{RES.recently}</h1>
        <div className="juice-wrld album-container">
          <div className="album-cover-wrapper">
            <img src={legend} alt="Juice WRLD - Wishing Well" width={150} />
            <button
              onClick={() => setIsPlayingJuice(!isPlayingJuice)}
              className="play-button-overlay"
              aria-label={isPlayingJuice ? "Pause" : "Play"}
            >
              {isPlayingJuice ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </div>
          <h1>{RES.nameLegend}</h1>
          <p>{RES.artist1}</p>
        </div>

        <div className="ed-sheeran album-container">
          <div className="album-cover-wrapper">
            <img src={ed} alt="ed" width={150} />
            <button
              onClick={() => setIsPlayingEd(!isPlayingEd)}
              className="play-button-overlay"
              aria-label={isPlayingEd ? "Pause" : "Play"}
            >
              {isPlayingEd ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </div>
          <h1>{RES.nameEd}</h1>
          <p>{RES.artist2}</p>
        </div>

        <div className="carti album-container">
          <div className="album-cover-wrapper">
            <img src={carti} alt="carti" width={150} />
            <button
              onClick={() => setIsPlayingCarti(!isPlayingCarti)}
              className="play-button-overlay"
              aria-label={isPlayingCarti ? "Pause" : "Play"}
            >
              {isPlayingCarti ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </div>
          <h1>{RES.nameCarti}</h1>
          <p>{RES.artist3}</p>
        </div>

        <div className="travis album-container">
          <div className="album-cover-wrapper">
            <img src={travis} alt="travis" width={150} />
            <button
              onClick={() => setIsPlayingTravis(!isPlayingTravis)}
              className="play-button-overlay"
              aria-label={isPlayingTravis ? "Pause" : "Play"}
            >
              {isPlayingTravis ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </div>
          <h1>{RES.nameTravis}</h1>
          <p>{RES.artist4}</p>
        </div>

        <div className="The-weeknd album-container">
          <div className="album-cover-wrapper">
            <img src={weeknd} alt="The Weeknd" width={150} />
            <button
              onClick={() => setIsPlayingWeeknd(!isPlayingWeeknd)}
              className="play-button-overlay"
              aria-label={isPlayingWeeknd ? "Pause" : "Play"}
            >
              {isPlayingWeeknd ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </div>
          <h1>{RES.nameWeeknd}</h1>
          <p>{RES.artist5}</p>
        </div>

        <div className="x album-container">
          <div className="album-cover-wrapper">
            <img src={x} alt="X" width={150} />
            <button
              onClick={() => setIsPlayingX(!isPlayingX)}
              className="play-button-overlay"
              aria-label={isPlayingX ? "Pause" : "Play"}
            >
              {isPlayingX ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>
          </div>
          <h1>{RES.nameX}</h1>
          <p>{RES.artist6}</p>
        </div>
      </div>
      <div className="see-all">
        <h1>{RES.seeall}</h1>
      </div>
    </>
  );
}

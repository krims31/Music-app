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
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div className="recently-container">
        <h1>{RES.recently}</h1>
        <div className="juice-wrld">
          <img src={legend} alt="Juice WRLD - Wishing Well" width={150} />
          <button
            onClick={togglePlay}
            className="play-button-overlay"
            aria-label={isPlaying ? "Pause" : "Continue"}
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
          <h1>{RES.nameLegend}</h1>
          <p>{RES.artist1}</p>
        </div>
      </div>
      <div className="ed-sheeran">
        <img src={ed} alt="ed" width={150} />
        <h1>{RES.nameEd}</h1>
        <p>{RES.artist2}</p>
      </div>
      <div className="carti">
        <img src={carti} alt="carti" width={150} />
        <h1>{RES.nameCarti}</h1>
        <p>{RES.artist3}</p>
      </div>
      <div className="travis">
        <img src={travis} alt="travis" width={150} />
        <h1>{RES.nameTravis}</h1>
        <p>{RES.artist4}</p>
      </div>
      <div className="The-weeknd">
        <img src={weeknd} alt="The Weeknd" width={150} />
        <h1>{RES.nameWeeknd}</h1>
        <p>{RES.artist5}</p>
      </div>
      <div className="x">
        <img src={x} alt="X" width={150} />
        <h1>{RES.nameX}</h1>
        <p>{RES.artist6}</p>
      </div>
    </>
  );
}

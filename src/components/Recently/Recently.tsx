import "./Recently.scss";
import legend from "./assets/ab67616d0000b2733e0698e4ae5ffb82a005aeeb.jpeg";

const RES = {
  recently: "Recently plays",
  nameLegend: "Wishing Well",
  artist1: "Juice WRLD",
  nameEd: "Castle on the Hill",
  artist2: "Ed Sheeran",
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
  return (
    <>
      <div className="recently-container">
        <h1>{RES.recently}</h1>
        <div className="juice-wrld">
          <img src={legend} alt="Juice WRLD - Wishing Well" width={150} />
          <h1>{RES.nameLegend}</h1>
          <p>{RES.artist1}</p>
        </div>
      </div>
      <div className="ed-sheeran">
        <img src="" alt="" />
        <h1>{RES.nameEd}</h1>
        <p>{RES.artist2}</p>
      </div>
    </>
  );
}

import "./Search.scss";
import search from "./assets/icons8-search-50.png";

export default function Search() {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search tracks, albums, artists" />
      </div>
      <div className="search">
        <img src={search} alt="search" width={20} />
      </div>
    </>
  );
}

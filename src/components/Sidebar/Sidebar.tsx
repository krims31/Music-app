import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa"; // <-- импорт иконки
import "../Sidebar/sidebar.scss";
import home from "./assets/house.png";
import albums from "./assets/icons8-albums-96.png";
import favourite from "./assets/icons8-favourite-96.png";
import genres from "./assets/icons8-medium-icons-72.png";
import recently from "./assets/icons8-music-96.png";
import artist from "./assets/icons8-person-96.png";

const TEXT = {
  music: "Echo Music",
  home: "Home",
  genres: "Genres",
  artist: "Artists",
  albums: "Albums",
  favorites: "Favorites",
  recently: "Recently Plays",
  playlist: "Playlists",
};

export default function Sidebar() {
  const [playlist, setPlaylist] = useState<string[]>([]);
  const [newPlaylistName, setNewPlaylistName] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleAddClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlaylistName(e.target.value);
  };

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newPlaylistName.trim() !== "") {
      setPlaylist([...playlist, newPlaylistName.trim()]);
      setNewPlaylistName("");
      setShowInput(false);
    }
  };

  // Удаление плейлиста по индексу
  const handleDeletePlaylist = (index: number) => {
    setPlaylist(playlist.filter((_, i) => i !== index));
  };

  return (
    <aside className="sidebar">
      <div className="logo">{TEXT.music}</div>

      <nav className="menu">
        <NavLink to="/" className="menu-item">
          <img src={home} alt="home" width={30} style={{ marginLeft: "-40px" }} />
          <div>{TEXT.home}</div>
        </NavLink>
        <NavLink to="/genres" className="menu-item">
          <img src={genres} alt="genres" width={30} style={{ marginLeft: "-40px" }} />
          <div>{TEXT.genres}</div>
        </NavLink>
        <NavLink to="/artist" className="menu-item">
          <img src={artist} alt="artist" width={30} style={{ marginLeft: "-40px" }} />
          <div>{TEXT.artist}</div>
        </NavLink>
        <NavLink to="/albums" className="menu-item">
          <img src={albums} alt="albums" width={30} style={{ marginLeft: "-40px" }} />
          <div>{TEXT.albums}</div>
        </NavLink>
        <NavLink to="/favorites" className="menu-item2">
          <img src={favourite} alt="favourite" width={30} style={{ marginLeft: "-10px" }} />
          <div>{TEXT.favorites}</div>
        </NavLink>
        <NavLink to="/recently" className="menu-item3">
          <img src={recently} alt="recently" width={30} style={{ marginLeft: "-40px" }} />
          <div>{TEXT.recently}</div>
        </NavLink>

        <div className="playlist">
          <h1>{TEXT.playlist}</h1>
          <button onClick={handleAddClick}>+</button>
          {showInput && (
            <input
              type="text"
              value={newPlaylistName}
              onChange={handleInputChange}
              onKeyDown={handleInputSubmit}
              placeholder="Enter playlist name"
              autoFocus
              style={{
                marginTop: "5px",
                width: "90%",
                padding: "10px 5px",
                borderRadius: "5px",
                border: "1px solid #1e90ff",
                background: "#1a1a1a",
                color: "#fff",
              }}
            />
          )}
          <ul>
            {playlist.map((item, index) => (
              <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {item}
                <FaTrash
                  style={{ cursor: "pointer", marginLeft: "10px", color: "#ff4d4d" }}
                  onClick={() => handleDeletePlaylist(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Search from "./components/Header/Search";
import Music from "./components/MusicPlay/Music";
import ProfileAuth from "./components/ProfileAuth/ProfileAuth";
import Recently from "./components/Recently/Recently";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Search />
        <Recently />
        <Music />
        <ProfileAuth />
      </BrowserRouter>
    </div>
  );
}

export default App;

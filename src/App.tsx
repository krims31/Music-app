import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Search from "./components/Header/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import Recently from "./components/Recently/Recently";
import Music from "./components/MusicPlay/Music";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Search />
        <Recently />
        <Music />
      </BrowserRouter>
    </div>
  );
}

export default App;

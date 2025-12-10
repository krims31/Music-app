import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Search from "./components/Header/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import Recently from "./components/Recently/Recently";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Search />
        <Recently />
      </BrowserRouter>
    </div>
  );
}

export default App;

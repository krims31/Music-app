import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Search from "./components/Header/Search";
import AuthProvider from "./components/LoginAuth/AuthContext";
import LoginAuth from "./components/LoginAuth/LoginAuth";
import Music from "./components/MusicPlay/Music";
import ProfileAuth from "./components/ProfileAuth/ProfileAuth";
import Recently from "./components/Recently/Recently";
import Sidebar from "./components/Sidebar/Sidebar";
import { Favourites } from "./Favourites/Favourites";
import { PlayerProvider } from "./components/PlayerContext/PlayerContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PlayerProvider>
          <Routes>
            <Route element={<ProtectedLayout />}>
              <Route path="/" element={<Recently />} />
              <Route path="/recently" element={<Recently />} />
              <Route path="/favourites" element={<Favourites />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PlayerProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

function ProtectedLayout() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <Search />
      <div className="content-area">
        <Outlet />
      </div>
      <Music />
      <ProfileAuth />
    </div>
  );
}

function LoginPage() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <LoginAuth />;
}

export default App;

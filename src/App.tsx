import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Search from "./components/Header/Search";
import AuthProvider from "./components/LoginAuth/AuthContext";
import LoginAuth from "./components/LoginAuth/LoginAuth";
import Music from "./components/MusicPlay/Music";
import ProfileAuth from "./components/ProfileAuth/ProfileAuth";
import Recently from "./components/Recently/Recently";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

// Компонент главного приложения
function MainApp() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login", { replace: true });
  };

  return (
    <div className="app-container">
      <Sidebar />
      <Search />
      <Recently />
      <Music />
      <ProfileAuth />
    </div>
  );
}

// Компонент защиты маршрута
function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <MainApp />;
}

// Компонент страницы логина
function LoginPage() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <LoginAuth />;
}

export default App;

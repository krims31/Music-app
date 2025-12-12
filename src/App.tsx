import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Search from "./components/Header/Search";
import AuthProvider from "./components/LoginAuth/AuthContext";
import LoginAuth from "./components/LoginAuth/LoginAuth";
import Music from "./components/MusicPlay/Music";
import ProfileAuth from "./components/ProfileAuth/ProfileAuth";
import Recently from "./components/Recently/Recently";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Проверяем авторизацию при загрузке
  useEffect(() => {
    const authStatus = localStorage.getItem("auth") === "true";
    console.log("App mounted, auth status:", authStatus);
    setIsAuthenticated(authStatus);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Главная страница - всегда защищена */}
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <>
                    <Sidebar />
                    <Search />
                    <Recently />
                    <Music />
                    <ProfileAuth />
                  </>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Страница логина */}
            <Route
              path="/login"
              element={
                !isAuthenticated ? <LoginAuth /> : <Navigate to="/" replace />
              }
            />

            {/* Для всех остальных маршрутов */}
            <Route
              path="*"
              element={
                <Navigate to={isAuthenticated ? "/" : "/login"} replace />
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

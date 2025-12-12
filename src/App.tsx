import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./components/Header/Search";
import AuthProvider from "./components/LoginAuth/AuthContext";
import LoginAuth from "./components/LoginAuth/LoginAuth";
import Music from "./components/MusicPlay/Music";
import ProfileAuth from "./components/ProfileAuth/ProfileAuth";
import Recently from "./components/Recently/Recently";
import Sidebar from "./components/Sidebar/Sidebar";
import type { PrivateRouteProps } from "./components/type/PrivateRoute";

export function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuth = localStorage.getItem("auth");

  return isAuth ? <>{children}</> : <LoginAuth />;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginAuth />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <>
                    <Sidebar />
                    <Search />
                    <Recently />
                    <Music />
                    <ProfileAuth />
                  </>
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

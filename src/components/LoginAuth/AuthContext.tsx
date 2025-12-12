import { createContext, useContext, useState } from "react";

const AuthContext = createContext<unknown>(null);

const useAuth = () => useContext(AuthContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, useAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

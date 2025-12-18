import { Login } from "../data/login";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginAuth.scss";

export default function LoginAuth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("auth") === "true";
    if (isAuth) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLogin = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email";
    if (password.length < 6) newErrors.password = "Password too short";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    localStorage.setItem("auth", "true");
    window.dispatchEvent(new Event("storage"));
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <h1>{Login.start}</h1>
          <p>{Login.letterLog}</p>
          <div className="input-login">
            <h1>{Login.name}</h1>
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error.name && <span className="error">{error.name}</span>}
          </div>
          <div className="input-email">
            <h1>{Login.email}</h1>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <span className="error">{error.email}</span>}
          </div>
          <div className="input-password">
            <h1>{Login.password}</h1>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
            {error.password && <span className="error">{error.password}</span>}
          </div>
          <div className="forgot-password">
            <a href="#">{Login.forgot}</a>
          </div>
          <div className="agree">
            <input type="checkbox" />
            <a href="#">{Login.agree}</a>
          </div>
          <div className="btn">
            <button onClick={handleLogin}>{Login.btnlog}</button>
          </div>
          <div className="have">
            <a href="#">{Login.have}</a>
          </div>
          <div className="signup">
            <a href="#">{Login.sign}</a>
          </div>
          <div className="img">
            <img
              src="https://s3.stroi-news.ru/img/priroda-vertikalnie-kartinki-2.jpg"
              alt=""
              width={500}
              height={620}
            />
          </div>
        </div>
      </div>
    </>
  );
}

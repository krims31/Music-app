import { Login } from "../data/login";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginAuth.scss";
export default function LoginAuth() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    window.location.href = "/";
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>{Login.start}</h1>
        <p>{Login.letterLog}</p>
        <div className="input-login">
          <h1>{Login.name}</h1>
          <input type="text" placeholder="Enter your name..." />
        </div>
        <div className="input-email">
          <h1>{Login.email}</h1>
          <input type="email" placeholder="Enter your email..." />
        </div>
        <div className="input-password">
          <h1>{Login.password}</h1>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password..."
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
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
  );
}

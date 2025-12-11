import { useEffect, useRef, useState } from "react";
import { user } from "../data/user";
import "./ProfileAuth.scss";
export default function ProfileAuth() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownref.current &&
        !dropdownref.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="profile" ref={dropdownref}>
        <div className="profile-btn" onClick={toggleDropdown}>
          <img src={user.img} alt="user" className="avatar" />
        </div>
        {isOpen && (
          <div className="profile-dropdown">
            <ul>
              <li>{user.acc}</li>
              <li>{user.prof}</li>
              <li>{user.set}</li>
              <li>{user.log}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

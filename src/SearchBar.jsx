import { useContext } from "react";
import "./CSS/SearchBar.css";
import { Link, useNavigate } from "@tanstack/react-router";
import { CurrentUserContext } from "./contexts";

export default function SearchBar() {
  const [, setCurrentUser ] = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    setCurrentUser(null)
    navigate({ to: "/login" })
  }

  const searchSubmit = () => {
    // do nothing for now
  }

  return (
      <div className="searchbar">
        <div className="searchbar-img">
          <img src="/images/igcameralogo.png" alt="igcamera" />
          <Link to="/">
            <img src="/images/iglogo.png" alt="iglogo" />
          </Link>
        </div>
        <form onSubmit={searchSubmit}>
          <input
            name="searched"
            placeholder="Search..."
          />
        </form>
        <div className="searchbarlogos">
          <img src="/images/compass.svg" alt="compass" />
          <img src="/images/searcheart.png" alt="heart" />
          <img
            src="/images/profile.svg"
            className="profile"
            alt="profile"
            onClick={logOut}
          />
        </div>
      </div>
    );
}
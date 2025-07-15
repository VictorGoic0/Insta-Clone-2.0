import "./CSS/SearchBar.css";
import { Link } from "@tanstack/react-router";

export default function SearchBar() {

  const logOut = () => {
    // do nothing for now
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
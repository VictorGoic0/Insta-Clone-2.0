import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchbar">
      <div className="searchbarimg">
        <img src="/images/igcameralogo.png" alt="igcamera"/>
        <img src="/images/iglogo.png" alt="iglogo"/>
      </div>
      <form onChange={props.performSearch} onSubmit={props.performSearch}>
        <input
        type="text"
        value={props.search}
        onChange={props.handleChanges}
        placeholder="Search...">
        </input>
      </form>
      <div className="searchbarlogos">
        <img src="/images/searcheart.png" alt="heart" />
      </div>
    </div>
  )
}

export default SearchBar;

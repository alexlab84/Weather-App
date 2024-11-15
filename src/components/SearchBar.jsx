import PropTypes from 'prop-types';
import { useState } from "react";


function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(city);   
      setCity('');
    };

  return (
    <form className="search_bar" onSubmit={handleSearch}>
      <input 
        type="text" 
        className="search_bar__input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit" className="search_bar__btn">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
  };

export default SearchBar;
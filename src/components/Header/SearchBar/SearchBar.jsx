import React from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar() {
  return (
    <form className="search-bar">
      <input 
        type="search"
        placeholder="Buscar Produtos"
        className="search__input"
        required
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button> 
    </form>
  );
}

export default SearchBar;


import React from 'react';

function Header() {
  return (
    <header className="header" style={{ background: 'red' }}>
      <div className="container">
        
        <form>
          <input 
            type="search"
            placeholder="Buscar Produtos" 
            className="search__input"
            required
          />

          <button type="submit" className="search__button"></button> 
        </form>

      </div>
    </header>
  );
}

export default Header;

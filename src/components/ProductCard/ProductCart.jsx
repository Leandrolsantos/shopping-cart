import React from 'react';

import './ProductCard.css';

function ProductCart() {
  return (  
    <section className="product-cart">
 
      <img 
        src="https://http2.mlstatic.com/D_720194-MLA43694219090_102020-W.jpg" 
        alt="product" 
        className="card__image" 
      />

      <div className="card__infos">
        <h2 className="card__price">R$200,00</h2>
        <h2 className="card__title">Leandro</h2>
      </div>

      <button type="button" className="button__add-cart">+</button>
    </section>
  );
}

export default ProductCart;

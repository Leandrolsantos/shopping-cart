import React from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCart({ data }) {
  const { title, thumbnail, price } = data;

  return (  
    <section className="product-cart">
 
      <img 
        src={thumbnail. replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product" 
        className="card__image" 
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCart;
ProductCart.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

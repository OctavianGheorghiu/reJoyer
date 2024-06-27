// src/components/Product.js
import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const fallbackPhoto = 'https://via.placeholder.com/150'; // Fallback image URL

const Product = ({ product }) => {
    const { photoUrl, title, price, city } = product;
    return (
        <div className='product'>
            <div className='container__photo'>
                <img className='product__photo' src={photoUrl || fallbackPhoto} alt={title} />
            </div>
            <div className='product__info'>
                <h3 className='product__title'>{title}</h3>
                <p className='product__price'>${price}</p>
                <p className='product__city'>{city}</p>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.shape({
        photoUrl: PropTypes.string,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired
    }).isRequired
};

export default Product;

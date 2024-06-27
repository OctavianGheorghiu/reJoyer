// src/components/ProductList.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import Product from './Product';
import './ProductList.css';

const ProductList = ({ data }) => {
    const history = useHistory();

    const handleProductClick = (id) => {
        history.push(`/product/${id}`);
        console.log("Clicked the product")
    };

    return (
        <ul className='product__list'>
            {data?.content?.length > 0 && data.content.map((product) => (
                <li className='product__item' key={product.id} onClick={() => handleProductClick(product.id)}>
                    <Product product={product} />
                </li>
            ))}
        </ul>
    );
};

export default ProductList;

// src/views/product-page.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { getProductById } from '../api/ProductService';
import './product-page.css';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const fetchProduct = async () => {
        try {
            const response = await getProductById(id);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-page-container">
            <Navbar rootClassName="navbar-root-class-name" parentFunction={() => {}} />
            <div className="product-page-content">               
                <img
                    src={product.photoUrl || 'https://via.placeholder.com/150'}
                    alt={product.title}
                    className="product-page-image"
                />
                <h1>{product.title}</h1>
                <p><strong>Price:</strong> ${product.price}</p>
                 <p><strong>Category:</strong> {product.category}</p>
                <p><strong>City:</strong> {product.city}</p>
                <p><strong>Description:</strong> {product.description}</p>               
            </div>
            <Footer rootClassName="footer-root-class-name" />
        </div>
    );
};

export default ProductPage;

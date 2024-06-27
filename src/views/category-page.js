// category-page.js

import React, { useState, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { Helmet } from 'react-helmet'

import { getAllProducts } from '../api/ProductService';
import Navbar from '../components/navbar'
import ProductCard from '../components/product-card'
import Footer from '../components/footer'
import './category-page.css'
import ProductList from '../components/ProductList';
import { counties } from '../variables/constants';

const CategoryPage = (props) => {

  const [data, setData] = useState({});
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(99999);
  const [selectedCity, setSelectedCity] = useState('All');

  const { category } = useParams();

  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

  const updatePage = () => {
    forceUpdate();
  };


  const getProducts = async (page = 0, size = 10) => {
    try {
        const productFilterRequest = {
            page: "0",
            size: "10",
            minPrice: minimum,
            maxPrice: maximum,
            city: selectedCity
        };
        console.log(category);
        const response = await getAllProducts(category, productFilterRequest);
        if (response && response.data) {
            setData(response.data);
        } else {
            setData({ content: [] }); // Empty structure if no data
        }
        console.log(data);
    } catch (error) {
        console.log(error);
        setData({ content: [] });
    }
};
  
  useEffect(() => {
    getProducts();
  }, [reducerValue]);
  
  
  
  const handleClick = (event) => {
    event.preventDefault(); 

    console.log('Minimum:', minimum);
    console.log('Maximum:', maximum);
    console.log('Counties:', selectedCity);
    updatePage();
  };

  return (
    <div className="category-page-container">
      <Helmet>
        <title>CategoryPage - Mobillio Online Store</title>
        <meta
          property="og:title"
          content="CategoryPage - Mobillio Online Store"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name" parentFunction={updatePage}></Navbar>
      <div className="category-page-main">
        <div className="category-page-blog ">
          <div className="category-page-max-width max-width-container">
            <div className="category-page-container1 filters-box">
              <div className="category-page-container2">
                <h1 className="category-page-text">FILTERS</h1>
              </div>
              <form className="category-page-form" >
                <div className="category-page-container3">
                  <h1 className="category-page-text01">
                    <span>PRICE</span>
                    <br></br>
                  </h1>
                  <div className="category-page-container4">
                    <input
                      type="number"
                      max="999999"
                      min="0"
                      name="minimum"
                      value={minimum}
                      placeholder="min."
                      className="category-page-input input"
                      onChange={(e) => setMinimum(parseInt(e.target.value))}
                    />
                    <div className="category-page-container5">
                      <span className="category-page-text04">-</span>
                    </div>
                    <input
                      type="number"
                      max="999999"
                      min="0"
                      name="maximum"
                      value={maximum}
                      placeholder="max."
                      className="category-page-textinput input"
                      onChange={(e) => setMaximum(parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <div className="category-page-container6">
                  <h1 className="category-page-text05">
                    <span>COUNTY</span>
                    <br></br>
                  </h1>
                  <select 
                  value={selectedCity}
                  className="category-page-select"
                  size="5"
                  onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {counties.map((county) => (
                    <option key={county} value={county}>{county}</option>
                ))}
                  </select>
                </div>
                <button type='button' className="category-page-button button" onClick={handleClick}>
                  <span>
                    <span>Apply Filters</span>
                    <br></br>
                  </span>
                </button>
              </form>
            </div>
            <div className="category-page-container7">
              {/* <ProductCard rootClassName="product-card-root-class-name"></ProductCard> */}
              <ProductList data={data} />
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default CategoryPage

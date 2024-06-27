// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import './navbar.css';
import Cookies from 'js-cookie';

const Navbar = (props) => {
    const history = useHistory();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const handleNavigation = (category) => {
        history.push(`/category-page/${category}`);
        props.parentFunction(); // Ensure this is a valid function
    };

    return (
        <div className={`navbar-navbar ${props.rootClassName}`}>
            <header data-role="Header" className="navbar-header max-width-container">
                <div className="navbar-container">
                    <div className="navbar-navbar1">
                        <div className="navbar-left">
                            <Link to="/" className="navbar-logo-center navbar-logo-title">
                                {props.logoCenter}
                            </Link>
                            <div data-thq="thq-dropdown" className="navbar-thq-dropdown list-item">
                                <div data-thq="thq-dropdown-toggle" className="navbar-dropdown-toggle">
                                    <span className="menu-item">
                                        <span className="">CATEGORIES</span>
                                        <br />
                                    </span>
                                    <div data-thq="thq-dropdown-arrow" className="navbar-dropdown-arrow">
                                        <svg viewBox="0 0 1024 1024" className="navbar-icon">
                                            <path d="M426 726v-428l214 214z" />
                                        </svg>
                                    </div>
                                </div>
                                <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list">
                                    {[props.text8, props.text9, props.text10, props.text11, props.text12, props.text13, props.text14, props.text15, props.text16, props.text17, props.text18]
                                    .map((text, index) => (
                                        <li key={index} data-thq="thq-dropdown" className="navbar-dropdown list-item">
                                            <div data-thq="thq-dropdown-toggle" className="navbar-dropdown-toggle01" onClick={() => handleNavigation(text)}>
                                                <span className="navbar-text03">{text}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-middle">
                            {isHomePage ? (
                                <>
                                    <a href="#about" className="navbar-text14 navbar-link">{props.text}</a>
                                    <a href="#blog" className="navbar-text15 navbar-link">{props.text1}</a>
                                </>
                            ) : (
                                <div style={{ height: '24px' }} /> // Maintain the same height as links
                            )}
                        </div>
                        <div className="navbar-right">
                            <div className="navbar-icons icons">
                                {Cookies.get('userId') !== undefined ? (
                                    <>
                                        <button className="navbar-button button" onClick={() => { history.push(`/account`); }}>Account</button>
                                    </>
                                ) : (
                                    <>
                                        <button className="navbar-button button" onClick={() => { history.push(`/log-in`); }}>{props.button}</button>
                                    </>)}

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

Navbar.defaultProps = {
    button: 'Sign In',
    imageAlt: 'iconsbxscart3271299',
    imageAlt1: 'iconsbxsheartcircle3271300',
    imageAlt2: 'AccountCircle3271301',
    imageSrc: 'https://example.com/path/to/icon1.svg',
    imageSrc1: 'https://example.com/path/to/icon3.svg',
    imageSrc2: 'https://example.com/path/to/icon2.svg',
    logoCenter: 'reJOYER',
    logoCenter1: 'ReJOYER',
    parentFunction: () => { }, // Provide a default empty function
    rootClassName: '',
    text: 'LOOKBOOK',
    text1: 'SPECIAL',
    text2: 'SHOP',
    text3: 'LOOKBOOK',
    text4: 'SPECIAL',
    text5: 'ABOUT',
    text6: 'BLOG',
    text7: 'CONTACT',
    text8: 'Arts and Crafts & Stationery',
    text9: 'Automotive & Tools',
    text10: 'Beauty & Personal Care',
    text11: 'Electronics',
    text12: 'Fashion',
    text13: 'Food & Beverages',
    text14: 'Furniture & Decor',
    text15: 'Games & Books',
    text16: 'Hobby',
    text17: 'Home & Kitchen',
    text18: 'Sports & Travel'
};

Navbar.propTypes = {
    button: PropTypes.string,
    imageAlt: PropTypes.string,
    imageAlt1: PropTypes.string,
    imageAlt2: PropTypes.string,
    imageSrc: PropTypes.string,
    imageSrc1: PropTypes.string,
    imageSrc2: PropTypes.string,
    logoCenter: PropTypes.string,
    logoCenter1: PropTypes.string,
    parentFunction: PropTypes.func,  // Non-string, function type
    rootClassName: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
    text5: PropTypes.string,
    text6: PropTypes.string,
    text7: PropTypes.string,
    text8: PropTypes.string,
    text9: PropTypes.string,
    text10: PropTypes.string,
    text11: PropTypes.string,
    text12: PropTypes.string,
    text13: PropTypes.string,
    text14: PropTypes.string,
    text15: PropTypes.string,
    text16: PropTypes.string,
    text17: PropTypes.string,
    text18: PropTypes.string
};


export default Navbar;

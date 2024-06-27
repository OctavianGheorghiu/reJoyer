// src/index.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Cookies from 'js-cookie';

import './style.css';
import CategoryPage from './views/category-page';
import Home from './views/home';
import NotFound from './views/not-found';
import ProductPage from './views/product-page';
import SignIn from './views/sign-in';
import Account from './views/account';
import Register from './views/register';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {

    useEffect(() => {
        //
        //Cookies.remove('userId');
        // console.log("Home");
        // console.log(Cookies.get('userId'));
    })

    return (
        <Router>
            <Switch>
                <Route exact path="/category-page/:category" 
                    component={CategoryPage} 
                    key={window.location.pathname} />
                <Route exact path="/product/:id" component={ProductPage} />
                <Route exact path="/log-in" component={SignIn} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} path="**" />
                <Redirect to="**" />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

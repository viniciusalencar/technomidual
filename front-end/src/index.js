import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from './template/Navbar/navbar'
import Footer from './template/Footer/footer';


import App from './App';
import Home from './pages/Home/home'
import About from './pages/About/about'
import Contacts from './pages/Contacts/contacts'
import Servicing from './pages/Servicing/servicing'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about"  component={About} />
                <Route path="/Contacts" component={Contacts} />
                <Route path="/servicing" component={Servicing} />
            </Switch>
    <Footer />
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

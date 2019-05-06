import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import AboutUs from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery/Gallery';
import Products from './components/Products/Products';

export default function Main () {
  return (
    <Switch>
        <Route exact path = '/' component = {LandingPage} />
        <Route path = '/about' component = {AboutUs} />
        <Route path = '/gallery' component = {Gallery} />
        <Route path = '/products' component = {Products} />
    </Switch>
  )
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import CarsPage from "../pages/cars-page";
import BrandsPage from "../pages/brands-page"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


export default function Routes() {
    return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/brands" />
            </Route>
            <Route path="/brands">
            </Route>
            <Route path="/carros">
              <CarsPage/>
            </Route>
          </Switch>
        </Router>
      );
}

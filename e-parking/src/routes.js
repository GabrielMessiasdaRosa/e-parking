import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import BrandsScreen from "./screens/brands-screen";
import CarsScreen from "./screens/cars-screen";
import BrandFormScreen from "./screens/brand-form-screen";
import Menu from "./components/menu";

const Routes = () => {
  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "2em",
    padding: "1em",
  };
  return (
    <Router>
      <Menu>
        <Link style={linkStyles} to="/">
          Brands
        </Link>
        <Link style={linkStyles} to="/cars">
          Cars
        </Link>
      </Menu>
      <Switch>
        <Route exact path="/">
          <Redirect to="/brands" />
        </Route>
        <Route exact path="/brands">
          <BrandsScreen />
        </Route>
        <Route exact path="/brands/new">
          <BrandFormScreen />
        </Route>
        <Route exact path="/brands/:id">
          <BrandFormScreen />
        </Route>
        <Route path="/cars">
          <CarsScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Menu from "./components/menu";
import BrandsScreen, { GetBtnLink } from "./screen/brands-screen";
import CarsScreen from "./screen/cars-screen";
import BrandsFormScreen from "./screen/brands-form-screen";
export default function Routes() {
  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "2em",
    padding: "1em"
  };
  return (
    <Router>
      <Menu>
        <Link style={linkStyles} to="/cars">Cars</Link>
        <Link style={linkStyles} to="/brands">Brands</Link>
        
      </Menu>
      <Switch>
        <Route exact path="/">
          <Redirect to="/brands" />
        </Route>
        <Route path="/brands">
          <BrandsScreen></BrandsScreen>
        </Route>
        <Route path="/cars">
          <CarsScreen></CarsScreen>
        </Route>
        <Switch>
        <Route path="/brands/new">
          <BrandsFormScreen />
        </Route>
      </Switch>
      </Switch>
    </Router>
  );
}

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
import CarFormScreen from "./screens/car-form-screen";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Home from "./screens/homes-screen";
import Separator from "./components/separator";

const Routes = () => {
  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "2em",
    padding: "1em",
  };
  return (
    <>
    
    
    
    <Router>
      <Menu>
        <Link style={linkStyles} to="/home">
          Home
        </Link>
        <Link style={linkStyles} to="/brands">
          Brands
        </Link>
        <Link style={linkStyles} to="/cars">
          Cars
        </Link>
      </Menu>
      <Separator/>
      <div class="alert alert-danger container  m-auto p-2" role="alert">
        <h4>WARNING!!! IN DEVELOPMENT!!! v0.1.0</h4>
      </div>
      <Separator size="xl"/>
      <Switch>
        <Route exact path="/e-parking">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
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

        <Route exact path="/cars">
          <CarsScreen/>
        </Route>
        <Route exact path="/car/new">
        <CarFormScreen/>
      </Route>
      <Route exact path="/cars/:id">
        <CarFormScreen/>
      </Route>
      </Switch>
      
    </Router>
    <Footer></Footer>
    </>
  );
};

export default Routes;

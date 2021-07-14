import React from "react";
import Table from "../components/table";
import Separator from "../components/separator";
import Button from "../components/button";
import Container from "../components/container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import BrandsFormScreen from "./brands-form-screen";

const localhost = "http://localhost:8080/brands";
const BrandsScreen = () => {
  
  const [brands, setBrands] = React.useState([]);
  React.useEffect(() => {
    fetch(localhost).then((result) => {
      result.json().then((data) => {
        setBrands(data);
      });
    });
  }, []);

  return (
    <div>
      <Router>
        <div
          style={{
            width: "100%",
            height: "4em",
          }}
        >
          <h1
            style={{
              margin: "1em 0 0 6em",
            }}
          >
            Brands
          </h1>
          <Button size="sm" intent="success">
            {GetBtnLink}
          </Button>
        </div>
        <Separator />
        <Container>
          <Table
            data={brands}
            columns={[
              { path: "id", label: "#" },
              { path: "name", label: "Brands" },
              {
                path: "",
                label: "Options",
                render: () => (
                  <div style={{ display: "flex" }}>
                    <Button>Edit</Button>
                    <Separator size="sm" />
                    <Button intent="danger">Delete</Button>
                  </div>
                ),
              },
            ]}
          />
        </Container>
      </Router>
    </div>
  );
};

export default BrandsScreen;

export function GetBtnLink({children, to}) {
  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "1em",
    padding: "1em",
  };
  return (
    
    <Link to={to} style={linkStyles}>
      {children}
    </Link>
  );
}

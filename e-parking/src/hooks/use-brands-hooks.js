import React, { Component } from "react";
import PropTypes from "prop-types";
import getBrandsService from "../services/brand-services/get-brands-service";

const useBrands = () => {
  const [brands, setBrands] = React.useState([]);

  function loadBrands() {
    getBrandsService().then((data) => {
      setBrands(data);
    });
  }

  React.useEffect(() => {
    loadBrands();
  }, []);
  return { brands, loadBrands };
};
export default useBrands;

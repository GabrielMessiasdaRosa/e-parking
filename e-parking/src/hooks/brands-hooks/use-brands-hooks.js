import React, { Component } from "react";
import PropTypes from "prop-types";
import getBrandsService from "../../services/brand-services/get-brands-service";

const useBrands = () => {
  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
    getBrandsService().then((data) => {
      setBrands(data);
    });
  }, []);
  return { brands };
};
export default useBrands;

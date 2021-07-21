import React from "react";
import PropTypes from "prop-types";
import Select from "./select";
import useBrands from "../hooks/use-brands-hooks";
const SelectBrand = ({ value, onChange }) => {
  const { brands } = useBrands();

  return (
    <Select
      value={value}
      onChange={(brandId) => {
        onChange(brands.find((brand) => brand.id == brandId));
      }}
      options={brands.map(
        (brand) =>
          ({
            value: brand.id,
            label: brand.name,
          })
      )}
    ></Select>
  );
};

export default SelectBrand;

SelectBrand.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

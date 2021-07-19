import React from "react";
import PropTypes from "prop-types";
const Select = ({ value, onChange, options }) => {
  const style = {
    width: 150,
    height: 40,
    fontSize: 16,
  };
  return (
    <select onChange={(e) => onChange(e.target.value)} style={style}>
      {options.map((option) => (
        <option
          key={option.value}
          selected={option.value === value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;

Select.propTypes = {
  onChange: PropTypes.func,
};

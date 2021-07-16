import React from "react";
import PropTypes from "prop-types";

export default function Input({
  id,
  value,
  onChange,
  placeholder,
  type,
  disabled,
  required,
}) {
  const styleSubmit = {
    width: 132,
    height: 50,
    border: "none",
    backgroundColor: "orange",
    cursor: "pointer",
    boxShadow: "0px 1px 3px #000000",
  };
  const styleOthers = {
    width: 250,
    height: 30,
  };
  return (
    <input
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      required={required}
      style={type === "submit" ? styleSubmit : styleOthers}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "email",
    "password",
    "number",
    "search",
    "date",
    "time",
    "datetime-local",
    "black",
  ]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

Input.defaultProps = {
  id: undefined,
  placeholder: undefined,
  type: "text",
  disabled: false,
  required: false,
};

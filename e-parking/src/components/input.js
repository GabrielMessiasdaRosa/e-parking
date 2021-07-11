import React from "react";
import PropTypes from "prop-types";
const getType = (type) =>
  ({
    text: "text",
    email: "email",
    password: "password",
    number: "number",
    search: "search",
    date: "date",
    time: "tipe",
    datetimeLocal: "datetime-local",
    submit: "submit",
  }[type]);
export default function Input({ id, value, onChange, placeholder, type }) {
  const styleSubmit = {
    width: 150,
    height: 50,
    border: "none",
    backgroundColor: "orange",
    margin: "1em",
  };
  const styleOthers = {
    width: 250,
    height: 50,
    margin: "1em",
  };

  return (
    <input
      style={type === "submit" ? styleSubmit : styleOthers}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={getType(type)}
    ></input>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
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
    "submit",
  ]),
};

Input.defaultProps = {
  value: undefined,
  onChange: undefined,
  placeholder: undefined,
  type: undefined,
};

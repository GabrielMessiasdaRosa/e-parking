import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
}
export default Label
Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
};

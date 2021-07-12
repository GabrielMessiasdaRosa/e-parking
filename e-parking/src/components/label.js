import React from "react";
import PropTypes from "prop-types";

export default function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}

Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
};


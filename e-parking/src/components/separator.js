import React from "react";
import PropTypes from "prop-types";

const getSize = (size) => {
  return {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
  }[size];
};

const Separator = ({ size }) => {
  return <div style={{ width: getSize(size), height: getSize(size) }} />;
};

export default Separator;

Separator.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

Separator.defaultProps = {
  size: "md",
};

import React from "react";
import PropTypes from "prop-types";

const getSize = (size) =>
  ({
    xs: 24,
    sm: 30,
    md: 40,
    lg: 50,
    xl: 60,
  }[size]);

export default function Separator({ size }) {
  const style = {
    width: getSize(size),
    height: getSize(size),
  };

  return <div style={style} size={size}></div>;
}

Separator.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};
Separator.defaultProps = {
  size: "md",
};

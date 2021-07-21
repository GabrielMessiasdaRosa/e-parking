import React from "react";
import PropTypes from "prop-types";

const getSize = (size) =>
  ({
    h5: 10,
    h4: 13,
    h3: 16,
    h2: 18,
    h1: 24,
  }[size]);

const getFontWeight = (fontWeight) =>
  ({
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  }[fontWeight]);

const Text=({ children, size, color, fontWeight }) => {
  return (
    <p
      size={size}
      color={color}
      fontWeight={fontWeight}
      style={{
        fontSize: getSize(size),
        color: color,
        fontWeight: getFontWeight(fontWeight),
      }}
    >
      {children}
    </p>
  );
}
export default Text;
Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["h5", "h4", "h3", "h2", "h1"]),
  color: PropTypes.string,
  fontWeight: PropTypes.oneOf([
    "thin",
    "extralight",
    "light",
    "normal",
    "medium",
    "semibold",
    "bold",
    "extrabold",
    "black",
  ]),
};
Text.defaultProps = {
  size: "md",
  color: "black",
  fontWeight: "normal",
};

import React from "react";
import PropTypes from "prop-types";

const getSize = (size) =>
  ({
    xs: 10,
    sm: 13,
    md: 16,
    lg: 18,
    xl: 24,
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

export default function Text({ children, size, color, fontWeight }) {
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

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
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

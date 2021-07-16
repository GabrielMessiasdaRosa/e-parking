import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Menu({ children }) {
  const styles = {
    width: "100%",
    height: "15vh",
    margin: "0",
    padding: "1em",
    display: "flex",
    color: "whitesmoke",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.6)",
    background:
      "linear-gradient(126deg, rgba(2,0,36,1) 0%, rgba(38,38,203,1) 0%, rgba(20,123,228,1) 49%, rgba(26,197,232,1) 100%)",
  };
  const listStyles = {
    listStyleType: "none",
  };

  return (
    <div style={styles}>
      <ul style={listStyles}>
        <li>{children}</li>
      </ul>
    </div>
  );
}

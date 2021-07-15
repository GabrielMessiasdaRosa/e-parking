import React from "react";
import PropTypes from "prop-types";
import Text from "./text";

const Footer = (props) => {
  const styles = {};

  return (
    <footer
      style={{
        position:"static",
        padding: "30px",
        marginBottom: 0,
        width: "102%",
        boxShadow: "0px -2px 5px 0px rgba(0,0,0,0.6)",
        background:
          "linear-gradient(108deg, rgba(2,0,36,1) 0%, rgba(26,197,232,1) 0%, rgba(20,123,228,1) 50%, rgba(38,38,203,1) 100%)",
      }}
    >
      <div style={{
        width:"fit-content",
        margin: "auto"}}>
        <Text size="xl" color="whitesmoke" fontWeight="light">
          Trainee REACT.js 8TLines code
        </Text>
        <Text size="ls" color="whitesmoke" fontWeight="light">Trainee squad: Gabriel, Mario, Leonardo</Text>
      </div>
    </footer>
  );
};
export default Footer;

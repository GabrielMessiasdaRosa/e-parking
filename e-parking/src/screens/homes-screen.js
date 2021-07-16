import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "../components/text";
import Separator from "../components/separator";
const Home = () => {
  return (
    <>
      <div style={{ textAlign: "center", height: "50vh" }}>
        <h1 style={{ fontWeight: 300 }}>E-parking</h1>
        <Text size="xl" fontWeight="light">
          A in and out control system for parkings, try for free, make a fork!
        </Text>
      </div>
      <Separator size="xl"/>
      <Separator size="xl"/>
    </>
  );
};

export default Home;

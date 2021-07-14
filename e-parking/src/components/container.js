import React from "react";

const Container = ({ children }) => {
  return (
    <div style={{display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  );
};

export default Container;

import React from "react";

const Container = ({ children }) => {
  return (
    <div style={{ padding: 32, display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  );
};

export default Container;

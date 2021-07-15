import React from "react";
import Routes from "./routes";
import ToastProvider from "./components/toast";

const App = () => {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
};

export default App;

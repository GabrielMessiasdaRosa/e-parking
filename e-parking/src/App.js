import React from "react";
import Routes from "./routes";
import ToastProvider from "./components/toast";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <ToastProvider>
      
      <Routes />
      </ToastProvider>
    </>
  );
};

export default App;

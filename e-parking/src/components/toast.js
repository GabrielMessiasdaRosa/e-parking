import React from "react";
import { createPortal } from "react-dom";

const ToastContext = React.createContext({
  notify: () => {},
});

const ToastProvider = ({ children, timeout = 3000 }) => {
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [intent, setIntent] = React.useState("primary");

  const notify = ({ intent, message }) => {
    setIntent(intent);
    setMessage(message);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, timeout);
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      {createPortal(
        visible ? (
          <div
            style={{
              zIndex: 999,
              width: 450,
              top: 16,
              left: 0,
              right: 0,
              padding: 16,
              borderRadius: 8,
              margin: "0 auto",
              position: "absolute",
              color: "#fff",
              transition: "1s ease-in-out",
              background: {
                primary: "blue",
                danger: "red",
                warning: "orange",
                success: "green",
                info: "teal",
              }[intent],
            }}
          >
            {message}
          </div>
        ) : null,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;

export const useToast = () => React.useContext(ToastContext);

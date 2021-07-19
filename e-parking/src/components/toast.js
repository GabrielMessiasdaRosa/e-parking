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
              borderRadius: 2,
              margin: "0 auto",
              position: "absolute",
              color: "#fff",
              transition: "1s ease-in-out",
              background: {
                primary: "#0d6efd",
                secondary: "#343a40",
                danger: "#dc3545",
                warning: "#ffc830",
                info: "#0dcaf0",
                success: "#198754"
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

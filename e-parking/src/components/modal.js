import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, visible, onRequestClose }) => {
  return visible
    ? createPortal(
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onRequestClose}
        >
          <div
            style={{
              width: 600,
              backgroundColor: "#ffffff",
              borderRadius: 6,
              padding: 16,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;

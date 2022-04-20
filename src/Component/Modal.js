import React from "react";
import ReactDom from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ open, children, onClose }) {
  if (!open) return null;
  const Modal_Styles = {
    position: "fixed",
    top: "-50%",
    left: "-50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1000,
  };
  const Overlay_Styles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(241, 241, 241, 0.25)",
    backdropFilter: "blur(20px)",
    zIndex: 1000,
  };

  const BUTTON = {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "50px",
    position: "fixed",
    background: "transparent",
    border: "none",
    top: "1.5%",
    right: "1.5%",
  };

  return ReactDom.createPortal(
    <div style={Overlay_Styles}>
      <button style={BUTTON} onClick={onClose}>
        {<AiOutlineClose />}
      </button>
      <div styles={Modal_Styles}>{children}</div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;

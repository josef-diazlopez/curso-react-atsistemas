import React from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";

export default withModal;

function withModal(component) {
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  modal.style.zIndex = "999";
  document.body.appendChild(modal);

  return (props) =>
    ReactDOM.createPortal(
      <Modal Component={component} {...props}></Modal>,
      modal
    );
}

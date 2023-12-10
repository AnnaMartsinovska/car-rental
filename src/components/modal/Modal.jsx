import ReactDOM from "react-dom";
import React, { useCallback, useEffect } from "react";

const rootModal = document.querySelector("#modal");

const Modal = ({ children, closeModal }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal, handleKeyDown]);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleBackDrop}>
      <div>
        <button onClick={closeModal}></button>
        {children}
      </div>
    </div>,
    rootModal
  );
};

export default Modal;

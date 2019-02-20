import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

//setting animation timing
const animationTiming = {
  enter: 400,
  exit: 1000
};

const modal = props => {
  return (
    // classNames="fade-slide" is the base css class, see in modal.css
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      // classNames="fade-slide" // using class base
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed"
        // appear:
        // appearActive:
      }}
    >
      {/* {state => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null
        ]; */}
      {/* return ( */}
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
      {/* ); */}
      {/* }} */}
    </CSSTransition>
  );
};

export default modal;

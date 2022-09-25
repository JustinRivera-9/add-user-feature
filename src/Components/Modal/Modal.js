import "./Modal.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="modal-background" onClick={props.exitModal} />;
};

const ModalOverlay = (props) => {
  let errorType = props.errorMessage;
  return (
    <div className="modal">
      <p className="error-title">Invalid Input</p>
      <div>
        <p className="error-message">{errorType}</p>
        <button className="error-button" onClick={props.exitModal}>
          Okay
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop exitModal={props.exitModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          exitModal={props.exitModal}
          errorMessage={props.errorMessage}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;

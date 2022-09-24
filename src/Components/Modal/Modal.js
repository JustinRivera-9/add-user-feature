import "./Modal.css";

const Modal = (props) => {
  let errorType = props.errorMessage;

  return (
    <div className="modal-background">
      <div className="modal">
        <p className="error-title">Invalid Input</p>
        <div>
          <p className="error-message">{errorType}</p>
          <button className="error-button" onClick={props.exitModal}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

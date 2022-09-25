import React, { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import "./AddUser.css";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorType, setErrorType] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const enteredUserInfo = {
      name: enteredName,
      age: enteredAge,
      id: Math.floor(Math.random() * 10000),
    };

    if (enteredName.trim().length === 0 || enteredAge.isNaN) {
      setShowErrorModal(true);
      setErrorType("Please enter a valid name and age (non-empty values).");
    } else if (enteredAge <= 0) {
      setShowErrorModal(true);
      setErrorType("Please enter a valid age (>0).");
    } else {
      // alert(`${enteredUserInfo.name} has been added!`);
      props.onAddedUser(enteredUserInfo);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
    return errorType;
  };

  const exitModalHandler = (e) => {
    setShowErrorModal(false);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Name"
            ref={nameInputRef}
          ></input>
        </div>
        <div className="form-field">
          <label htmlFor="age">Age (Years):</label>
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            ref={ageInputRef}
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
      {showErrorModal && (
        <Modal errorMessage={errorType} exitModal={exitModalHandler} />
      )}
    </div>
  );
}

export default AddUser;

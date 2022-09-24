import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./AddUser.css";

function AddUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorType, setErrorType] = useState("");

  function nameChangeHandler(e) {
    setName(e.target.value);
  }

  function ageChangeHandler(e) {
    setAge(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredUserInfo = {
      name: name,
      age: age,
      id: Math.floor(Math.random() * 10000),
    };

    if (name.length === 0 || age.isNaN) {
      setShowErrorModal(true);
      setErrorType("Please enter a valid name and age (non-empty values).");
    } else if (age <= 0) {
      setShowErrorModal(true);
      setErrorType("Please enter a valid age (>0).");
    } else {
      // alert(`${enteredUserInfo.name} has been added!`);
      props.onAddedUser(enteredUserInfo);
      setName("");
      setAge("");
    }
    return errorType;
  };

  const exitModalHandler = (e) => {
    if (e.target === "button.error-button" || e.target.closest(".modal")) {
      setShowErrorModal(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-field">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className="form-field">
          <label>Age (Years):</label>
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={ageChangeHandler}
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
      {showErrorModal === true && (
        <Modal errorMessage={errorType} exitModal={exitModalHandler} />
      )}
    </div>
  );
}

export default AddUser;

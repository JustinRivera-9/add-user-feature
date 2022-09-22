import React, { useState } from "react";
import "./AddUser.css";

function AddUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function nameChangeHandler(e) {
    setName(e.target.value);
  }

  function ageChangeHandler(e) {
    setAge(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const enteredUserInfo = {
      name: name,
      age: age,
      id: Math.floor(Math.random() * 10000),
    };

    props.onAddedUser(enteredUserInfo);
    setName("");
    setAge("");
  }

  return (
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
  );
}

export default AddUser;

import { useState } from "react";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import UserList from "./Components/UserList/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  // Adds the new user info to the userList array
  const addUserHandler = (newUserInfo) => {
    console.log(newUserInfo);
    setUserList((prevUserList) => {
      return [newUserInfo, ...prevUserList];
    });
  };

  return (
    <div className="user-form">
      <AddUser onAddedUser={addUserHandler} />
      {userList.length === 0 ? (
        <h1 className="empty-list">There are currently no users!</h1>
      ) : (
        <>
          <h1 className="list-title">List of Users</h1>
          <ul className="user-list">
            {userList.map((user) => {
              return (
                <UserList
                  className="user-list"
                  key={user.id}
                  name={user.name}
                  age={user.age}
                />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;

import "./UserList.css";

function UserList(props) {
  return (
    <div className="list-item">
      {props.name} ({props.age} years old)
    </div>
  );
}

export default UserList;

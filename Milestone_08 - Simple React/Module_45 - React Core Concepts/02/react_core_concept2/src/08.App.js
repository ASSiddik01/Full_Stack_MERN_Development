import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Users></Users>
    </div>
  );
}

function Users() {
  // 2
  const [users, setUsers] = useState([]);

  // 3
  useEffect(() => {
    // 4
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  // 1
  return (
    <div>
      {users.map((user) => <User name={user.name} email={user.email}></User> )}
      <h1>Users</h1>
    </div>
  );
}

function User(props) {
  return (
    <div>
      <h3>Name: {props.name} </h3>
      <p>Email: {props.email} </p>
    </div>
  )
}

export default App;

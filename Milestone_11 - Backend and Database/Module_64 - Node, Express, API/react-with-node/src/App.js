import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    // Post data
    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="App">
      <h2>Own data {users.length}</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="Your name" />
        <input type="text" name="email" id="" placeholder="Your email" />
        <input type="submit" value="Add User" />
      </form>

      {users.map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </div>
  );
}

export default App;

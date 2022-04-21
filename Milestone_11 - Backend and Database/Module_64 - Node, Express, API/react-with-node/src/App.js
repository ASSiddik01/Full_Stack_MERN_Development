import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div className="App">
      <h2>Own data {users.length}</h2>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // delete data from server
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    if (proceed) {
      console.log(id);
    }
  };
  return (
    <div>
      <h2>user {users.length} </h2>
      {users.map((user) => (
        <li key={user._id}>
          {" "}
          {user.name}== {user.email}{" "}
          <button onClick={() => handleDelete(user._id)}>x</button>
        </li>
      ))}
    </div>
  );
};

export default Home;

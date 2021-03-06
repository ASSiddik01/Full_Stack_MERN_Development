import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("delete");
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>user {users.length} </h2>
      {users.map((user) => (
        <li key={user._id}>
          {" "}
          {user.name}== {user.email}{" "}
          <Link to={`/update/${user._id}`}>Update</Link>
          <button onClick={() => handleDelete(user._id)}>x</button>
        </li>
      ))}
    </div>
  );
};

export default Home;

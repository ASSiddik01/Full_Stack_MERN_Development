import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const updateUser = { name, email };

    //   send data to server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("User update successfully");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h2>User : {user.name} </h2>
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Type your name"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your email"
          required
        />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default UpdateUser;

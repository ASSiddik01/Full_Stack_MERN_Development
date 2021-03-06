import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    //   send data to server
    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("User added successfully");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h2>User</h2>
      <form onSubmit={handleAddUser}>
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

export default AddUser;

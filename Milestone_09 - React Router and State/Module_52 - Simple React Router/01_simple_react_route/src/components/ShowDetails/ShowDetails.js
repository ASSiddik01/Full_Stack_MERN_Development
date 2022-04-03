import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ShowDetails = () => {
  let { id } = useParams();
  const [friend, setFriends] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
    const { name, email, phone } = friend;
  return (
    <div>
      <h2>This is details page about: {id} </h2>
      <h4>Name: {name} </h4>
      <h4>Email: {email} </h4>
          <h4>Phone: {phone} </h4>
          <p>City: {friend.address?.city} </p>
    </div>
  );
};

export default ShowDetails;

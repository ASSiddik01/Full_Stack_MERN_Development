import React from "react";
import { useNavigate } from "react-router-dom";

const SingleFriend = (props) => {
  console.log(props);
  const { name, username, id } = props.friend;
  let navigate = useNavigate();
  const showDetails = () => {
      const path = `/friend/${id}`;
      navigate(path);
  };
  return (
    <div>
      <h2> {name} </h2>
      <button>
        {" "}
        {username} id:{id}{" "}
      </button>
    </div>
  );
};

export default SingleFriend;

import React from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  console.log(useParams());
  return (
    <div>
      <h2>User : {id} </h2>
    </div>
  );
};

export default UpdateUser;

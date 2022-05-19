import React from "react";

const UserRow = ({ user, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>{user.date}</td>
      <td>{user.slot}</td>
      <td>{user.treatment}</td>
    </tr>
  );
};

export default UserRow;

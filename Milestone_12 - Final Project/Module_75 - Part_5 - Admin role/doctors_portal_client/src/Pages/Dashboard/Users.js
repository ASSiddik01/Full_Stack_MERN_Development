import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl">All Users {users.length} </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>User</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                user={user}
                key={user._id}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppionment = () => {
  // get user
  const [user] = useAuthState(auth);
  const [appiontment, setAppionment] = useState([]);
  console.log(appiontment);

  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAppionment(data));
  }, [user]);
  return (
    <div>
      <h2>Appionment {appiontment.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appiontment.map((a) => (
              <tr>
                <th>{a.treatmentId}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppionment;

import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard_sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-5xl text-secondary">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard_sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Appiontment</Link>
          </li>
          <li>
            <Link to={"/dashboard/review"}>My Reviews</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to={"/dashboard/users"}>All Users</Link>
              </li>
              <li>
                <Link to={"/dashboard/addDoctor"}>Add Doctor</Link>
              </li>
              <li>
                <Link to={"/dashboard/manageDoctor"}>Manage Doctor</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

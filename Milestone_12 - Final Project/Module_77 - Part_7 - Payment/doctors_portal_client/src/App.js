import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Shared/Login";
import Footer from "./Pages/Shared/Footer";
import Appointment from "./Pages/Appointment/Appointment";
import SingUp from "./Pages/Shared/SingUp";
import RequiredAuth from "./Pages/Shared/RequiredAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppionment from "./Pages/Dashboard/MyAppionment";
import MyReviews from "./Pages/Dashboard/MyReviews";
import Users from "./Pages/Dashboard/Users";
import RequiredAdmin from "./Pages/Shared/RequiredAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequiredAuth>
              <Appointment />
            </RequiredAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route index element={<MyAppionment></MyAppionment>}></Route>
          <Route path="review" element={<MyReviews></MyReviews>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="users"
            element={
              <RequiredAdmin>
                <Users></Users>
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequiredAdmin>
                <AddDoctor></AddDoctor>
              </RequiredAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequiredAdmin>
                <ManageDoctors></ManageDoctors>
              </RequiredAdmin>
            }
          ></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SingUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

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
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SingUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

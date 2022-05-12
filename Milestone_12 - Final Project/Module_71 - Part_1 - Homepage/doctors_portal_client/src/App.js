import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

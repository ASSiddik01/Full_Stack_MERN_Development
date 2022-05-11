import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import About from "./component/About";
import Orders from "./component/Orders";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;

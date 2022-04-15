import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Chackout from "./Pages/Chackout/Chackout";
import Home from "./Pages/Home/Home/Home";
import RequiredAuth from "./Pages/Home/RequiredAuth/RequiredAuth";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/chackout"
          element={
            <RequiredAuth>
              <Chackout></Chackout>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

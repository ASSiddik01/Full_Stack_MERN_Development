import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <Student name={"Abu Shama"} id={12}></Student>
      <Student name={"Sabbir"} id={24}></Student>
      <Student name={"Solaiman"} id={28}></Student>
    </div>
  );
}

const studentStyle = {
  backgroundColor: "#ddd",
  border: "2px solid red",
  margin: "10px",
  padding: "10px",
};

function Student(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => setPower(power * 2);
  return (
    <div style={studentStyle}>
      <h2>Name: {props.name} </h2>
      <p>Id: {props.id} </p>
      <p>Power: {power} </p>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Interface } from "readline";
import Conuter from "./components/Conuter";

const name: string = "Shama";
const age: number = 5;
const is: boolean = true;

const students: string[] = ["Shama", " Sunnay", " Sweet"];

interface Person {
  name: string;
  age: number;
  isStudents: boolean;
}

const profile: Person = {
  name: "Shama",
  age: 5,
  isStudents: true,
};

function App() {
  return (
    <div className="App">
      <Conuter />
    </div>
  );
}

export default App;

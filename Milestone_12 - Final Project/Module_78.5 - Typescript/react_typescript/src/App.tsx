import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Interface } from "readline";

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
  return <div className="App"></div>;
}

export default App;

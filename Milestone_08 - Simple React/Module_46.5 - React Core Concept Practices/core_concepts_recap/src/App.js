import "./App.css";

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
  margin:'10px'
};

function Student(props) {
  return (
    <div style={studentStyle}>
      <h2>Name: {props.name} </h2>
      <p>Id: {props.id} </p>
    </div>
  );
}

export default App;

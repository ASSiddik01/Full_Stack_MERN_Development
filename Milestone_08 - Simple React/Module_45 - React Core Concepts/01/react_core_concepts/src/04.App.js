import "./App.css";

function App() {
  return (
    <div className="App">
      <Person name="Shama" age="23" job="student"></Person>
      <Person name="Shakib" age="22" job="student"></Person>
      <h2>About Me</h2>
      <Person></Person>
    </div>
  );
}


function Person(props) {
  console.log(props)
  return (
    <div>
      <h1>Name: {props.name }</h1>
      <p>Age:{props.age} </p>
      <p>Occupation:{props.job} </p>
    </div>
  );
}

export default App;

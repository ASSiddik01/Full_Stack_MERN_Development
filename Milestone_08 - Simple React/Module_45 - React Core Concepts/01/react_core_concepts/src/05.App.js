import "./App.css";

function App() {

  const students = [
    { name:"Shama", id:"26", job:"student"},
    { name:"Shakib", age:"01", job:"student"},
    { name:"Atiq", age:"25", job:"student"},
    { name:"Sumaya", age:"27", job:"student"}
  ]

  return (
    
    <div className="App">
      {
        students.map(student => <Person name={student.name} id={student.id} job={student.job}></Person>)
      }
    </div>
  );
}


function Person(props) {
  console.log(props)
  return (
    <div>
      <h1>Name: {props.name }</h1>
      <p>ID: {props.id} </p>
      <p>Occupation: {props.job} </p>
    </div>
  );
}

export default App;

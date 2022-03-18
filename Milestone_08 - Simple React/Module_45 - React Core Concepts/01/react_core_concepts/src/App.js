import logo from "./logo.svg";
import "./App.css";

// Video 01
const myName = 'Shama';
const versity = {
  backgroundColor: 'antiquewhite',
  color: 'black',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Video 01 */}
        {/* <h1 className="">Abu Shama</h1> */}
        <h1 className="">Name: {myName} </h1>
        <p className="address">Chuadanga</p>
        <p style={versity} >Begum Rokeya University</p>
        <p style={{ color: 'blue', backgroundColor: 'antiquewhite' }} >Begum Rokeya University</p>
        


        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

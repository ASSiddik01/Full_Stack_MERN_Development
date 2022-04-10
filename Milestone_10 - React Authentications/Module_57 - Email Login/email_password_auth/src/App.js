import logo from './logo.svg';
import './App.css';
import app from './firebase.config';
import { getAuth } from "firebase/auth";



const auth = getAuth(app);

function App() {

  const handleEmailInput = (e) => {
    console.log(e.target.value)
  }
  const handlePasswordInput = (e) => {
    console.log(e.target.value)
  }
  const handleFromSubmit = (e) => {
    e.preventDefault();
  }

  
  return (
    <div className="App">
      <form onSubmit={ handleFromSubmit}>
        <input onBlur={handleEmailInput} type="text" name="" id="" />
        <br />
        <input onBlur={handlePasswordInput} type="password" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    
    </div>
  );
}

export default App;

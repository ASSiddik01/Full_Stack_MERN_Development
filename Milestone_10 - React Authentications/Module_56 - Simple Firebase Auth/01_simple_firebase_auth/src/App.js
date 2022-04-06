import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth(app);
  return (
    <div className="App">
      
    
    </div>
  );
}

export default App;

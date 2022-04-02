import "./App.css";
import { Button, Spinner } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* From CDN */}
      {/* <button type="button" className="btn btn-primary">
        Primary
      </button> */}
      {/*  */}

      {/* React Bootstrap */}
      <Button variant="primary">Primary</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default App;

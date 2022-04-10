import "./App.css";
import app from "./firebase.config";
import { getAuth } from "firebase/auth";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const auth = getAuth(app);

function App() {
  const handleEmailInput = (e) => {
    console.log(e.target.value);
  };
  const handlePasswordInput = (e) => {
    console.log(e.target.value);
  };
  const handleFromSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* <form onSubmit={ handleFromSubmit}>
        <input onBlur={handleEmailInput} type="text" name="" id="" />
        <br />
        <input onBlur={handlePasswordInput} type="password" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form> */}

      <Form onSubmit={handleFromSubmit} className="w-50 mx-auto">
        <h2 className="text-primary my-3">Please Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailInput} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordInput} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;

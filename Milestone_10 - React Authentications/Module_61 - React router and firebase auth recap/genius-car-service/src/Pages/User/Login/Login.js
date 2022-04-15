import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto" >
          <Form onSubmit={handleSubmit}>
            <h2 className="my-4">Please Login !!!</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
                  </Form>
                  <p>New to Genius car? <span onClick={navigateRegister} className="text-danger">Create an account?</span> </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

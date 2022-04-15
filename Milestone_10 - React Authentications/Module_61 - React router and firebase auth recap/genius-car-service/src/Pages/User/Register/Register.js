import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, email, password);
  };

  const navigateLogin = (event) => {
    navigate("/login");
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <h2 className="my-4">Please Register !!!</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                placeholder="Enter your name"
                required
              />
              <Form.Text className="text-muted">
                Type your name
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p>
            Already have an account?{" "}
            <span
              onClick={navigateLogin}
              className="text-danger cursor_pointer"
            >
              Please login
            </span>{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

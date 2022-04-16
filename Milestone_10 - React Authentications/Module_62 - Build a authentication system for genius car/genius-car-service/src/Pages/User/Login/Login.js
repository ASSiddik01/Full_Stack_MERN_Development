import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let errorElement;

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message} </p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleReasetPassword = async () => {
    const email = emailRef.current.value;

    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <h2 className="my-4">Please Login !!!</h2>
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
          {errorElement}
          <p>
            New to Genius car?{" "}
            <span
              onClick={navigateRegister}
              className="text-primary cursor_pointer"
            >
              Create an account
            </span>{" "}
          </p>
          <p>
            Forget Password?{" "}
            <span
              onClick={handleReasetPassword}
              className="text-primary cursor_pointer"
            >
              Reset Password
            </span>{" "}
          </p>
          <SocialLogin></SocialLogin>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

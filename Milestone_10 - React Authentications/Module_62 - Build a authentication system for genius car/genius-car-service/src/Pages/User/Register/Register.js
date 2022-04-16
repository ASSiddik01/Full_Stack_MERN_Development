import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const agree = event.target.terms.checked;
    // if (agree) {
    //   createUserWithEmailAndPassword(email, password);
    // }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Updated profile");
    navigate("/");
  };

  if (loading || updating) {
    return <Loading></Loading>
  }

  const navigateLogin = (event) => {
    navigate("/login");
  };

  if (user) {
    console.log("user", user);
  }

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
              <Form.Text className="text-muted">Type your name</Form.Text>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className={agree ? "text-primary" : "text-danger"}
                onClick={() => setAgree(!agree)}
                name="terms"
                type="checkbox"
                label="Accept terms and condition"
              />
            </Form.Group>
            <Button disabled={!agree} variant="primary" type="submit">
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
          <SocialLogin></SocialLogin>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

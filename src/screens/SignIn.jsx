import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/Firebase";
import { v4 } from "uuid";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { CircularProgress } from "@mui/material";

const SignIn = () => {
  const navigate = useNavigate();

  const [btnClicked, setBtnClicked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const handleSubmit = async (event) => {
    setBtnClicked(true);

    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            // save credentials
            // dispatch(setCredentials(user.uid));
            // set login status to true

            await setDoc(doc(db, `users_db`, user.uid), {
              firstName,
              lastName,
              phoneNumber,
              email,
              // password,
              accountId: user.uid,
            });

            // Swal.fire({
            //   title: "Good job!",
            //   text: "You clicked the button!",
            //   icon: "success"
            // });

            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorCode", errorCode, "errorMessage", errorMessage);

            setBtnClicked(false);

            // consitions
            if (errorCode == "auth/email-already-in-use") {
              Swal.fire({
                title: "Email already in use",
                text: "Please make sure you use another email.",
                icon: "error",
              });
            } else {
              Swal.fire({
                title: "Error creating account",
                text: "Please try agin in a few minutes.",
                icon: "error",
              });
            }
          });
      } else {
        setBtnClicked(true);

        Swal.fire({
          title: "Passwords do not match",
          text: "Please make sure your passwords match.",
          icon: "error",
        });
      }
    } catch (error) {
      setBtnClicked(true);

      alert("firebase eroor");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder="Last name"
                />
              </Form.Group>
            </div>
            <div className="row mt-4">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder="Phone Number"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter email"
                />
              </Form.Group>
            </div>
            <div className="row mt-4">
              <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder=" password"
                />
                <Form.Check label="Remember me" className="mt-4" />
                <Form.Check label="I agree to all the Terms and Privacy policy" />
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  onChange={(e) => {
                    setConfirmpassword(e.target.value);
                  }}
                  placeholder="Confirm password"
                />
              </Form.Group>

              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "44%",
                }}
              >
                <div className="ms-4">
                  {btnClicked ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      variant="dark"
                      style={{ borderRadius: "10px", width: "10%" }}
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  )}
                </div>

                <div className="pt-3">
                  <p>
                    Have an account?{" "}
                    <span>
                      <Link to="/">Log in</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

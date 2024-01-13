import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { v4 } from "uuid";
import Swal from 'sweetalert2';


const SignIn = () => {

const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const handleSubmit = async(event) => {
    const form = event.currentTarget;
     
    event.preventDefault();
    event.stopPropagation();

try{

  if(password=== confirmPassword ){
    const uuid = v4();

    await setDoc(doc(db, `users_db`, uuid), {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      accountId: uuid,
    });

    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
    
    navigate("/")


  }else{
    Swal.fire({
      title: 'Passwords do not match',
      text: 'Please make sure your passwords match.',
      icon: 'error',
    });
  }


}catch(error){

  alert("firebase eroor")
  console.error(error)
}


    }

  

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <Form
            onSubmit={handleSubmit}
          >
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
                  <Button
                    variant="dark"
                    style={{ borderRadius: "10px", width: "10%" }}
                    type="submit"
                  >
                    Sign Up
                  </Button>
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

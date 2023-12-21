import "../components/loginForm/loginForm.css";
import LoginForm from "../components/loginForm/LoginForm";
import { Col, Container } from "react-bootstrap";
import Maps from "../components/Maps/Maps";
import { Button, TextField } from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { useEffect, useState } from "react";

const Login = () => {


  

  return (
    <div>
      <div
        style={{
          backgroundColor: "#000",
          minHeight: "100vh",
          overflowY: "hidden",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <LoginForm />
            </div>
            <div className="col-lg-8">
              <div className="cards-maps">
              <Maps/> 
              </div>
            </div>
          </div>
        </div>

        {/* <Container>
        <Row>
          <Col>
          <LoginForm/>
          </Col>
          <Col></Col>
        </Row>
      </Container>  */}
      </div>
    </div>
  );
};

export default Login;

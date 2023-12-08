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
  const [allUsersAray, setAllUsersArray] = useState([]);
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    const collectionRefUSers = collection(db, "users_db");

    const q = query(collectionRefUSers);
    const alldata = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      setAllUsersArray(items);
    });
    return () => {
      alldata();
    };
  }, []);

  const handleDelete = (userId) => {
    deleteDoc(doc(db, "users_db", userId));
  };

  const handleUpdate = (userId) => {
    if (location.length !== 0 && number.length !== 0) {
      updateDoc(doc(db, "users_db", userId), {
        userLocation: location,
        userNumber: number,
      });
    } else {
      alert("All field required");
    }
  };

  // onSnapshot(q, (querySnapshot) => {
  //   const items = [];
  //   querySnapshot.forEach((doc) => {
  //     items.push(doc.data());
  //   });

  //   items.forEach((item) => {
  //     if (item.dateCreated !== "" && item.dateCreated !== null) {
  //       const firestoreTimestamp = item.dateCreated;
  //       const date = firestoreTimestamp.toDate();
  //       const options = {
  //         year: "numeric",
  //         month: "long",
  //         day: "numeric",
  //         hour: "numeric",
  //         minute: "numeric",
  //         second: "numeric",
  //       };
  //       const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  //       const dateString = dateTimeFormat.format(date);
  //       item.dateCreated = dateString;
  //     }
  //   });

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
                {/* <Maps/> */}

                {/* <Button
                  onClick={retrieveUsers}
                  sx={{ background: "blue", color: "white" }}
                >
                  Retrieve
                </Button> */}
                <ul>
                  {allUsersAray?.map((data, index) => (
                    <li key={index} style={{ marginBottom: "2vh" }}>
                      {" "}
                      Location:{data.userLocation}
                      &nbsp; Number: {data.userNumber}
                      &nbsp;&nbsp;&nbsp;{" "}
                      <Button
                        onClick={() => {
                          handleUpdate(data.accountId);
                        }}
                        sx={{
                          background: "blue",
                          color: "white",
                          marginRight: 1,
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => {
                          handleDelete(data.accountId);
                        }}
                        sx={{ background: "blue", color: "white" }}
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
                </ul>
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

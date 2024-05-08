import "../components/loginForm/loginForm.css";
import LoginForm from "../components/loginForm/LoginForm";
import { Col, Container } from "react-bootstrap";
import Maps from "../components/Maps/Maps";
import { Button, TextField, Chip, Card, IconButton } from "@mui/material";
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
import borlaImage from "../../src/assets/AfricaBorla.jpeg";
import borlaImage2 from "../../src/assets/borlacar image.jpeg";
import qrCode from "../../src/assets/qrcode.png";
import LocationSelectorTextField from "../components/Autocompletes/LocationSelector";
import { Link } from "react-router-dom";
import { Android, Apple, IosShare } from "@mui/icons-material";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Initial state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "420vh",
        display: "flex",
        flexDirection: "column",
        // gap: "1vh 0vw",
        // overflowY: "hidden",
      }}
    >
      {/* <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <LoginForm />
            </div>
            <div className="col-lg-8">
              <div className="cards-maps">
                <Maps />
              </div>
            </div>
          </div>
        </div> */}

      <div
        style={{
          flex: ".15",
          // background: "red",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          // gap: "0vh 2vw",
        }}
      >
        <div
          style={{
            flex: ".5",
            display: "grid",
            placeContent: "center",

            paddingLeft: isMobile ? "1vw" : "",
            // whiteSpace: "pre-wrap",
          }}
        >
          <h1 style={{ color: "white", fontSize: "3.4em" }}>
            {" "}
            {isMobile ? (
              "  Clean City,Leave Waste Behind!"
            ) : (
              <>
                {" "}
                Clean City,Leave No <br />
                Waste Behind!{" "}
              </>
            )}
          </h1>

          <h6 style={{ color: "white" }}>
            {" "}
            Request a truck , and dispose off your gabbage{" "}
          </h6>

          <LocationSelectorTextField
            TextFieldstyle={{ width: isMobile ? 300 : 500 }}
          />

          <Button
            sx={{
              backgroundColor: "gray",
              marginTop: 2,
              marginBottom: 2,
              width: 200,
            }}
            variant="contained"
          >
            Search Driver
          </Button>
        </div>
        <div
          style={{
            flex: ".5",
            display: "flex",
            alignItems: "center",
            padding: isMobile ? "0vh 2vw 0vh 1vw " : "",
            // justifyContent: "center",
          }}
        >
          <img
            src={borlaImage}
            height={"640px"}
            width={"550px"}
            style={{ borderRadius: "1vw" }}
          />
        </div>
      </div>
      <div
        style={{
          flex: ".3",
          background: "#FFFFFF",
          display: "flex",
          gap: "0vh 2vw",
          flexDirection: isMobile ? "column-reverse" : "row",
          padding: isMobile ? "0vh 2vw 0vh 1vw " : "",
        }}
      >
        <div
          style={{
            flex: ".5",
            position: "relative",
          }}
        >
          <img
            src={borlaImage2}
            width={"520px"}
            style={{
              borderRadius: "1vw",
              position: "absolute",
              top: isMobile ? "10%" : "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        <div
          style={{
            flex: ".5",
            display: "grid",
            placeContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "black",
              fontSize: "3.4em",
              // whiteSpace: "pre-wrap", // Allow wrapping of long words

              // textAlign: isMobile ? "center" : "",
            }}
          >
            {" "}
            {isMobile ? (
              "   Become a Driver , Join Our Team to Keep Our Cities Clean and Earn Money in The Process!"
            ) : (
              <>
                {" "}
                Become a Driver , Join <br /> Our Team to Keep Our Cities Clean
                and Earn Money in The Process!
              </>
            )}{" "}
          </h1>

          <h6>
            {" "}
            Turn Trash into Cash at Your Convenience with Trash Takeout! <br />{" "}
            Use Your Own Ride or Rent from Borlar Car for Flexible Earnings.
          </h6>
          <div>
            {/* <Chip
                label="Clickable"
                sx={{ backgroundColor: "lightblue" }}

                // onClick={handleClick}
              /> */}
            <Button
              sx={{ backgroundColor: "black", marginTop: 2, marginBottom: 2 }}
              variant="contained"
            >
              Get Started
            </Button>

            <p>
              {" "}
              Already have an account?{" "}
              <span>
                {" "}
                <Link>login</Link>{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          flex: ".15",
          display: "flex",
          flexDirection: "column",
          background: "#F6F6F6",
          // #008e87
          // gap: "0vh 2vw",
        }}
      >
        {/* // QR CODE Header */}
        <div style={{ flex: ".15" }}>
          <h2 style={{ color: "black", marginLeft: "6vw", marginTop: "2vh" }}>
            Streamline Your Experience Right from the App
          </h2>
        </div>

        <div
          style={{
            flex: ".75",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "2vh" : "",
          }}
        >
          <div style={{ flex: ".5", position: "relative" }}>
            <Card
              sx={{
                width: isMobile ? 400 : 530,
                height: isMobile ? 140 : 180,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                padding: "1vh 2vw",
              }}
            >
              <div
                style={{
                  flex: ".25",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={qrCode} width={"100px"} />
              </div>

              <div
                style={{
                  flex: ".75",
                  display: "flex",
                  alignItems: "center",
                  // flexDirection: "column",
                }}
              >
                <div>
                  <h3>Download the App</h3>
                  <h6>Scan or click to dowload</h6>
                  <IconButton>
                    <Apple />
                  </IconButton>{" "}
                  <IconButton>
                    <Android />{" "}
                  </IconButton>
                </div>
              </div>
            </Card>
          </div>
          <div style={{ flex: ".5", position: "relative" }}>
            <Card
              sx={{
                width: isMobile ? 400 : 530,

                height: isMobile ? 140 : 180,

                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                padding: "1vh 2vw",
              }}
            >
              <div
                style={{
                  flex: ".25",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={qrCode} width={"100px"} />
              </div>

              <div
                style={{
                  flex: ".75",
                  display: "flex",
                  alignItems: "center",
                  // flexDirection: "column",
                }}
              >
                <div>
                  <h3>Download the Driver App</h3>
                  <h6>Scan or click to dowload</h6>
                  <IconButton>
                    <Apple />
                  </IconButton>{" "}
                  <IconButton>
                    <Android />{" "}
                  </IconButton>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div
        style={{
          flex: ".4",
          background: "red",
          display: "flex",
          gap: "0vh 2vw",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div style={{ flex: ".5", background: "green" }}></div>
        <div style={{ flex: ".5" }}></div>
      </div>
      {/* borlaImage */}

      {/* <Container>
        <Row>
          <Col>
          <LoginForm/>
          </Col>
          <Col></Col>
        </Row>
      </Container>  */}
    </div>
  );
};

export default Home;

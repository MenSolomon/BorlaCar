import "../components/loginForm/loginForm.css";
import LoginForm from "../components/loginForm/LoginForm";
import { Col, Container } from "react-bootstrap";
import   Maps from "../components/Maps/Maps"
import ListOfRide from "../components/ListOfRide/ListOfRide";

const Home = () => {



  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          overflowY: "hidden",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-5">
          <ListOfRide/>
            </div>
            <div className="col-lg-8">
           <div className="cards-maps">
           <Maps/>
           </div>
            </div>
      
-          </div>
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

export default Home;

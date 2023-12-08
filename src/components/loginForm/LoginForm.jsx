import "../loginForm/loginForm.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import ghanaImage from "../../assets/ghana.png";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const loginForm = () => {
  const [location, setLocation] = useState("");
  const [number, setNumber] = useState("");

  const handleDatabaseInjection = async () => {
    try {
      if (location.length !== 0 && number.length !== 0) {
        const uuid = uuidv4();
        // alert(uuid);
        await setDoc(doc(db, `users_db`, uuid), {
          userLocation: location,
          userNumber: number,
          accountId: uuid,
        });

        setLocation("");
        setNumber("");
      } else {
        alert("All fields required");
      }
    } catch (error) {
      alert("Error");
      console.error(error);
    }
  };

  return (
    <div>
      <Form on className="mt-5">
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2" className="Num-input w-25">
            <img
              src={ghanaImage}
              alt="GhanaImage"
              className="img-fluid  Ghana-Image"
            />
            <div className="ms-4"> +233</div>
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            className="Num-input"
            required
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2" className="Num-input">
            Location
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            className="Num-input"
            required
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </InputGroup>

        <Button onClick={handleDatabaseInjection}>Save</Button>
      </Form>
    </div>
  );
};

export default loginForm;

import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import ghanaImage from "../../assets/ghana.png";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/Firebase';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setLoginStatus } from '../../stateManager/slices/OtherComponentStatesSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const q = query(
        collection(db, "users_db"),
        where("phoneNumber", "==", phoneNumber),
        where("password", "==", password)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Login successful, user exists
        const userDoc = querySnapshot.docs[0]; // Assuming only one user matches credentials
        Swal.fire({
          title: "Login Successful!",
          text: "You have successfully logged in.",
          icon: "success",
        });
        dispatch(setLoginStatus(true)); // Dispatch the action indicating successful login
        navigate("/home"); // Navigate to the home page after successful login
      } else {
        // No user found, login failed
        Swal.fire({
          title: "Login Failed",
          text: "Invalid username or password. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while processing your request. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Label style={{ color: "#fff" }}>Phone Number</Form.Label>
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
            type="number"
            aria-describedby="inputGroup-sizing-default"
            className="Num-input"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputGroup>

        <Form.Label style={{ color: "#fff" }}>Password</Form.Label>
        <InputGroup className="mb-3"  controlId="formBasicPassword">
          <InputGroup.Text id="basic-addon2" className="Num-input">
            Password
          </InputGroup.Text>
          <Form.Control
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            className="Num-input"
          />
        </InputGroup>
        <Button
          variant="dark"
          style={{ borderRadius: "10px", width: "20%"}}
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;

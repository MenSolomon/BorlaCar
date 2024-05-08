import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import ghanaImage from "../../assets/ghana.png";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLoggedInUserObject,
  setLoginStatus,
} from "../../stateManager/slices/LoginStatusSlice";
import { CircularProgress } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const q = query(
  //       collection(db, "users_db"),
  //       where("phoneNumber", "==", phoneNumber),
  //       where("password", "==", password)
  //     );

  //     const querySnapshot = await getDocs(q);

  //     if (!querySnapshot.empty) {
  //       // Login successful, user exists
  //       const userDoc = querySnapshot.docs[0]; // Assuming only one user matches credentials
  //       Swal.fire({
  //         title: "Login Successful!",
  //         text: "You have successfully logged in.",
  //         icon: "success",
  //       });
  //       dispatch(setLoginStatus(true)); // Dispatch the action indicating successful login
  //       navigate("/home"); // Navigate to the home page after successful login
  //     } else {
  //       // No user found, login failed
  //       Swal.fire({
  //         title: "Login Failed",
  //         text: "Invalid username or password. Please try again.",
  //         icon: "error",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Swal.fire({
  //       title: "Error",
  //       text: "An error occurred while processing your request. Please try again later.",
  //       icon: "error",
  //     });
  //   }
  // };

  const triggerWarningAlertModal = (title) => {
    Swal.fire({
      title: title,
      text: "Please try again.",
      icon: "error",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const accountId = user.uid;

      if (user) {
        alert("send");
        const userInfoRef = doc(db, `users_db/${accountId}`);
        const userInfoSnap = await getDoc(userInfoRef);
        dispatch(setLoginStatus(true));

        dispatch(setLoggedInUserObject(userInfoSnap));

        navigate("/home"); // Navigate after all data is fetched and set
      }
    } catch (error) {
      setIsLoading(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.error("Error code:", errorCode);
      // console.error("Error message:", errorMessage);
      switch (errorCode) {
        case "auth/wrong-password":
          triggerWarningAlertModal("The password you entered was wrong");
          break;
        case "auth/missing-password":
          triggerWarningAlertModal("Please enter a password");
          break;
        case "auth/network=request-failed":
          triggerWarningAlertModal("Please check your internet connectivity");
          break;
        case "auth/user-not-found":
          triggerWarningAlertModal("Account doesn't exist");
          break;
        case "auth/user-disabled":
          triggerWarningAlertModal("Account has been disabled");
          break;
        case "auth/invalid-email":
          triggerWarningAlertModal("Please enter an email");
          break;
        case "auth/invalid-login-credentials":
          triggerWarningAlertModal(
            "This account does not exist or your credentials are wrong"
          );
          break;
        default:
      }
    }
  };

  return (
    <div>
      <Form className="mt-5" onSubmit={handleSubmit}>
        {/* <Form.Label style={{ color: "#fff" }}>Phone Number</Form.Label> */}

        {/* <InputGroup className="mb-3">
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup> */}
        <InputGroup className="mb-3" controlId="formBasicEmail">
          <InputGroup.Text id="basic-addon2" className="Num-input">
            Email
          </InputGroup.Text>
          <Form.Control
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            className="Num-input"
          />
        </InputGroup>
        <Form.Label style={{ color: "#fff" }}>Password</Form.Label>
        <InputGroup className="mb-3" controlId="formBasicPassword">
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

        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button
            variant="dark"
            style={{ borderRadius: "10px", width: "20%" }}
            type="submit"
          >
            Login
          </Button>
        )}
      </Form>
    </div>
  );
};

export default LoginForm;

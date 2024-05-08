import { Apple, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth, db } from "../Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  setLoggedInUserObject,
  setLoginStatus,
} from "../stateManager/slices/LoginStatusSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [LoginType, setLoginType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location || {};

  useEffect(() => {
    if (pathname == "/driver/login") {
      setLoginType("Team");
    } else {
      setLoginType("");
    }
  }, [location, pathname]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const triggerWarningAlertModal = (title) => {
    Swal.fire({
      title: title,
      text: "Please try again.",
      icon: "error",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/home");
    // try {
    //   setIsLoading(true);

    //   const userCredential = await signInWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );
    //   const user = userCredential.user;
    //   const accountId = user.uid;
    //   alert("send");

    //   console.log(user);

    //   if (user) {
    //     alert("done v");

    //     const userInfoRef = doc(db, `users_db/${accountId}`);
    //     const userInfoSnap = await getDoc(userInfoRef);
    //     dispatch(setLoginStatus(true));

    //     dispatch(setLoggedInUserObject(userInfoSnap));

    //     navigate("/home"); // Navigate after all data is fetched and set
    //   } else {
    //     alert("no user");
    //   }
    // } catch (error) {
    //   setIsLoading(false);
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // console.error("Error code:", errorCode);
    //   // console.error("Error message:", errorMessage);
    //   switch (errorCode) {
    //     case "auth/wrong-password":
    //       triggerWarningAlertModal("The password you entered was wrong");
    //       break;
    //     case "auth/missing-password":
    //       triggerWarningAlertModal("Please enter a password");
    //       break;
    //     case "auth/network=request-failed":
    //       triggerWarningAlertModal("Please check your internet connectivity");
    //       break;
    //     case "auth/user-not-found":
    //       triggerWarningAlertModal("Account doesn't exist");
    //       break;
    //     case "auth/user-disabled":
    //       triggerWarningAlertModal("Account has been disabled");
    //       break;
    //     case "auth/invalid-email":
    //       triggerWarningAlertModal("Please enter an email");
    //       break;
    //     case "auth/invalid-login-credentials":
    //       triggerWarningAlertModal(
    //         "This account does not exist or your credentials are wrong"
    //       );
    //       break;
    //     default:
    //   }
    // }
  };

  return (
    <div
      style={{
        height: "90vh",
        // background: "red",
        display: "grid",
        placeContent: "center",
      }}
    >
      <div
        style={{
          width: "30vw",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "2.4em", textAlign: "center" }}>
          {" "}
          Welcome Back {LoginType}!{" "}
        </h1>

        <TextField
          id="outlined-basic"
          label="Enter Email or Mobile Number"
          variant="outlined"
          type="email"
          required
          sx={{ width: 350, marginBottom: 2 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <FormControl sx={{ width: 350, marginBottom: 2 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: "black",
            width: 350,
            marginBottom: 2,
            height: 40,
          }}
          variant="contained"
        >
          Login
        </Button>
        <Divider sx={{ width: 350, marginBottom: 2 }}>Or</Divider>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#4285F4",
            color: "white",
            width: 350,
            marginBottom: 2,
            height: 40,
          }}
          startIcon={<Google style={{ color: "white" }} />}
        >
          Login with Google
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "black",
            color: "white",
            width: 350,
            height: 40,
            marginBottom: 2,
          }}
          startIcon={<Apple sx={{ color: "white" }} />}
        >
          Login with Apple
        </Button>
      </div>
    </div>
  );
};

export default Login;

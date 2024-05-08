import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, TextField } from "@mui/material";
import {
  AddIcCallOutlined,
  LocalShippingOutlined,
  Person2Outlined,
  Phone,
  PhoneOutlined,
  VideoCallOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 170,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "1vw",
};

export default function LoginClientOrDriverButtonModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          background: "#fff",
          borderRadius: "10px",
          color: "#000",
          width: "100%",
        }}
      >
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div style={{ width: "100%", height: "100%" }}>
              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/login");
                  handleClose();
                }}
                sx={{
                  backgroundColor: "#4285F4",
                  color: "white",
                  width: 350,
                  marginBottom: 2,
                  height: 40,
                }}
                startIcon={<Person2Outlined style={{ color: "white" }} />}
              >
                Login as an individual
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/driver/login");
                  handleClose();
                }}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  width: 350,
                  marginBottom: 2,
                  height: 40,
                }}
                startIcon={<LocalShippingOutlined style={{ color: "white" }} />}
              >
                Login as a driver
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

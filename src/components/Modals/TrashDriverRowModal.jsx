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
  ChatBubbleOutline,
  Phone,
  PhoneOutlined,
  VideoCallOutlined,
} from "@mui/icons-material";
import {
  selectRequestedDriverArray,
  setRequestedDriverArray,
} from "../../stateManager/slices/RequestDriverSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function TrashDriverRowModal({
  ProfileImage,
  Name,
  VehicleType,
  VehicleRegNumber,
  NumberOfTakeouts,
  DistanceAway,
  LastSeen,
  DateJoined,
  DumpSite,
  modalStyle,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Initial state
  const [chatBubbleClicked, setChatBubble] = useState(false);

  const clickChatBubble = () => {
    if (chatBubbleClicked === false) {
      setChatBubble(true);
    } else {
      setChatBubble(false);
    }
  };

  useEffect(() => {
    if (isMobile === false) {
      setChatBubble(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SelectRequestedDriverArray = useSelector(selectRequestedDriverArray);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "100%" : 800,
    height: isMobile ? "90%" : 550,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "1vw",
  };
  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          width: "90%",
          height: "14vh",
          // background: "red",
          borderRadius: "1vw",
          marginBottom: "1vh",
          border: "2px solid #008e87",
          display: "flex",
          gap: "0 1.5vw",
          cursor: "pointer",
          ...modalStyle,
        }}
      >
        <div style={{ flex: ".2", display: "grid", placeContent: "center" }}>
          <Avatar
            src={ProfileImage}
            sx={{
              width: 60,
              height: 60,
              // , border:"1px solid black"
            }}
          />
        </div>

        <div
          style={{
            flex: ".5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // background: "red",
          }}
        >
          <h5 style={{ margin: 0, fontSize: ".8em" }}> {Name} </h5>
          <h6 style={{ margin: 0, fontSize: ".8em" }}> {VehicleType} </h6>
          <h6 style={{ margin: 0, fontSize: ".8em" }}> {VehicleRegNumber} </h6>
        </div>

        {/* // takeout INFO */}
        <div
          style={{
            flex: ".3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // background: "red",
          }}
        >
          <h6 style={{ margin: 0, fontSize: ".8em" }}>
            {" "}
            {NumberOfTakeouts} Takeouts{" "}
          </h6>
          <h6 style={{ margin: 0, fontSize: ".8em" }}>
            {" "}
            {DistanceAway} miles away
          </h6>
          <h6 style={{ margin: 0, fontSize: ".8em" }}> {LastSeen} : seen </h6>
        </div>
      </div>

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
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div style={{ flex: isMobile ? "1" : ".5" }}>
                <Avatar
                  src={ProfileImage}
                  sx={{
                    width: 140,
                    height: 140,
                    marginBottom: 1,
                    // , border:"1px solid black"
                  }}
                />

                <div>
                  {SelectRequestedDriverArray.length > 0 ? (
                    <Button
                      sx={{
                        backgroundColor: "red",
                      }}
                      variant="contained"
                      onClick={() => {
                        dispatch(setRequestedDriverArray([]));
                        //   setFindManuallyClicked(true);
                      }}
                    >
                      Cancel Request{" "}
                    </Button>
                  ) : (
                    <Button
                      sx={{
                        backgroundColor: "black",
                      }}
                      variant="contained"
                      onClick={() => {
                        dispatch(
                          setRequestedDriverArray([
                            {
                              ProfileImage,
                              Name,
                              VehicleType,
                              VehicleRegNumber,
                              NumberOfTakeouts,
                              DistanceAway,
                              LastSeen,
                              DateJoined,
                              DumpSite,
                            },
                          ])
                        );
                        //   setFindManuallyClicked(true);
                      }}
                    >
                      Request{" "}
                    </Button>
                  )}
                  <IconButton>
                    {" "}
                    <PhoneOutlined style={{ color: "black" }} />{" "}
                  </IconButton>{" "}
                  <IconButton>
                    {" "}
                    <AddIcCallOutlined style={{ color: "blue" }} />{" "}
                  </IconButton>
                  <IconButton>
                    {" "}
                    <VideoCallOutlined style={{ color: "green" }} />{" "}
                  </IconButton>{" "}
                  {isMobile ? (
                    <IconButton
                      onClick={() => {
                        clickChatBubble();
                      }}
                    >
                      {" "}
                      <ChatBubbleOutline style={{ color: "violet" }} />{" "}
                    </IconButton>
                  ) : (
                    ""
                  )}
                </div>

                {isMobile && chatBubbleClicked ? (
                  <div
                    style={{
                      height: "65vh",
                      width: "100%",
                      // background: "red",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ flex: ".9", overflowY: "scroll" }}></div>
                    <div style={{ flex: ".1" }}>
                      <TextField
                        id="outlined-basic"
                        label="Say something"
                        variant="outlined"
                        multiline
                        fullWidth
                        maxRows={4}
                        minRows={1}
                        // value={messageText}
                        // onChange={(e) => [setMessageText(e.target.value)]}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {Name}
                    </Typography>

                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      Vehicle Type : {VehicleType}
                    </Typography>

                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      Vehicle Registry Number: {VehicleRegNumber}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      Total Takeouts: {NumberOfTakeouts}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      Takeouts This Month: {NumberOfTakeouts}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      Distance Away: {DistanceAway} km
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      Date Joined: {DateJoined}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      Last seen: {LastSeen}
                    </Typography>

                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      Dump Site: {DumpSite}
                    </Typography>
                  </>
                )}
              </div>
              <div
                style={{
                  flex: ".5",
                  display: isMobile ? "none" : "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ flex: ".85", overflowY: "scroll" }}></div>
                <div style={{ flex: ".15" }}>
                  <TextField
                    id="outlined-basic"
                    label="Say something"
                    variant="outlined"
                    multiline
                    fullWidth
                    maxRows={4}
                    minRows={1}
                    // value={messageText}
                    // onChange={(e) => [setMessageText(e.target.value)]}
                  />
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

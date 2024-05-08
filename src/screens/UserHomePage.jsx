import "../components/loginForm/loginForm.css";
import LoginForm from "../components/loginForm/LoginForm";
import { Col, Container } from "react-bootstrap";
import Maps from "../components/Maps/Maps";
import ListOfRide from "../components/ListOfRide/ListOfRide";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import LocationSelectorTextField from "../components/Autocompletes/LocationSelector";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import workerAvatar from "../assets/africanWomanAvatar.jpg";
import workerAvatar2 from "../assets/Borla.jpeg";

import TrashDriverRowModal from "../components/Modals/TrashDriverRowModal";
import { useSelector } from "react-redux";
import { selectRequestedDriverArray } from "../stateManager/slices/RequestDriverSlice";

const UserHomePage = () => {
  const [FindManuallyClicked, setFindManuallyClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Initial state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const SelectRequestedDriverArray = useSelector(selectRequestedDriverArray);

  useEffect(() => {
    if (SelectRequestedDriverArray.length > 0) {
      setFindManuallyClicked(false);
    }
  }, [SelectRequestedDriverArray]);

  return (
    <div
      // className="flex-col-reverse md:flex-row"
      style={{
        // height: "100vh",
        overflowY: "hidden",
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "row",
        padding: isMobile ? "0vw" : "3vh 5vw",
      }}
    >
      <div
        style={{
          flex: FindManuallyClicked ? ".33" : ".35",
          display:
            isMobile && FindManuallyClicked ? "none" : isMobile ? "grid" : "",
          placeContent: isMobile ? "center" : "",
        }}
      >
        {/* <div className="row">
            <div className="col-lg-4 mt-5">
              <ListOfRide />
            </div>
            <div className="col-lg-8">
              <div className="cards-maps">
               
              </div>
            </div>
            -{" "}
          </div> */}

        <Card
          sx={{
            display: SelectRequestedDriverArray.length > 0 ? "none" : "",
            width: isMobile ? 400 : 320,
            height: 220,
            p: 3,
          }}
        >
          <h5> Find Nearby Waste Movers</h5>

          <LocationSelectorTextField TextFieldstyle={{ width: 270 }} />

          <Button
            sx={{ backgroundColor: "black", marginTop: 2, marginBottom: 2 }}
            variant="contained"
          >
            Find now
          </Button>
        </Card>
        {/* 
        <Card sx={{ width: 320, height: 120, p: 3, mt: 2 }}>
          <h5> Estimated Price Range</h5>

          <h3> GHS 20 - GHS 70 </h3>
        </Card> */}

        {SelectRequestedDriverArray.length > 0
          ? SelectRequestedDriverArray.map((data, index) => (
              <TrashDriverRowModal
                key={index}
                ProfileImage={data?.ProfileImage}
                Name={data?.Name}
                VehicleType={data?.VehicleType}
                VehicleRegNumber={data?.VehicleRegNumber}
                NumberOfTakeouts={data?.NumberOfTakeouts}
                DistanceAway={data?.DistanceAway}
                LastSeen={data?.LastSeen}
                DateJoined={data?.DateJoined}
                DumpSite={data?.DumpSite}
                modalStyle={{
                  width: isMobile ? "95vw" : "55vh",
                  marginTop: "2.5vh",
                }}
              />
            ))
          : ""}

        <Button
          sx={{
            backgroundColor: "black",
            marginTop: 2,
            marginBottom: 2,
            display:
              FindManuallyClicked || SelectRequestedDriverArray.length > 0
                ? "none"
                : "block",
          }}
          variant="contained"
          onClick={() => {
            setFindManuallyClicked(true);
          }}
        >
          Find drivers manually
        </Button>
      </div>
      <div
        style={{
          flex:
            isMobile && FindManuallyClicked
              ? "1"
              : FindManuallyClicked
              ? ".34"
              : "0",
          display: FindManuallyClicked ? "block" : "none",

          marginTop: isMobile && FindManuallyClicked ? "7vh" : "",
          paddingLeft: isMobile && FindManuallyClicked ? "5vw" : "",
          overflowY: "scroll",
        }}
      >
        <h2>
          Drivers within your area{" "}
          <IconButton
            onClick={() => {
              setFindManuallyClicked(false);
            }}
          >
            {" "}
            <Close />{" "}
          </IconButton>{" "}
        </h2>

        {/* <TrashDriverSkeletonRow /> */}

        <TrashDriverRowModal
          ProfileImage={workerAvatar2}
          Name={"Andrew Apoya"}
          VehicleType={"Tricycle"}
          VehicleRegNumber={"AS-412-22"}
          NumberOfTakeouts={7}
          DistanceAway={"3.3"}
          LastSeen={"10/12/24"}
          DateJoined={"10/11/23"}
          DumpSite={"Pokuase"}
        />

        <TrashDriverRowModal
          ProfileImage={workerAvatar}
          Name={"Akwasi Mintah Awuah"}
          VehicleType={"Mini Truck"}
          VehicleRegNumber={"GW-1234-19"}
          NumberOfTakeouts={7}
          DistanceAway={"2.1"}
          LastSeen={"10/12/24"}
          DateJoined={"10/11/23"}
          DumpSite={"Amasaman"}
        />
      </div>
      <div
        style={{
          display: isMobile && FindManuallyClicked ? "none" : "",

          flex: FindManuallyClicked ? ".33" : ".65",
        }}
      >
        <Maps />
      </div>
    </div>
  );
};

export default UserHomePage;

// const TrashDriverRow = ({
//   ProfileImage,
//   Name,
//   VehicleType,
//   VehicleRegNumber,
//   NumberOfTakeouts,
//   DistanceAway,
//   LastSeen,
// }) => {
//   return (
//     <div
//       style={{
//         width: "90%",
//         height: "14vh",
//         // background: "red",
//         borderRadius: "1vw",
//         marginBottom: "1vh",
//         border: "2px solid #008e87",
//         display: "flex",
//         gap: "0 1.5vw",
//       }}
//     >
//       <div style={{ flex: ".2", display: "grid", placeContent: "center" }}>
//         <Avatar
//           src={workerAvatar}
//           sx={{
//             width: 60,
//             height: 60,
//             // , border:"1px solid black"
//           }}
//         />
//       </div>

//       <div
//         style={{
//           flex: ".5",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           // background: "red",
//         }}
//       >
//         <h5 style={{ margin: 0, fontSize: ".8em" }}> Kwasi Minta Asabu </h5>
//         <h6 style={{ margin: 0, fontSize: ".8em" }}> Truck </h6>
//         <h6 style={{ margin: 0, fontSize: ".8em" }}> GT-0112-19 </h6>
//       </div>
//       {/* // takeout INFO */}
//       <div
//         style={{
//           flex: ".3",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           // background: "red",
//         }}
//       >
//         <h6 style={{ margin: 0, fontSize: ".8em" }}> 4 Takeouts </h6>
//         <h6 style={{ margin: 0, fontSize: ".8em" }}> 12.3 miles away</h6>
//         <h6 style={{ margin: 0, fontSize: ".8em" }}> 12/02/24 : last seen </h6>
//       </div>
//     </div>
//   );
// };

const TrashDriverSkeletonRow = () => {
  return (
    <div
      style={{
        width: "90%",
        height: "14vh",
        // background: "red",
        borderRadius: "1vw",
        marginBottom: "1vh",
        border: "2px solid #008e87",
        display: "flex",
        gap: "0 1.5vw",
      }}
    >
      <div style={{ flex: ".2", display: "grid", placeContent: "center" }}>
        {/* <Avatar
        src={workerAvatar}
        sx={{
          width: 60,
          height: 60,
          // , border:"1px solid black"
        }}
      /> */}

        <Skeleton animation="wave" variant="circular" width={60} height={60} />
      </div>

      <div
        style={{
          flex: ".5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // background: "red",
          gap: "1vh 0vw",
        }}
      >
        <Typography variant="body1">
          {<Skeleton animation="wave" variant="rounded" />}
        </Typography>
        <Typography variant="caption">
          {<Skeleton animation="wave" variant="rounded" />}
        </Typography>
        <Typography variant="caption">
          {<Skeleton animation="wave" variant="rounded" />}
        </Typography>
      </div>
      {/* // takeout INFO */}
      <div
        style={{
          flex: ".3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1vh 0vw",
          paddingRight: "1vw",
          // background: "red",
        }}
      >
        <Typography variant="body1">
          {<Skeleton animation="wave" variant="rounded" />}
        </Typography>
        <Typography variant="caption">
          {<Skeleton animation="wave" variant="rounded" />}
        </Typography>
        <Typography variant="caption">
          {<Skeleton animation="wave" variant="rounded" />}
        </Typography>
      </div>
    </div>
  );
};

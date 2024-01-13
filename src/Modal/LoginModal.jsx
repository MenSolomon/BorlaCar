// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const ModalComponent = ({ show, onHide }) => {
//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default ModalComponent;
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ModalComponent = ({ open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300, // Change the height value as needed
    bgcolor: '#008e87',
    boxShadow: 24,
    p: 4,
    borderRadius: 5, // Add the border-radius value in pixels
  };
  const buttonStyles = {
    backgroundColor: '#9ad7da', // Background color
    borderRadius: 8,
     // Border radius in pixels
    width: 250, // Width in pixels
    height: 56, // Height in pixels
    color: 'white', // Text color
    margin: '5px', // Optional margin'
    marginTop: 25, // Margin top in pixels
    marginLeft: 35
  };
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      {/* Modal content */}
      <Box sx={style}>

        <Button style={buttonStyles} >RIDER</Button>
      <Link  to={"/SignIn"} style={{ textDecoration: 'none' }}>
      <Button style={buttonStyles}>USER</Button>
      </Link>
      
        {/* Close button within the modal */}
        {/* <button onClick={handleClose}>Close</button> */}
      </Box>
    </Modal>
  );
};

export default ModalComponent;


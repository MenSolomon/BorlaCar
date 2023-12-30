import { useState } from 'react';
import "../loginForm/loginForm.css"
import {Form,InputGroup} from 'react-bootstrap'
import ghanaImage from "../../assets/ghana.png"
import BasicButton from '../ButtonBasic/BasicButton'
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LoginModal from "../../Modal/LoginModal"


const loginForm = () => {


   // State to control the modal open/close state
  const [open, setOpen] = useState(false);

  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };
  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Form className='mt-5'>
    <Form.Label style={{color:"#fff"}}>Phone Number</Form.Label>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon2" className='Num-input w-25'>
    <img src={ghanaImage} alt="GhanaImage" className='img-fluid  Ghana-Image' />
  <div className='ms-4'>  +233</div>
      </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className='Num-input'
        />
      </InputGroup>
      <Form.Label style={{color:"#fff"}} >PassWord</Form.Label>
      <InputGroup className="mb-3">
 
        <InputGroup.Text id="basic-addon2"  className='Num-input'>
        Password
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className='Num-input'
        />
      </InputGroup>
    </Form>
    {/* Your form inputs and other elements */}
      {/* Button to trigger the modal */}
   <BasicButton
   borderRadius="50px"
   variant="contained" onClick={handleOpen}

   >
   <KeyboardArrowRightIcon style={{ color: '#ffff', fontSize:"60px" }} />

    {/* <MdOutlineKeyboardArrowRight className='' style={{fontSize:"60px"}} /> */}
   </BasicButton>
        {/* Rendering the modal */}
    <LoginModal open={open} handleClose={handleClose}/> 
    </div>
  )
}


export default loginForm
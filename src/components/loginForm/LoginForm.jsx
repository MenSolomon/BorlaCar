import React from 'react'
import "../loginForm/loginForm.css"
import {Form,InputGroup} from 'react-bootstrap'
import ghanaImage from "../../assets/ghana.png"

const loginForm = () => {
  return (
    <div>
    <Form className='mt-5'>
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
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2"  className='Num-input'>
        Location 
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className='Num-input'
        />
      </InputGroup>
    </Form>
   
    </div>
  )
}

export default loginForm
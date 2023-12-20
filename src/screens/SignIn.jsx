import React from 'react'
import { Container, Row,Form,Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
       <div className='container mt-5'>
        <div className='row'>
        <Form>
     <div className='row'>
     <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="First Name"  />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="email" placeholder="Last name" />
        </Form.Group>
     </div>
     <div className='row mt-4'>
     <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="email" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
     </div>
     <div className='row mt-4'>
     <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="email" placeholder=" password" />
          <Form.Check label="Remember me"  className='mt-4'/>
          <Form.Check label="I agree to all the Terms and Privacy policy" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="email" placeholder="Confirm password" />
        </Form.Group>
     </div>
    </Form>

    <div   style={{ justifyContent: 'center', alignItems: 'center', marginLeft:"44%" }}>
      <div  className='ms-4'>
        <Button variant="dark" style={{ borderRadius: "10px", width: "10%" }}>Sign Up</Button>
      </div>
      
      <div className='pt-3'>
        <p>Have an account? <span><Link to="/">Log in</Link></span></p>
      </div>
    </div>
        </div>
       </div>
    </div>
  )
}
 
export default SignIn
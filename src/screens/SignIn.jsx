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
        {/* <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
Sign in with Google
</button> */}
  
  <div   style={{ justifyContent: 'center', alignItems: 'center', marginLeft:"44%" }}>
      <div  className='ms-4'>
     <Link  to={"/home"} style={{ textDecoration: 'none' }}>
     <Button variant="dark" style={{ borderRadius: "10px", width: "10%" }}>Sign Up</Button>
     </Link>
      </div>
      
      <div className='pt-3'>
        <p>Have an account? <span><Link to="/">Log in</Link></span></p>
      </div>
    </div>
     </div>
    </Form>
    
    
        </div>
       </div>
    </div>
  )
}
 
export default SignIn
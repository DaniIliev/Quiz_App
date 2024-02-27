import React from 'react'
import {Form, Button } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/authContext';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
}

const Register = () => {
  const {register} = useAuthContext()
  const {values, changeHandler, submit} = useForm(initialFormValues, register)

  return (
    <div className="loginRegisterForm">
    <img src="/icons/brain2.png" alt="brain" className="backgroundImg"/>

      <Form className="form" onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control name='username' type="text" placeholder="Enter username" onChange={changeHandler} value={values.username}/>
          <p className="pText">
            Everyone else will see you with this name.
          </p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" onChange={changeHandler} value={values.email}/>
          <p className="pText">
            We'll never share your email with anyone else.
          </p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" onChange={changeHandler} value={values.password}/>
        </Form.Group>
        <div className="submitBtnWrp">
          <Button variant="primary" type="submit" className="btnSubmit">Register</Button>
          <div className="switchLoginRegisterPage">
              <p>Already have an account?</p>
              <Link to={'/login'}>Login here...</Link>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Register
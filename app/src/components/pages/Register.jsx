import React from 'react'
import {Form, Button } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm';
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
      <Form className="form" onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control name='username' type="text" placeholder="Enter username" onChange={changeHandler} value={values.username}/>
          <Form.Text className="text-muted">
            Everyone else will see you with this name.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" onChange={changeHandler} value={values.email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" onChange={changeHandler} value={values.password}/>
        </Form.Group>
        <div className="submitBtnWrp">
          <Button variant="primary" type="submit" className="btnSubmit">Register</Button>
        </div>
      </Form>
    </div>
  )
}

export default Register
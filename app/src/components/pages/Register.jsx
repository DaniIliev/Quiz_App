import React from 'react'
import {Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import * as userService from '../../services/userService'

const Register = () => {
  const [values, setValues] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault()
    const currentValue = e.target.value;

    setValues(state =>({
      ...state,
      [e.target.name]:currentValue
    }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(values)
    const result = await userService.register(values)

    if(!result) throw Error
    
  }
  return (
    <div className="loginRegisterForm">
      <Form className="form" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control name='username' type="text" placeholder="Enter username" onChange={changeHandler}/>
          <Form.Text className="text-muted">
            Everyone else will see you with this name.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" onChange={changeHandler}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" onChange={changeHandler} />
        </Form.Group>
        <div className="submitBtnWrp">
          <Button variant="primary" type="submit" className="btnSubmit">Submit</Button>
        </div>
      </Form>
    </div>
  )
}

export default Register
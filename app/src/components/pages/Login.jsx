import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/authContext";

const initialFormValues = {
  email: '',
  password: '',
}

const Login = () => {
  const {login} = useAuthContext()
  const {values, changeHandler, submit} = useForm(initialFormValues, login)
  return (
    <>
    <div className="loginRegisterForm">
    <img src="/icons/brain2.png" alt="brain" className="backgroundImg"/>
      <Form className="form" onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={changeHandler} value={values.email}/>
          {/* <Form.Text className=""> */}
            <p className="pText">We'll never share your email with anyone else.</p>
          {/* </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={changeHandler} value={values.password}/>
        </Form.Group>
        <div className="submitBtnWrp">
          <Button variant="primary" type="submit" className="btnSubmit">Login</Button>
          <div className="switchLoginRegisterPage">
              <p>Don't have an account?</p>
              <Link to={'/register'}>Register here...</Link>
          </div>
        </div>
      </Form>
    </div>
    </>

  );
};

export default Login;

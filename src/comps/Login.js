import React, { useState } from "react";
import Joi from "joi-browser";
import {
  Button,
  Card,
  CardFooter,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import Title from "./Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fire } from "../firebase/config";

const Login = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
    /*
    const errorEmail = "";
    // for (let item of error.details) errorEmail = item.message;
    console.log(error);

    return errorEmail;
    */
  };

  const handleSubmit = (e) => {
    console.log("Submitted!");

    e.preventDefault();
    const errors = validate();
    setErrors(errors !== null ? errors : {});
    doSubmit();
  };

  const doSubmit = async () => {
    fire
      .auth()
      .signInWithEmailAndPassword(account.email, account.password)
      .then(() => {
        console.log("Login OK");
        fire
          .auth()
          .currentUser.getIdToken(true)
          .then(function (idToken) {
            localStorage.setItem("token", idToken);
            window.location = "/";
            // props.history.push("/");
            // const location = props.location;
            // window.location =
            //   location.from && location.from.pathname
            //     ? location.from.pathname
            //     : "/";
          })
          .catch(function (error) {
            //Handle error
          });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setErrors({ email: error.message });
            break;
          case "auth/wrong-password":
            setErrors({ password: error.message });
            break;
        }
      });
  };

  const handleChange = (e) => {
    const errorsN = { ...errors };
    const errorMessage = validateProperty(e.target);
    if (errorMessage) errorsN[e.target.name] = errorMessage;
    else delete errorsN[e.target.name];

    var { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
    setErrors(errorsN);
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaN = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaN);
    return error ? error.details[0].message : null;
  };

  return (
    <div className="login-page">
      <motion.div
        className="app flex-row align-items-center"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4 card-form">
              <CardBody className="p-4">
                <form className="login-form" onSubmit={handleSubmit}>
                  <Title></Title>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      // onChange={}
                      name="email"
                      value={account.email}
                      placeholder="Enter Email"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {errors.email && (
                    <div className="alert alert-danger">{errors.email}</div>
                  )}

                  <InputGroup className="mb-3">
                    <Input
                      type="password"
                      //   onChange={}
                      name="password"
                      value={account.password}
                      placeholder="Enter Password"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {errors.password && (
                    <div className="alert alert-danger">{errors.password}</div>
                  )}

                  <Button
                    //   onClick={this.register}
                    color="primary"
                    block
                    className="mb-3"
                    disabled={validate()}
                  >
                    Login
                  </Button>
                  <p className="text-center my-3">
                    Don't have an account?{" "}
                    <Link
                      to="register"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Register here
                    </Link>{" "}
                    <br />{" "}
                    <Link
                      to="reset-password"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Forgot Password?
                    </Link>
                  </p>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Login;

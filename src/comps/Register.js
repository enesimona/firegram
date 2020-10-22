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
  const [account, setAccount] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).max(15).label("Password"),
    password_confirmation: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .options({ language: { any: { allowOnly: "must match password" } } }),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
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
      .createUserWithEmailAndPassword(account.email, account.password)
      .then(() => {
        console.log("Register OK");
        fire
          .auth()
          .currentUser.getIdToken(true)
          .then(function (idToken) {
            console.log(idToken);
            localStorage.setItem("token", idToken);
            // props.history.push("/");
            window.location = "/";
          })
          .catch(function (error) {
            //Handle error
          });
      })
      .catch((error) => {
        console.log("Error register ");
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setErrors({ email: error.message });
            break;
          case "auth/weak-password":
            setErrors(error.message);
            break;
        }
      });
  };

  const handleChange = (e) => {
    const errorsN = { ...errors };
    const errorMessage = validateProperty(e.target);
    // console.log(errorMessage);
    // console.log(".....");
    // console.log(e.target.name);
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
    console.log(error);
    // if (
    //   name == "password_confirmation" &&
    //   account.password == account.password_confirmation
    // ) {
    //   return null;
    // }
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
                      name="password"
                      value={account.password}
                      placeholder="Enter Password"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {errors.password && (
                    <div className="alert alert-danger">{errors.password}</div>
                  )}

                  <InputGroup className="mb-3">
                    <Input
                      type="password"
                      name="password_confirmation"
                      value={account.password_confirmation}
                      placeholder="Repeat Password"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  {errors.password_confirmation && (
                    <div className="alert alert-danger">
                      {errors.password_confirmation}
                    </div>
                  )}

                  <Button
                    //   onClick={this.register}
                    color="primary"
                    block
                    className="mb-3"
                    disabled={validate()}
                  >
                    Register
                  </Button>
                  <p className="text-center my-3">
                    Do you already have an account?{" "}
                    <Link
                      to="login"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      Login here
                    </Link>{" "}
                    <br />{" "}
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

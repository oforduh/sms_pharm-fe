import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../Login/login.module.scss";
import { handleUserLogin } from "./handleUserLogin";
import { toast } from "react-toastify";
import { IsLoadingObject } from "../../context/LoaderContext";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signingMessage, setSigningMessage] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { isLoading, setIsLoading } = IsLoadingObject();
  const [passwordType, setPasswordType] = useState({
    password1: "password",
  });

  //   This function only run when the error message changes
  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
  }, [errorMessage]);

  //   This function only run when the success message changes
  useEffect(() => {
    if (!isLoggedIn) return;
    toast.success(isLoggedIn);
  }, [isLoggedIn]);

  const togglePassword = (id) => {
    const newObj = { ...passwordType };
    newObj[id] = passwordType[id] === "password" ? "text" : "password";
    setPasswordType(newObj);
  };

  return (
    <div className={styles.loginParentDiv}>
      <div className={styles.logoParentDiv}></div>
      <div className={styles.formParentDiv}>
        <div className={styles.formContainer}>
          <Form
            onSubmit={(e) => {
              handleUserLogin({
                e,
                email,
                password,
                setErrorMessage,
                setSigningMessage,
                setIsLoggedIn,
                setIsSigningIn,
                isLoading,
                setIsLoading,
              });
            }}
          >
            <h3>Login</h3>
            {signingMessage && (
              <small className={styles.signingMessage}>Signing In</small>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Form.Group>

            <div className={styles.formGroup}>
              <label>Password</label>
              <div className={styles.inputParentDiv}>
                <div className={styles.inputParentCont}>
                  <input
                    className={styles.passwordInput}
                    type={passwordType.password1}
                    placeholder="******"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <div
                    className={styles.eyeIcon}
                    onClick={() => togglePassword("password1")}
                  >
                    {passwordType.password1 === "password" ? (
                      <AiIcons.AiOutlineEyeInvisible />
                    ) : (
                      <AiIcons.AiOutlineEye />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ cursor: isSigningIn && "not-allowed" }}
            >
              Enter
            </Button>
            <div className={styles.forgetPasswordParentDiv}>
              <div></div>
              <Link href="#">Forgot Password</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const onSignUpHandler = () => {
    navigate("/signUp")
  }
  const onSignInHandler = () => {
    navigate("/Signin")
  }
  return (
    <>
      <Button onClickHandler={onSignInHandler}>Login</Button>
      <Button onClickHandler={onSignUpHandler}>Signup</Button>
    </>
  );
};

export default Navbar;

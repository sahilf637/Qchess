import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useAuthState, useAuthDispatch } from "../../store/auth/auth-context";
import { logOut } from "../../store/auth/action.";

type Props = {};

const Navbar = (props: Props) => {
  const { isAuthenticated, Email } = useAuthState();
  // console.log(isAuthenticated, Email);

  const dispatch = useAuthDispatch();
  const navigate = useNavigate();
  const onSignUpHandler = () => {
    navigate("/signUp");
  };
  const onSignInHandler = () => {
    navigate("/Signin");
  };
  const onSignOut = () => {
    logOut(dispatch);
  };
  return (
    <>
      {!isAuthenticated ? (
        <div>
          <Button onClickHandler={onSignInHandler}>Login</Button>
          <Button onClickHandler={onSignUpHandler}>Signup</Button>
        </div>
      ) : (
        <div>
          <Button onClickHandler={onSignOut}>LogOut</Button>
        </div>
      )}
    </>
  );
};

export default Navbar;

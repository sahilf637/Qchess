import React from "react";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/UI/Button";
import { signUser } from "../store/action.";
import { useAuthDispatch, useAuthState } from "../store/auth-context";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();
  const { loading } = useAuthState()
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const onFormSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    
    const Email = email.current?.value;
    const Password = password.current?.value;

    const Payload = {
      data: {
        Email,
        Password, 
      }, 
      type: 'signIn'
    };

    try {
      await signUser(dispatch, Payload);
      navigate("/")
      return;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center min-h-screen font-serif font-bold">
      <div className="w-2/3 h-auto bg-purple-400 mx-auto rounded-lg">
        <form
          onSubmit={onFormSubmitHandler}
          className="p-10 flex flex-wrap flex-col items-center"
        >
          <h1 className="text-2xl">SignIn</h1>
          <Input label="Email" forLabel="Email" ref={email} />
          <Input label="Password" forLabel="Password" ref={password} />
          <div className="w-full text-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

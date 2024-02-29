import React from "react";
import { useRef } from "react";
import Button from "../components/UI/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Fname = useRef<HTMLInputElement>(null);
  const Lname = useRef<HTMLInputElement>(null);
  const Email = useRef<HTMLInputElement>(null);
  const Password = useRef<HTMLInputElement>(null);
  const Rpassword = useRef<HTMLInputElement>(null);
  
  const navigate = useNavigate()
  const onSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      FirstName: Fname.current?.value,
      LastName: Lname.current?.value,
      Email: Email.current?.value,
      Password: Password.current?.value,
    };
    
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/my/user/signUp`, {
      method:"POST",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })

    const data = await response.json();

    console.log(data);
    
    if(response.ok){
      navigate("/")
    }
  };
  return (
    <div className="container font-serif font-bold text-lg">
      <div className="flex flex-col items-center w-4/6 h-auto bg-purple-400 rounded-lg p-5 mx-auto mt-16">
        <h1 className="text-2xl pb-3">SignUp</h1>
        <form
          onSubmit={onSignUpSubmit}
          className="flex flex-wrap justify-center border-t-2 pt-3"
        >
          <Input label="First Name" forLabel="Fname" ref={Fname} />
          <Input label="Last Name" forLabel="Lname" ref={Lname} />
          <Input label="Email" forLabel="Email" ref={Email} />
          <Input label="Password" forLabel="Password" ref={Password} />
          <Input
            label="Confirm Password"
            forLabel="Cpassword"
            ref={Rpassword}
          />
          <div className="w-full text-center pb-5">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClickHandler?: () => any
};

const Button = ({ children, type, onClickHandler }: Props) => {
  return (
    <button
      type={type}
      className="mt-3 p-2 px-4 ml-5 border-2 rounded-md hover:bg-blue-600 hover:text-white"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SingUpForm";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      <SignUpForm/>
    </div>
  );
};

export default SignUpPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useUnprotectedProtectedPage } from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SingUpForm";

const SignUpPage = ({ setRightButtonText }) => {
  useUnprotectedProtectedPage();

  return (
    <div>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      <SignUpForm setRightButtonText={setRightButtonText} />
    </div>
  );
};

export default SignUpPage;

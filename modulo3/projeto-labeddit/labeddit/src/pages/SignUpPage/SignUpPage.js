import React from "react";
import { useUnprotectedProtectedPage } from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SingUpForm";

const SignUpPage = ({ setRightButtonText }) => {
  useUnprotectedProtectedPage();

  return (
    <div>
      <SignUpForm setRightButtonText={setRightButtonText} />
    </div>
  );
};

export default SignUpPage;

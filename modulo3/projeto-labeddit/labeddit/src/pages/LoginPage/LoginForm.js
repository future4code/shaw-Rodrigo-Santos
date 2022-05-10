import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useUnprotectedProtectedPage } from "../../hooks/useUnprotectedPage";
import { login } from "../../services/user";

const LoginForm = ({ setRightButtonText }) => {
  const { form, onChange, clear } = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  useUnprotectedProtectedPage();

  const onSubimitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setRightButtonText);
  };

  return (
    <form onSubmit={onSubimitForm}>
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        type={"email"}
        size="30"
        placeholder="E-mail*"
        required
      />
      <input
        name="password"
        value={form.password}
        onChange={onChange}
        type="password"
        size="30"
        placeholder="Senha*"
        required
      />

      <button>Continuar</button>
    </form>
  );
};

export default LoginForm;

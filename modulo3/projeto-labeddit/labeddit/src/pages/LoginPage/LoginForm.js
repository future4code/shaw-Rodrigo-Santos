import React from "react";
import useForm from "../../hooks/useForm";


const LoginForm = () => {
  const { form, onChange, clear } = useForm({ email: "", password: "" });
  
  const onSubimitForm = (event) => {
    console.log(form);
    event.preventDefault();
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
import React, { useState } from "react";

//custom hook de formulários!

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm(initialState);
  };

  return { form, onChange, cleanFields };
};
export default useForm;

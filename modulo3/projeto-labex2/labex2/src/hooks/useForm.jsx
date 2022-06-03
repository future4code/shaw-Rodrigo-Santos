import React, { useState } from "react";

//custom hook de formulários!

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () =>{
    setForm(initialState)
  }

  return { form, onChange, cleanFields  };
};
export default useForm;

/*          //chamando o custom hook useForm:
  const { form, onChange } = useForm(
   { name: "" },
   { age: "" },
   { applicationText: "" },
   { profession: "" },
   { country: "" }
 );

               // no return

   <form onSubmit={cadastrarCandidato}>
          <InputsFather>
            <Input
              name="name"
              type="text"
              size="50"
              placeholder="Nome"
              value={form.name}
              /* onChange diretamente no input */
/* onChange={(e) => setForm(e.target.value)} */
/*  onChange={onChange}
              required
            />
            <Input
              name="age"
              type="number"
              size="50"
              placeholder="Idade"
              value={form.age}
              onChange={onChange}
              required
            />
            <Input
              name="applicationText"
              type="text"
              size="50"
              placeholder="Texto de candidatura"
              value={form.applicationText}
              onChange={onChange}
              required
            />
            <Input
              name="profession"
              type="text"
              size="50"
              placeholder="Profissão"
              value={form.profession}
              onChange={onChange}
              required
            />
            <Input
              name="country"
              type="select"
              size="50"
              placeholder="Países"
              value={form.country}
              onChange={onChange}
              required
            />
          </InputsFather>
          <button>Cadastrar</button>
        </form> */

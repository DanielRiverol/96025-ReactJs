import "./index.css";
import { useState } from "react";


// DESAFIO: COnvertir a un fromulario

export default function App() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: "",
  });
  function handleChange(evt) {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  }

  function onSubmit() {
    console.log(
      `Tu nombre es ${form.name} ${form.surname} y tenés ${form.age} años.`,
    );
  }

  const isValidInputs =
    form.name !== "" && form.surname !== "" && form.age !== "";
  return (
    <>
      <div>
        <h1>Ingresa tus datos para completar la compra 🛍</h1>
        <div style={{ display: "flex", marginBottom: 8 }}>
          <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
          <input
            type='text'
            name='name'
            value={form.name}
            style={{ width: "250px" }}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: "flex", marginBottom: 8 }}>
          <label style={{ width: "100px", marginRight: 4 }}>Apellido</label>
          <input
            type='text'
            name='surname'
            value={form.surname}
            style={{ width: "250px" }}
            onChange={handleChange}
          />
        </div>

        <div style={{ display: "flex", marginBottom: 8 }}>
          <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
          <input
            type='number'
            min={0}
            name='age'
            value={form.age}
            style={{ width: "250px" }}
            onChange={handleChange}
          />
        </div>

        <button disabled={!isValidInputs} onClick={onSubmit}>
          Crear orden
        </button>
      </div>
    </>
  );
}

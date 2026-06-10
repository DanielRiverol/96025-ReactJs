import { useState } from "react";
import SeccionLateral from "./SeccionLateral";
function App() {
  const [tema, setTema] = useState("claro");
  const cambiarTema = () => {
    setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };
  const estiloGlobal = {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: tema === "claro" ? "#ffffff" : "#1a1a1a",
    color: tema === "claro" ? "#000000" : "#ffffff",
    transition: "all 0.3s ease",
  };
  return (
    <div style={estiloGlobal}>
      <h1>Ejemplo Prop Drilling</h1>
      <p>El tema seleccionado es: {tema.toUpperCase()}</p>
      <SeccionLateral tema={tema} cambiarTema={cambiarTema} />
    </div>
  );
}

export default App;

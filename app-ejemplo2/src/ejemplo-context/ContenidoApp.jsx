import { useContext } from "react";
import SeccionLateral from "../ejemplo-context/SeccionLateral";
import { ThemeContext } from "./ThemeContext";

function ContenidoApp() {
  const { tema } = useContext(ThemeContext);

  return (
    <>
      <h1>Ejemplo 2: React Context</h1>
      <p>
        El tema seleccionado es: <strong>{tema.toUpperCase()}</strong>
      </p>
      <SeccionLateral />
    </>
  );
}

export default ContenidoApp;

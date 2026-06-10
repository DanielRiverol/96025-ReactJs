import Toolbar from "./Toolbar";

function SeccionLateral({ tema, cambiarTema }) {
  return (
    <aside
      style={{
        padding: "20px",
        border: "1px solid gray",
        marginTop: "20px",
      }}>
      <h4>Componente: SeccionLateral</h4>
      <Toolbar tema={tema} cambiarTema={cambiarTema} />
    </aside>
  );
}

export default SeccionLateral;

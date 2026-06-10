import BotonTema from "./BotonTema";

function Toolbar({ tema, cambiarTema }) {
  return (
    <div
      style={{ padding: "15px", border: "2px dashed gray", marginTop: "20px" }}>
      <h5>Componente: Toolbar</h5>
      <BotonTema tema={tema} cambiarTema={cambiarTema} />
    </div>
  );
}

export default Toolbar;

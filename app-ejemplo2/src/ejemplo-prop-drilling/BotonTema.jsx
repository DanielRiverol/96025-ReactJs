
function BotonTema({tema, cambiarTema}) {
    return (
      <button
        onClick={cambiarTema}
        style={{
          padding: "10px 20px",
          backgroundColor: tema === "claro" ? "#333" : "#ddd",
          color: tema === "claro" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}>
        Activar Modo {tema === "claro" ? "Oscuro" : "Claro"}
      </button>
    );
}

// CONTEXT

export default BotonTema

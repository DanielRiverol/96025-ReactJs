import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
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
    <ThemeContext.Provider value={{ tema, cambiarTema }}>
      <div style={estiloGlobal}>{children}</div>
    </ThemeContext.Provider>
  );
}

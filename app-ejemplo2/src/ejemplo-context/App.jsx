import { ThemeProvider } from "./ThemeContext";
import ContenidoApp from "./ContenidoApp";

function App() {
  return (
    <ThemeProvider>
      <ContenidoApp />
    </ThemeProvider>
  );
}

export default App;

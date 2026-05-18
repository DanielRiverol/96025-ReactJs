import { useState, useEffect } from "react";
import Input from "./Input";

function InputContainer() {
  const productos = [
    "Laptop",
    "Mouse",
    "Teclado",
    "Teclado Inalámbrico",
    "Monitor 40'",
    "Monitor",
    "Auriculares",
    "Webcam",
    "Impresora",
    "Parlantes",
  ];

  // los estados
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  //   funciones manejadoras
  function handleBusqueda(texto) {
    setBusqueda(texto);
    if (texto.trim().length < 3) {
      setResultados([]);
      console.log("Ingresa al menos tres caracteres....");
      return;
    }
    const filtrados = productos.filter((producto) =>
      producto.toLowerCase().includes(texto.toLowerCase()),
    );
    // que pasa si filter esta vacio?
    // TODO

    setResultados(filtrados);
  }
  //   efectos
  useEffect(() => {
    console.log("SE MONTA EL COMPONENTE");
    
  }, [busqueda]);

  return (
    <div className='card border p-5'>
      <h2 className='text-2xl'>Contendor del Input</h2>
      <Input
        type='text'
        placeholder='Buscar...'
        onChange={handleBusqueda}
        value={busqueda}
      />
      <p>Producto a buscar: {busqueda}</p>
      <hr className='my-3' />
      {/* render condicional */}
      {resultados.length > 0 ? (
        <ul className='list'>
          {resultados.map((producto, index) => (
            // key createAt
            <li className='list-row' key={index}>
              {producto}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}

export default InputContainer;

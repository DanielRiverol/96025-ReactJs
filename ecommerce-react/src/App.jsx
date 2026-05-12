import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Footer from "./components/Footer";

function App() {
  // useState()[0]=>valor inicial
  // useState()[1]=> funcion que modifica el valor inicial
  const [count, setCount] = useState(1);

  // let count = 0;

  const aumentar = () => {
    // count++;
    setCount(count + 1);
  };
  const disminuir = () => {
    // count--;
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <>
      <h1 className='text-3xl'>Hola mundo</h1>
      <section className='p-4'>
        <h2>{count}</h2>
        <Button text='+' onClick={aumentar} />
        <Button text='-' onClick={disminuir} />
        {/* <button onClick={aumentar}>+</button> */}
        {/* <Button
          text='Success'
          estilo='btn btn-success'
          onClick={() => alert("soy un success")}
        />
        <Button text='Cancel' estilo='btn btn-error' type='cancel' />
        <Button text='Submit' estilo='btn btn-primary' type='submit' />
        <Button text="Buscar" onClick={()=>alert("Estoy realizando una busqueda")}/> */}
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
console.log("Pre-render");

function Efectos() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   useEffect(() => {
  //     console.log("efecto sin dependencias");
  //   });
  useEffect(() => {
    console.log("efecto dependecias vacias []");
  }, []);
  useEffect(() => {
    console.log("efecto [count1]");
  }, [count1]);
  useEffect(() => {
    console.log("efecto [count2]");
  }, [count2]);

  return (
    <>
      <div className='p-5'>
        <h2 className='text-4xl'>Contador 1</h2>
        <p className='text-2xl'>Count1: {count1}</p>
        <button
          className='btn btn-lg btn-success'
          onClick={() => setCount1(count1 + 1)}>
          Incremetar Count1
        </button>
      </div>
      <div className='p-5'>
        <h2 className='text-4xl'>Contador 2</h2>
        <p className='text-2xl'>Count2: {count2}</p>
        <button
          className='btn btn-lg btn-success'
          onClick={() => setCount2(count2 + 1)}>
          Incremetar Count1
        </button>
      </div>
    </>
  );
}

export default Efectos;

import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count <= 1) return;
    setCount(count - 1);
  }
  return (
    <div className='flex flex-col gap-3 w-full max-w-xs'>
      <div className='join w-full'>
        <button
          onClick={decrement}
          className='join-item btn btn-outline w-1/4 text-3xl'>
          -
        </button>
        <div className='join-item btn btn-outline no-animation pointer-events-none w-2/4 text-lg'>
          {count}
        </div>
        <button
          onClick={increment}
          className='join-item btn btn-outline w-1/4 text-3xl'>
          +
        </button>
      </div>
      <button
        onClick={() => alert("Producto agregado")}
        className='btn btn-primary w-full'>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;

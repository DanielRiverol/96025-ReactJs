import ItemList from "./ItemList";
import { useState, useEffect } from "react";
function ItemListContainer({ text }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  },[]);
  
  return (
    <div className='h-full overflow-y-auto pr-2'>
      <h2 className='text-3xl font-bold my-3'>{text}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;

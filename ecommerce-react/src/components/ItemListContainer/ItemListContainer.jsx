import ItemList from "./ItemList";
import { useState, useEffect } from "react";
function ItemListContainer({ text }) {
  const [products, setProducts] = useState([]);
  const url = "https://api.npoint.io/1a84a92e16e1e82ff626";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (products) {
          setProducts(data.products);
          // console.log(data);
        }
      });
  }, []);

  return (
    <div className='h-full overflow-y-auto pr-2'>
      <h2 className='text-3xl font-bold my-3'>{text}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;

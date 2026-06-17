import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useFirebase";

function ItemListContainer({ text }) {
  
  
  const { categoryId } = useParams();
  const { products } = useProducts(categoryId);
  
  return (
    <div className='h-full overflow-y-auto pr-2'>
      <h2 className='text-3xl font-bold my-3'>{text}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;

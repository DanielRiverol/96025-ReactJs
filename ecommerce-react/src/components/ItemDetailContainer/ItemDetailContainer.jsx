import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useFetch from "../../hooks/useFetch";

function ItemDetailContainer({addToCart}) {
  const url = "https://api.npoint.io/1a84a92e16e1e82ff626";
  const { id } = useParams();
  const { data } = useFetch(url);

  const product = data.products?.find((prod) => prod.id === id);

  return (
    <div className='p-4'>
      <ItemDetail product={product} addToCart={addToCart}/>
    </div>
  );
}

export default ItemDetailContainer;

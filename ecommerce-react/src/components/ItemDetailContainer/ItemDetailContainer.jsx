import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useFetch from "../../hooks/useFetch";
import { useProductById } from "../../hooks/useFirebase";

function ItemDetailContainer() {
  // const url = "https://api.npoint.io/1a84a92e16e1e82ff626";
  const { id } = useParams();
  console.log("ID: ", id);

  // const { data } = useFetch(url);

  const { product } = useProductById(id);
  console.log("PRODUCT", product);

  // const product = data.products?.find((prod) => prod.id === id);

  return (
    <div className='p-4'>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;

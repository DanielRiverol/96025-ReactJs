import useFetch from "../../hooks/useFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// VARIABLES DE ENTORNO EN VITE
function ItemListContainer({ text }) {
  const url = "https://api.npoint.io/1a84a92e16e1e82ff626";
  const { data } = useFetch(url);
  const { categoryId } = useParams();
  console.log(categoryId);
  // filtrar los prod por categoria


  return (
    <div className='h-full overflow-y-auto pr-2'>
      <h2 className='text-3xl font-bold my-3'>{text}</h2>
      <ItemList products={data.products} />
    </div>
  );
}

export default ItemListContainer;

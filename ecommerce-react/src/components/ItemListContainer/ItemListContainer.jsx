import useFetch from "../../hooks/useFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// VARIABLES DE ENTORNO EN VITE
function ItemListContainer({ text }) {
  const url = "https://api.npoint.io/1a84a92e16e1e82ff626";
  const { data } = useFetch(url);
  const { categoryId } = useParams();

  // filtrar los prod por categoria
  // const filtrados = data.products.filter(
  //   (producto) => producto.categoryId == categoryId,
  // );

  const filtrados = categoryId
    ? data.products.filter((prod) => prod.categoryId === categoryId)
    : data.products;

  //  como haria que filtre por nombre de categoria?
  return (
    <div className='h-full overflow-y-auto pr-2'>
      <h2 className='text-3xl font-bold my-3'>{text}</h2>
      <ItemList products={filtrados} />
    </div>
  );
}

export default ItemListContainer;

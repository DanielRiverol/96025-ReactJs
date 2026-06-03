import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
function Sidebar() {
  const url = "https://api.npoint.io/1a84a92e16e1e82ff626";

  const { data } = useFetch(url);

  return (
    <aside className='bg-base-200 rounded-box p-4 h-full'>
      <h2 className='text-2xl font-bold mb-4'>Categorías</h2>
      <ul className='space-y-2'>
        <li>
          <Link to={"/"} className='btn btn-lg w-full '>
            Todos
          </Link>
        </li>
        {data.categories.map((cat) => (
          <li key={cat.id}>
            <Link
              to={`/categories/${cat.name}`}
              className='btn btn-lg w-full capitalize'>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

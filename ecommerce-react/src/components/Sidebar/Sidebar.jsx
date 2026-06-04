import useFetch from "../../hooks/useFetch";
import { Link, NavLink } from "react-router-dom";
function Sidebar() {
  const url = "https://api.npoint.io/1a84a92e16e1e82ff626";

  const { data } = useFetch(url);

  return (
    <aside className='bg-base-200 rounded-box p-4 h-full'>
      <h2 className='text-2xl font-bold mb-4'>Categorías</h2>
      <ul className='space-y-2'>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `btn btn-lg w-full ${isActive ? "btn-primary" : "btn-ghost"}`
            }>
            Todos
          </NavLink>
        </li>
        {data.categories.map((cat) => (
          <li key={cat.id}>
            <NavLink
              to={`/categories/${cat.id}`}
              className={({ isActive }) =>
                `btn btn-lg w-full capitalize ${isActive ? "btn-primary" : "btn-ghost"}`
              }>
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

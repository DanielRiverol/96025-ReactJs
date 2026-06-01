import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

function Sidebar() {
  const url = "https://api.npoint.io/1a84a92e16e1e82ff626";
  //   const [categories, setCategories] = useState([]);
  const { data } = useFetch(url);
  console.log(data.categories);

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((categories) => {
  //         if (categories) {
  //           setCategories(categories.categories);
  //           console.log(categories.categories);
  //         }
  //       });
  //   }, []);

  return (
    <aside className='bg-base-200 rounded-box p-4 h-full'>
      <h2 className='text-2xl font-bold mb-4'>Categorías</h2>
      <ul className='space-y-2'>
        <li>
          <button className='btn btn-lg w-full '>Todos</button>
        </li>
        {data.categories.map((cat) => (
          <li key={cat.id}>
            <button className='btn btn-lg w-full capitalize'>{cat.name}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;

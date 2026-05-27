import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
// import ProductCard from "./components/ProductCard";
// custom hook
import useFetch from "./hooks/useFetch";
function App() {
  // llamamos al custom hook
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  // loading
  if (loading) return <p className='text-center m-10'>Cargando usuarios....</p>;
  // error
  if (error) return <p>Error al cargar los usuarios {error}</p>;
  // retun pricipal
  return (
    <>
      <main className='p-5'>
        <h1 className='text-4xl font-bold'>Lista de usuarios</h1>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

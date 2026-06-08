import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemdetailContainer";

function App() {
  // Funcionalidad carrito
  // inicializar del carrito
  const [cart, setCart] = useState([]);

  // agregar al carrito
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existigProduct = prevCart.find((item) => item?.id === product?.id);
      if (existigProduct) {
        return prevCart.map((item) => {
         return item?.id === product?.id
            ? { ...item, quantity: item?.quantity + quantity }
            : item;
        });
      }
      return [...prevCart, { ...product, quantity }];
    });
  };
  // calculamos el total de los productos agregados
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <main className='h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden bg-base-100'>
        {/* Navbar */}
        <Navbar totalQuantity={totalQuantity} />
        {/* Contendor principal */}
        <section className='grid grid-cols-[200px_1fr] gap-4 p-4 overflow-hidden'>
          {/* Sidebar */}
          <Sidebar />
          {/* Contenedor dinámico */}
          <div className='h-full overflow-y-auto pr-2'>
            {/* Rutas */}
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route
                path='/categories/:categoryId'
                element={<ItemListContainer />}
              />

              <Route
                path='/items/:id'
                element={<ItemDetailContainer addToCart={addToCart} />}
              />
              <Route
                path='*'
                element={<h1 className='text-2xl'>404 NOT FOUND </h1>}
              />
            </Routes>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

export default App;

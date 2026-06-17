import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemdetailContainer";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <main className='h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden bg-base-100'>
        {/* Navbar */}
        <Navbar />
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

              <Route path='/items/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </CartProvider>
  );
}

export default App;

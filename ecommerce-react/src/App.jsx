import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemdetailContainer";

function App() {
  return (
    <>
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

              <Route path='/items' element={<ItemDetailContainer />} />
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

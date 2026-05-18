import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemdetailContainer";
import InputContainer from "./components/Input/InputContainer";
function App() {
  return (
    <>
      <main className='h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden bg-base-100'>
        {/* Navbar */}
        <Navbar />
        {/* Contendor rpimcipal */}
        <section className='grid grid-cols-[200px_1fr] gap-4 p-4 overflow-hidden'>
          {/* Sidebar */}
          <Sidebar></Sidebar>
          {/* Contenedor de productos */}
          <div className='h-full overflow-y-auto pr-2'>
            {/* <ItemListContainer text='Listado de productos' /> */}
            {/* <ItemDetailContainer /> */}
           <InputContainer/>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;

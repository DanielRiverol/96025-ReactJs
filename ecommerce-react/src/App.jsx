import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main className='h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden'>
        <Navbar />
        <section>ItemListContainer</section>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;

import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <Hero />
      <Hero />
      <h1>Hola mundo</h1>
      <section className='container'>
        <p style={{ color: "yellow", fontSize: "1" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          hic dolores, ad placeat quos nihil dicta! Quia, ducimus. Optio
          dignissimos temporibus deserunt blanditiis voluptatum sit, eveniet
          ipsum mollitia modi voluptates?
        </p>
      </section>
    </>
  );
}

export default App;

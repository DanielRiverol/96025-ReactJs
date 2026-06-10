import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='hero h-full'>
      <div className='hero-content text-center'>
        <div className='max-w-lg'>
          <h1 className='text-8xl md:text-9xl font-bold text-error'>404</h1>

          <h2 className='text-3xl font-bold mt-4'>Página no encontrada</h2>

          <p className='py-6 text-base-content/70'>
            La página que estás buscando no existe o fue movida.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <button className='btn btn-primary' onClick={() => navigate("/")}>
              Ir al inicio
            </button>

            <button className='btn btn-outline' onClick={() => navigate(-1)}>
              Volver atrás
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

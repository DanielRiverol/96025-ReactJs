function SecretMessage({ isVisible, toggle }) {
  return (
    <div className='card bg-base-100 shadow border w-96'>
      <div className='card-body'>
        <h2>Revela tu mensaje</h2>
        <button className='btn btn-primary' onClick={toggle}>
          {isVisible ? "Ocultar" : "Mostrar"}
        </button>
        {isVisible && <p className='mt-4'>Mensaje secreto.... </p>}
      </div>
    </div>
  );
}

export default SecretMessage;

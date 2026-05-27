import CardWrapper from "./CardWrapper";

function UserCard({ product }) {
  return (
    <CardWrapper>
      <h2 className='text-2xl font-bold'>Teclado inalambrico</h2>
      <p>Precio: $80000</p>
      <p>Descripcion: lalala</p>
      <button className='btn btn-info'>Comprar</button>
    </CardWrapper>
  );
}

export default UserCard;

import CardWrapper from "./CardWrapper";

function UserCard({ user }) {
  return (
    <CardWrapper>
      <h2 className='text-2xl font-bold'>Teclado inalambrico</h2>
      <p>Precio: $80000</p>
      <button className='btn btn-info'>Comprar</button>
    </CardWrapper>
  );
}

export default UserCard;

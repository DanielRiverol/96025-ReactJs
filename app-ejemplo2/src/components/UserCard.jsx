import CardWrapper from "./CardWrapper";

function UserCard({ user }) {
  return (
    <CardWrapper>
      <h2 className='text-2xl font-bold'>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Telefono: {user.phone}</p>
    </CardWrapper>
  );
}

export default UserCard;

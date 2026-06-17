import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

// Recibe la información cruda y los controladores desde App.jsx
// function Cart({ cart, removeFromCart, clearCart }) {
function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  // Calculamos el valor de la orden total
  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // Interfaz limpia en caso de que no haya elementos seleccionados
  if (cart.length === 0) {
    return (
      <div className='p-4 max-w-4xl mx-auto text-center mt-10'>
        <h1 className='text-3xl font-bold mb-4'>Tu carrito está vacío 🛒</h1>
        <p className='mb-6 text-base-content/70'>
          ¡Explora nuestro catálogo y añade excelentes productos!
        </p>
        <Link to='/' className='btn btn-primary'>
          Ir al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Tu Compra</h1>

      {/* Mapeo dinámico del estado del carrito */}
      <div className='flex flex-col gap-4'>
        {cart.map((item) => (
          <div
            key={item.id}
            className='card bg-base-100 border border-base-200 shadow-sm flex-row items-center p-4 gap-4'>
            <img
              src={item.img}
              alt={item.name}
              className='w-16 h-16 object-cover rounded-lg'
            />
            <div className='flex-1'>
              <h3 className='font-bold text-lg'>{item.name}</h3>
              <p className='text-sm'>
                Cantidad: {item.quantity} | Precio Unitario: ${item.price}
              </p>
            </div>
            <div className='mx-4 font-bold text-lg text-primary'>
              ${item.price * item.quantity}
            </div>
            {/* El botón ejecuta selectivamente la eliminación pasándole el id */}
            <button
              onClick={() => removeFromCart(item.id)}
              className='btn btn-error btn-sm'>
              Quitar
            </button>
          </div>
        ))}
      </div>

      <div className='divider'></div>

      <div className='flex justify-between items-center mt-4'>
        <h2 className='text-2xl font-bold'>Total: ${totalCost}</h2>
        <div className='flex gap-2'>
          {/* El botón de vaciar ejecuta la limpieza general */}
          <button onClick={clearCart} className='btn btn-outline btn-error'>
            Vaciar
          </button>
          <Link to='/checkout' className='btn btn-success'>
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;

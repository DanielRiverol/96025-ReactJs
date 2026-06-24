import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";
import { useCart } from "../../../context/CartContext";

function CheckOutForm() {
  const [buyer, setBuyer] = useState({ nombre: "", telefono: "", email: "" });
  const [orderId, setOrderId] = useState(null);

  const { cart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const order = {
        buyer: buyer,
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: total,
        date: serverTimestamp(),
      };

      // generamos una nueva conexion
      const orderRef = collection(db, "orders");
      const docRef = await addDoc(orderRef, order);
      setOrderId(docRef.id);

      //   vaciar el carrito
      clearCart();
    } catch (error) {}
  }
  function handleInputChange(e) {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  }

  return (
    <div className='max-w-md mx-auto mt-10 card bg-base-100 shadow-md border border-base-200'>
      <div className='card-body'>
        <h2 className='card-title text-2xl justify-center mb-4'>
          Datos de contacto
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <label className='input input-bordered flex w-full items-center gap-2'>
            Nombre
            <input
              type='text'
              name='nombre'
              value={buyer.nombre}
              onChange={handleInputChange}
              required
              className='grow'
            />
          </label>
          <label className='input input-bordered flex w-full items-center gap-2'>
            Teléfono
            <input
              type='tel'
              name='telefono'
              value={buyer.telefono}
              onChange={handleInputChange}
              required
              className='grow'
            />
          </label>
          <label className='input input-bordered flex w-full items-center gap-2'>
            Email
            <input
              type='email'
              name='email'
              value={buyer.email}
              onChange={handleInputChange}
              required
              className='grow'
            />
          </label>

          <button type='submit' className='btn btn-primary w-full mt-4'>
            Confirmar compra{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckOutForm;

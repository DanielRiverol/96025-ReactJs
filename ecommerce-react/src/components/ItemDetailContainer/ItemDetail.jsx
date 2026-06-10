import { useRef } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const modalRef = useRef(null);
  const handelOnAdd = () => {
    modalRef.current.showModal();
  };

  if (!product) {
    return (
      <div className='hero h-full'>
        <div className='hero-content text-center'>
          <div className='max-w-lg'>
            <h2 className='text-3xl font-bold mt-4'>Producto inexistente</h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className='flex justify-center items-center py-10'>
        <div className='card lg:card-side w-full max-w-3xl bg-base-100 shadow-sm border border-base-200'>
          <figure className='lg:w-96'>
            <img
              className='h-full w-full object-cover'
              src={product?.img}
              alt='Producto'
            />
          </figure>

          <div className='card-body'>
            <h2 className='card-title text-2xl'>{product?.name}</h2>

            <p className='text-base-content/70'>{product?.description}</p>

            <p className='text-3xl font-bold'>${product?.price}</p>

            <div className='card-actions justify-end mt-4'>
              <ItemCount onAdd={handelOnAdd} />
            </div>
          </div>
        </div>
      </div>

      <dialog ref={modalRef} className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>Producto agregado: Producto 1 </h3>
          <p className='py-4'>
            Press ESC key or click the button below to close
          </p>
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ItemDetail;

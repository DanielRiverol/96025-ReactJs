import { useRef } from "react";
import ItemCount from "./ItemCount";

function ItemDetail() {
  const modalRef = useRef(null);
  const handelOnAdd = () => {
    modalRef.current.showModal();
  };
  return (
    <>
      <div className='flex justify-center items-center py-10'>
        <div className='card lg:card-side w-full max-w-3xl bg-base-100 shadow-sm border border-base-200'>
          <figure className='lg:w-96'>
            <img
              className='h-full w-full object-cover'
              src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
              alt='Producto'
            />
          </figure>

          <div className='card-body'>
            <h2 className='card-title text-2xl'>Producto 1</h2>

            <p className='text-base-content/70'>Descripción del producto</p>

            <p className='text-3xl font-bold'>$12000</p>

            <div className='card-actions justify-end mt-4'>
              <ItemCount onAdd={handelOnAdd} />
            </div>
          </div>
        </div>
      </div>

      <dialog ref={modalRef} class='modal'>
        <div class='modal-box'>
          <h3 class='text-lg font-bold'>Producto agregado: Producto 1 </h3>
          <p class='py-4'>Press ESC key or click the button below to close</p>
          <div class='modal-action'>
            <form method='dialog'>
              <button class='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ItemDetail;

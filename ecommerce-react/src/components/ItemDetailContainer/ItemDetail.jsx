import ItemCount from "./ItemCount";

function ItemDetail() {
  return (
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
            <ItemCount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

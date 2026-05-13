import ItemCount from "./ItemCount";

function ItemDetail() {
  return (
    <div className='card card-side bg-base-100 shadow-sm'>
      <figure>
        <img
          src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
          alt='Movie'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Producto 1</h2>
        <p>Descripcion del producto</p>
        <p className='text-4xl'>$12000</p>
        <div className='card-actions justify-end'>
          <ItemCount />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

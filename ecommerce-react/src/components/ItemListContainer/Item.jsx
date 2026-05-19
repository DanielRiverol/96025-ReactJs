function Item({ id, name, price, img, description }) {
  return (
    <div className='card bg-base-100 w-96 shadow-sm'>
      <figure>
        <img
          src={
            img ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={name}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Ver detalle</button>
        </div>
      </div>
    </div>
  );
}

export default Item;

import { Link } from "react-router-dom";

function Item({ id, name, price, img, description }) {
  return (
    <div className='card bg-base-100 w-96 shadow-sm'>
      <figure className='px-4 pt-4'>
        <img
          src={
            img ||
            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt={name}
          className='rounded-xl h-48 w-full object-cover'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title text-lg'>{name}</h2>
        <p className='text-sm text-base-content/70 line-clamp-2'>
          {description}
        </p>

        <div className='card-actions w-full flex justify-between items-center mt-4'>
          <span className='text-xl font-bold text-primary'>${price}</span>
          <Link to={`/items/${id}`} className='btn btn-primary'>
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;

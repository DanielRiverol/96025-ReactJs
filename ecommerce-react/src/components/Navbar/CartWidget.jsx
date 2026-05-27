import { Cart } from "@boxicons/react";

function CartWidget() {
  return (
    <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
      <div className='indicator'>
        <Cart size='md' />
        <span className='badge badge-sm indicator-item'>8</span>
      </div>
    </div>
  );
}

export default CartWidget;

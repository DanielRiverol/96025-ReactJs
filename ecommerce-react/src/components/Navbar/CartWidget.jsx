import { Cart } from "@boxicons/react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
function CartWidget() {
  const { totalQuantity } = useCart();
  const navigate = useNavigate();
  return (
    <div
      tabIndex={0}
      role='button'
      className='btn btn-ghost btn-circle'
      onClick={() => navigate("/cart")}>
      <div className='indicator'>
        <Cart size='md' />
        <span className='badge badge-sm indicator-item'>{totalQuantity}</span>
      </div>
    </div>
  );
}

export default CartWidget;

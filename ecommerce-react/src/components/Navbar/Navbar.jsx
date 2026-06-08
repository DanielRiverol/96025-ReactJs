import CartWidget from "./CartWidget";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
function Navbar({totalQuantity}) {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        
        <Link to={'/'} className='btn btn-ghost text-xl'>
          <img src={logo} alt='E- Commerce' className='h-10 w-auto' />
          E-commerce
        </Link>
      </div>
      <div className='flex-none'>
        <div className='mr-4 '>
          {/* CartWidget */}
          <CartWidget totalQuantity={totalQuantity} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

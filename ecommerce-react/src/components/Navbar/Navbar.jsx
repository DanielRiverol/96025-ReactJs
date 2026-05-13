import { Cart } from "@boxicons/react";
import logo from '../../assets/logo.svg'
function Navbar() {
    return (
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>
            <img src={logo} alt="E- Commerce" className="h-10 w-auto" />
            E-commerce
          </a>
        </div>
        <div className='flex-none'>
          <div className='mr-4 ' >
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <Cart size="md"/>
                <span className='badge badge-sm indicator-item'>8</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default Navbar

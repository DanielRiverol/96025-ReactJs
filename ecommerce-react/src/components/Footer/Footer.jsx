import { Youtube, Tiktok, Instagram } from "@boxicons/react";
import logo from "../../assets/logo.svg";
function Footer() {
  return (
    <footer className='footer sm:footer-horizontal bg-white text-black-content items-center p-4 border'>
      <aside className='grid-flow-col items-center'>
        <img src={logo} alt='Logo E-commerce' className='h-8' />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a href="#" className='rounded-lg bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600'>
          <Instagram color='white' />
        </a>
        <a href='#'>
          <Tiktok />
        </a>
        <a href='#'>
          <Youtube fill='#ff0000' />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

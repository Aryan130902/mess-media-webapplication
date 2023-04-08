import { useState } from 'react';
import styles from './Navbar.module.css';



const  Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-dark">
      <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        <div className="flex-shrink-0">
          <img
            className="lg:h-24 sm:h-16 max-w-full "
            src="/logo.png"
            alt="logo"
          />
        </div>
        <div className="mr-2 flex md:hidden">
          <button onClick={toggleMenu} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="/" className={styles.nav_list}>
              Home
            </a>
            <a href="/" className={styles.nav_list}>
              About
            </a>
            <a href="/" className={styles.nav_list}>
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className={styles.nav_list}>
            Home
          </a>
          <a href="/" className={styles.nav_list}>
            Contact
          </a>
          <a href="/" className={styles.nav_list}>
            About 
          </a>
        </div>
      </div>
    </nav>
);
  }

  export default Navbar
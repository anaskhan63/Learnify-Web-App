import React, { useContext, useState } from 'react';
import Logo from "../../assets/Logo.png";
import Button from '../Button/Button';
import { ThemeContext } from '../../Context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, HandleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = window.location.pathname === '/';
  return (
    <>
      <nav className={` ${isMenuOpen ? "mb-48 " : ""} flex p-5 justify-between items-center relative `}>
        <div className=''>
          <Link className='flex items-center gap-0' to={"/"}>
            <img src={Logo} className='w-24' alt="Logo" />
            <span className='text-4xl font-medium audiowide text-[#90C8F7] -ml-3'>Learnify</span>
          </Link>

        </div>
        <div className='flex items-center gap-4'>
          {
            isHomePage ? (
              <div className='hidden sm:flex items-center gap-3'>
                <Button HrefLink={"/login"} Title={"Get Started"} Icon={"ri-arrow-right-line ml-1 text-lg"} />
              </div>)
              : null
          }
          <i onClick={HandleTheme} className={` hidden sm:block ${theme === "light" ? "ri-moon-clear-line cursor-pointer text-2xl text-black" : "ri-sun-fill cursor-pointer text-2xl text-white"}`} />
        </div>
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className='sm:hidden text-xl p-2 focus:outline-none'
        >
          ☰
        </button>

        {isMenuOpen && (
          <div className={`flex flex-col items-end gap-3 sm:hidden absolute top-full right-0 ${theme === "light" ? " bg-[#47B135] text-white" : "bg-white text-black"} w-fit rounded-lg mr-3 p-5 shadow-lg`}>
            {
              isHomePage ? (
                <div className='hidden sm:flex items-center gap-3'>
                  <Button Title={"Get Started"} Icon={"ri-arrow-right-line ml-1 text-lg"} />
                </div>)
                : null
            }
            <i onClick={HandleTheme} className={`${theme === "light" ? "ri-moon-clear-line cursor-pointer text-2xl " : "ri-sun-fill cursor-pointer text-2xl "}`} />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronDoubleDown } from "react-icons/hi";

function Navbar() {


  const location = useLocation()

  const path = location.pathname

  const [menuState, setMenuState] = useState(false)



  return (
    <div id="navbar" className="z-40 w-full duration-300 fixed top-0">
      {/* Nav Section */}
      <section id="nav" className="relative">
        {/* Navbar */}
        <div className="bg-white/35 dark:bg-black/45 h-[75px] max-h-[75px] ">
          <nav className="container max-w-6xl mx-auto flex justify-between items-center p-5 z-50">
            <div className="font-serif text-2xl font-semibold">
              <Link to='/'>Earth Soul</Link>
            </div>

            {/* Menu for big screens */}
            <div className="space-x-8 items-center text-slate-800 hidden md:flex lg:space-x-16 dark:text-white/85">
              <Link to='/' className="group hover:text-black hover:scale-110 duration-200 dark:hover:text-white">
                Početna
                <div className={ path==='/' ? 'border-b-4 border-slate-800 mx-1.5 rounded-xl dark:border-white' : ''  }></div>
              </Link>
              <Link to="/info" className="group hover:text-black hover:scale-110 duration-200 dark:hover:text-white">
                Informacije
                <div className={ path==='/info' ? 'border-b-4 border-slate-800 mx-1.5 rounded-xl dark:border-white' : ''  } ></div>
              </Link>
              <Link to="/buy" className="group hover:text-black hover:scale-125 duration-200 dark:hover:text-white">
                Kupite
                <div  className={ path==='/buy' ? 'border-b-4 border-slate-800 mx-1.5 rounded-xl dark:border-white' : ''  } ></div>
              </Link>
              <Link to="/contact" className="group hover:text-black hover:scale-110 duration-200 dark:hover:text-white">
                Kontakt
                <div  className={ path==='/contact' ? 'border-b-4 border-slate-800 mx-1.5 rounded-xl dark:border-white' : ''  } ></div>
              </Link>
              

              {/* Mzd dodati dark toggle mode */}


            </div>

            {/* Hamburger Menu */}
            <div onClick={ ()=> setMenuState(!menuState) } className='h-[35px] w-[35px] md:hidden cursor-pointer'>

              <span>
                <HiChevronDoubleDown className={`h-full w-full ${menuState ? 'rotate-180' : ''} duration-300`} />
              </span>

            </div>


          </nav>
        </div>

        {/* Items Menu */}
        <div className="container max-w-6xl mx-auto relative">
          <div className={`absolute w-full -z-10 md:hidden ${menuState ? 'top-0' : '-top-[500px]'} duration-300 `} id="menu">
            <div id="menu-back-con t" className=" rounded-2xl">
              <div className="flex flex-col bg-black/95 p-20 rounded-b-[10rem] space-y-8 items-center">
                <Link to="/" className="group text-white font-bold text-lg hover:scale-125 duration-300">
                  Početna
                  <div className={ path==='/' ? 'border-b-2 border-white mx-2' : '' }></div>
                </Link>
                <Link to="/info" className="group text-white font-bold text-lg hover:scale-125 duration-300">
                  Informacije
                  <div className={ path==='/info' ? 'border-b-2 border-white mx-2' : '' }></div>
                </Link>
                <Link to="/buy" className="group text-white font-bold text-lg hover:scale-125 duration-300">
                  Kupite
                  <div className={ path==='/buy' ? 'border-b-2 border-white mx-2' : '' }></div>
                </Link>
                <Link to="/contact" className="group text-white font-bold text-lg hover:scale-125 duration-300">
                  Kontakt
                  <div className={ path==='/contact' ? 'border-b-2 border-white mx-2' : '' }></div>
                </Link>
                

                {/* Dark mode toggle br 2 */}


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;

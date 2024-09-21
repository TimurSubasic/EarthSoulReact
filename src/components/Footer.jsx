// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {


  const location = useLocation()

  const path = location.pathname


  return (
    

<section id="footer" className="mt-20">
    <div className="bg-white/50 dark:bg-black/65">

        
        <footer className="containter max-w-6xl mx-auto flex flex-col items-center space-y-6  p-20 md:flex-row md:justify-between md:space-y-0 md:py-32 xl:py-44">

            <div>
                <Link to='/' className="font-serif text-4xl font-extrabold my-5">
                    Earth Soul
                </Link>
            </div>

            <div className="flex flex-col space-y-6 items-center md:flex-row md:space-y-0 md:space-x-32 xl:space-x-20">

                <div className="flex flex-col space-y-6 items-center xl:flex-row md:space-y-12 xl:space-y-0 xl:space-x-20">

                    <Link to="/" className="group hover:scale-110 duration-200">
                    Početna

                    <div className={ path==='/' ? 'border-b-4 border-slate-800 mx-1.5 rounded-xl dark:border-white' : ''  }></div>

                    </Link>
                    <Link to="/info" className="group  hover:scale-110 duration-200">
                    Informacije
                    
                    <div className={ path==='/info' ? 'border-b-4 border-slate-800 mx-1.5 rounded-xl dark:border-white' : ''  }></div>
                    
                    </Link>


                </div>

                <div className="flex flex-col space-y-6 items-center xl:flex-row md:space-y-12 xl:space-y-0 xl:space-x-20">

                    <Link to="/buy" className="group font-semibold text-lg scale-110  hover:scale-150 duration-200">
                    Kupite

                    <div className={ path==='/buy' ? 'border-b-4 border-slate-800 mx-1.5 rounded-xl dark:border-white' : ''  }></div>
                    
                    
                    </Link>
                    <Link to="/contact" className="group  hover:scale-110 duration-200">
                    Kontakt
                    
                    <div className={ path==='/contact' ? 'border-b-4 border-slate-800 mx-1.5 rounded-xl dark:border-white' : ''  }></div>
                    

                    </Link>


                </div>
                
                


            </div>



        </footer>
    
    </div>
    </section>


  );
}

export default Footer;

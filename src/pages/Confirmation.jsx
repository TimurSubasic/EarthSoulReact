// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { getCartData, getShippingData } from '../utils/shippingData';
import { Link } from 'react-router-dom';

const Confirmation = () => {


  // email js

  const mainSection = useRef(null);

  const loadingSection = useRef(null);

  const successSection = useRef(null);

  const failSection = useRef(null);


  const sendEmail = () => {
    // Send only the `message` as it's required in your template

    // hide content
    mainSection.current.classList.toggle('hidden');

    // start loading
    loadingSection.current.classList.toggle('hidden');


    emailjs
      .send(
        'service_9gatelz',       //  your service ID
        'template_h4ws01g',      //  your template ID
        { message },             // Send the message string in an object
        'GOQrHPyK5_JTNQBrI'      //  your public key
      )
      .then(
        () => {
          // SUCCESS

          //hide loading
          loadingSection.current.classList.toggle('hidden');

          //show success
          successSection.current.classList.toggle('hidden');
        },

        // eslint-disable-next-line no-unused-vars
        (error) => {
          // FAIL

          //hide loading
          loadingSection.current.classList.toggle('hidden');

          //show fail
          failSection.current.classList.toggle('hidden');
        }
      );
  };

  //email js


    const shippingData = getShippingData()

    const cartData = getCartData()

    const message = `
    Ime i Prezime: ${shippingData.name} ${shippingData.surname}

    Email: ${shippingData.email}

    Broj telefona: ${shippingData.phone}

    Drzava: ${shippingData.country}

    Grad: ${shippingData.city}

    Adresa: ${shippingData.address}

    Postanski broj: ${shippingData.zip}

    
    Earth Soul 25g: ${cartData.amount25}

    Earth Soul 50g: ${cartData.amount50}

    Ukupna cijena: ${cartData.totalPrice} KM

    

    Poruka:
    ${shippingData.message} `;

    const getBuyButton = () => {

        if (shippingData.name != '' && cartData.totalPrice != 0) {

            return <button onClick={sendEmail} className='text-3xl text-center py-5 w-full bg-cyan-600 rounded-xl text-white font-serif font-semibold uppercase shadow-lg hover:shadow-cyan-600/30 duration-300 my-8 '>
                naručite
            </button>
        }

    }

    return (
        

<div className='min-h-screen'>  

<section ref={mainSection} className='container max-w-6xl mx-auto p-5 -mt-16'>

<div className="flex flex-col justify-center items-center border-2 border-gray-300 dark:border-slate-700 rounded-lg shadow-xl">

<h2 className="text-4xl font-bold md:text-5xl my-6 md:my-12">Vaši Podatci</h2>

<div className="flex flex-col space-y-12 lg:flex-row lg:space-y-0 lg:space-x-10 w-full">

  {/* Shipping data */}
  <div className="p-6 rounded-lg flex flex-col space-y-6 items-center bg-white dark:bg-slate-900 shadow-xl w-full justify-between">

    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold">
      Dostava
    </h3>


    <div className={`text-xl sm:text-2xl mx-5 w-full flex flex-col space-y-3 items-start h-full justify-start ${shippingData.name == '' ? 'hidden' : '' } ` } >

      <p className='shipping-items'>
        Ime:  <span className='font-normal text-end inline-block'>
                  {shippingData.name}
              </span>

      </p>

      <p className='shipping-items'>
        Prezime:  <span className='font-normal '>
                  {shippingData.surname}
              </span>
      </p>

      <p className='shipping-items'>
        Email:  <span className='font-normal '>
                  {shippingData.email}
              </span>
      </p>

      <p className='shipping-items'>
        Broj telefona:  <span className='font-normal '>
                  {shippingData.phone}
              </span>
      </p>

      <p className='shipping-items'>
        Adresa:  <span className='font-normal '>
                  {shippingData.address}
              </span>
      </p>

      <p className='shipping-items'>
        Država:  <span className='font-normal '>
                  {shippingData.country}
              </span>
      </p>

      <p className='shipping-items'>
        Grad:  <span className='font-normal '>
                  {shippingData.city}
              </span>
      </p>

      <p className='shipping-items'>
        Poštanski broj: <span className='font-normal '>
                  {shippingData.zip}
              </span>
      </p>

      <p className='shipping-items'>
        Poruka:  <span className='font-normal '>
                  {shippingData.message}
              </span>
      </p>

    </div>

    <div className={`text-3xl font-bold text-center ${ shippingData.name == '' ? '' : 'hidden' } `} >

        <h2>
            Unesite Vaše Podatke
        </h2>

    </div>


    <Link to='/buy' className='text-3xl text-center py-5 w-full bg-yellow-400 rounded-xl text-black font-serif font-semibold uppercase shadow-lg hover:shadow-yellow-400/30 duration-300'>
        Uredi
    </Link>



  </div>

  {/* Price */}
  <div className="p-6 rounded-lg flex flex-col space-y-6 items-center bg-white dark:bg-slate-900 shadow-xl w-full justify-between">

    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold mb-6">
      Račun
    </h3>


    <div className={`text-2xl sm:text-3xl mx-5 w-full flex flex-col space-y-12 items-start h-full justify-start ${cartData.totalPrice == 0 ? 'hidden' : '' } ` } >

      <p className={`font-serif font-semibold h-24 flex justify-between items-center gap-5 w-full border-b-2 border-gray-400 dark:border-slate-500 p-3 ${cartData.amount25 == 0 ? 'hidden' : ''}`} >
        Earth Soul 25g:  
          <div className='font-sans font-bold flex flex-col space-y-2 items-center'>
            {cartData.amount25} 

            <div className='font-extralight text-lg text-black/60 dark:text-white/60 '>
            *90 KM
            </div>

          </div>
      </p>

      <p className={`font-serif font-semibold h-24 flex justify-between items-center gap-5 w-full border-b-2 border-gray-400 dark:border-slate-500 p-3 ${cartData.amount50 == 0 ? 'hidden' : ''}`} >
        Earth Soul 50g:  
        <div className='font-sans font-bold flex flex-col space-y-2 items-center'>
            {cartData.amount50} 

            <div className='font-extralight text-lg text-black/60 dark:text-white/60 '>
            *150 KM
            </div>

          </div>
      </p>


      <p className='flex justify-between items-center gap-5 w-full border-b-2 border-gray-400 dark:border-slate-500 p-3 h-24'>
        Cijena: <span className='font-bold'>
          {cartData.totalPrice} KM <div className='font-extralight text-lg text-black/60 dark:text-white/60 '>+ dostava</div>
          </span> 
      </p>

      

    </div>



    <div className={`text-3xl font-bold text-center ${ cartData.totalPrice == 0 ? '' : 'hidden' } `} >

        <h2>
            Vaša Korpa Je Prazna
        </h2>

    </div>


    <Link to='/buy/cart' className='text-3xl text-center py-5 w-full bg-yellow-400 rounded-xl text-black font-serif font-semibold uppercase shadow-lg hover:shadow-yellow-400/30 duration-300'>
        Uredi
    </Link>

  </div>

</div>

</div>

{
    getBuyButton()
}

</section>



{/* loading */}

<section ref={loadingSection} id="loading" className="hidden">
    <div className="h-screen flex items-center justify-center m-5">
            
            <img src="/images/loading-gif.gif" className="h-1/4 animate-spin-slow" alt="" />

    </div>
</section>



{/* success */}
<section ref={successSection} className="hidden">
  <div className="min-h-screen flex items-center justify-center m-5">
    {/* centered items */}
    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
      {/* heading and image */}
      <div className="flex flex-col space-y-6 items-center justify-center border-b-2 border-black p-4 dark:border-white md:border-b-0 md:border-r-2 md:p-5">
        <h3 className="text-4xl font-bold font-serif font-semibold capitalize lg:text-5xl text-center">
          Uspješno ste naručili
        </h3>

        <img
          src="/images/transparent-shila-main.png"
          className="w-[360px] mx-5 lg:w-[550px]"
          alt=""
        />

        <h3 className="text-4xl font-bold font-serif font-semibold capitalize lg:text-5xl text-center">
          earth soul
        </h3>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-6 items-center md:justify-between md:py-12">
        <Link
          to="/"
          className="text-lg font-semibold px-6 py-4 rounded-xl bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 text-center w-56 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300"
        >
          Početna
        </Link>

        <Link
          to="/info"
          className="text-lg font-semibold px-6 py-4 rounded-xl bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 text-center w-56 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300"
        >
          Informacije
        </Link>

        <Link
          to="/buy"
          className="text-lg font-semibold px-6 py-4 rounded-xl bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 text-center w-56 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300"
        >
          Kupite Još
        </Link>

        <Link
          to="/contact"
          className="text-lg font-semibold px-6 py-4 rounded-xl bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 text-center w-56 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300"
        >
          Kontakt
        </Link>
      </div>
    </div>
  </div>
</section>


{/* Fail */}
<section ref={failSection} className="hidden">
  <div className="min-h-screen flex items-center justify-center m-5">
    {/* centered items */}
    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
      {/* heading and image */}
      <div className="flex flex-col space-y-6 items-center justify-center border-b-2 border-black p-4 dark:border-white md:border-b-0 md:border-r-2 md:p-5">
        <h3 className="text-3xl font-bold font-serif font-semibold capitalize lg:text-4xl text-center">
          Došlo je do greške
        </h3>

        <img
          src="/images/transparent-shila-main.png"
          className="w-[360px] mx-5 lg:w-[550px]"
          alt=""
        />

        <h3 className="text-2xl font-bold font-serif font-semibold capitalize lg:text-4xl text-center">
          Molimo javite se na kontakt
        </h3>
      </div>

      {/* Buttons */}
      <div className="flex flex-col space-y-6 items-center md:justify-between md:py-12">
        <Link
          to="/contact"
          className="text-lg font-semibold px-6 py-4 rounded-xl bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 text-center w-56 hover:scale-110 hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300 mb-8 scale-125 shadow-2xl"
        >
          Kontakt
        </Link>

        <Link
          to="/"
          className="text-lg font-semibold px-6 py-4 rounded-xl bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 text-center w-56 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300"
        >
          Početna
        </Link>

        <Link
          to="/info"
          className="text-lg font-semibold px-6 py-4 rounded-xl bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 text-center w-56 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300"
        >
          Informacije
        </Link>

        <Link
          to="/buy"
          className="text-lg font-semibold px-6 py-4 rounded-xl bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 text-center w-56 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300"
        >
          Pokušajte ponovo
        </Link>
      </div>
    </div>
  </div>
</section>






</div>


    );
};

export default Confirmation;
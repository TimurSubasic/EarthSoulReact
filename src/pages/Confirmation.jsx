// eslint-disable-next-line no-unused-vars
import React from 'react';
import { getCartData, getShippingData } from '../utils/shippingData';
import { Link } from 'react-router-dom';

const Confirmation = () => {


    const shippingData = getShippingData()

    const cartData = getCartData()

    const getBuyButton = () => {

        if (shippingData.name != '' && cartData.totalPrice != 0) {

            return <button className='text-3xl text-center py-5 w-full bg-cyan-600 rounded-xl text-white font-serif uppercase shadow-lg hover:shadow-cyan-600/30 duration-300 my-8 '>
                naručite
            </button>
        }

    }

    return (
        


<section className='container max-w-6xl mx-auto p-5 -mt-16'>

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


    <Link to='/buy' className='text-3xl text-center py-5 w-full bg-yellow-400 rounded-xl text-black font-serif uppercase shadow-lg hover:shadow-yellow-400/30 duration-300'>
        Uredi
    </Link>



  </div>

  {/* Price */}
  <div className="p-6 rounded-lg flex flex-col space-y-6 items-center bg-white dark:bg-slate-900 shadow-xl w-full justify-between">

    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold mb-6">
      Račun
    </h3>


    <div className={`text-2xl sm:text-3xl mx-5 w-full flex flex-col space-y-12 items-start h-full justify-start ${cartData.totalPrice == 0 ? 'hidden' : '' } ` } >

      <p className={`font-serif h-24 flex justify-between items-center gap-5 w-full border-b-2 border-gray-400 dark:border-slate-500 p-3 ${cartData.amount25 == 0 ? 'hidden' : ''}`} >
        Earth Soul 25g:  
          <div className='font-sans font-bold flex flex-col space-y-2 items-center'>
            {cartData.amount25} 

            <div className='font-extralight text-lg text-black/60 dark:text-white/60 '>
            *90 KM
            </div>

          </div>
      </p>

      <p className={`font-serif h-24 flex justify-between items-center gap-5 w-full border-b-2 border-gray-400 dark:border-slate-500 p-3 ${cartData.amount50 == 0 ? 'hidden' : ''}`} >
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


    <Link to='/buy/cart' className='text-3xl text-center py-5 w-full bg-yellow-400 rounded-xl text-black font-serif uppercase shadow-lg hover:shadow-yellow-400/30 duration-300'>
        Uredi
    </Link>

  </div>

</div>

</div>

{
    getBuyButton()
}

</section>





    );
};

export default Confirmation;
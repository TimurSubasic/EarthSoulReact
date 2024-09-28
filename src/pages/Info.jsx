// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { getCartData, updateCartData } from '../utils/shippingData';


const Info = () => {

  const cartData = getCartData();

  const [amount25, setAmount25] = useState(cartData.amount25);
  const [amount50, setAmount50] = useState(cartData.amount50);
  
  // Function to calculate price
  const getPrice = (newAmount25 = amount25, newAmount50 = amount50) => {
    return (newAmount25 * 90) + (newAmount50 * 150);
  };
  
  // Function to update cart data
  const handleCartUpdateData = (newAmount25 = amount25, newAmount50 = amount50) => {
    updateCartData({
      amount25: newAmount25,
      amount50: newAmount50,
      totalPrice: getPrice(newAmount25, newAmount50),
    });
  };
  
  // Plus and minus functions for amount25
  const plus25 = () => {
    const newAmount25 = amount25 + 1;
    setAmount25(newAmount25);
    handleCartUpdateData(newAmount25, amount50);
  };
  
  const minus25 = () => {
    if (amount25 > 0) {
      const newAmount25 = amount25 - 1;
      setAmount25(newAmount25);
      handleCartUpdateData(newAmount25, amount50);
    }
  };
  
  // Plus and minus functions for amount50
  const plus50 = () => {
    const newAmount50 = amount50 + 1;
    setAmount50(newAmount50);
    handleCartUpdateData(amount25, newAmount50);
  };
  
  const minus50 = () => {
    if (amount50 > 0) {
      const newAmount50 = amount50 - 1;
      setAmount50(newAmount50);
      handleCartUpdateData(amount25, newAmount50);
    }
  };
  





    return (



<main className="flex-grow mt-2">

{/* Use Section */}
<section id="use" className="container max-w-6xl mx-auto p-5">
  <div className="flex flex-col justify-center items-center border-2 border-gray-300 dark:border-slate-700 rounded-lg shadow-xl">

    <h2 className="text-4xl font-bold md:text-5xl my-6 md:my-12">Upotreba</h2>

    <div className="flex flex-col space-y-12">

      {/* Direct Usage */}
      <div className="p-6 rounded-lg flex flex-col space-y-6 items-center bg-white dark:bg-slate-900 shadow-xl w-full">

        <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold">
          Direktno
        </h3>

        <div className='flex flex-col space-y-6 w-full items-center md:flex-row md:space-y-0 md:space-x-12'>

          <img src="/images/smola-kasika.png" className="rounded-lg w-3/4 md:w-2/5 " alt="" />

          <p className="text-xl mx-5 md:text-2xl lg:text-3xl ">
            Preporučenu dozu od 0,3g-0,5g (otprilike veličine zrna graška) stavite direktno u usta, ostavite par sekundi da se rastopi i progutajte. Nakon toga zalijte čašom vode. Koristite svako jutro na prazan stomak, kako bi postigli očekivane rezultate.
          </p>

        </div>

        

      </div>

      {/* With Water */}
      <div className="p-6 rounded-lg flex flex-col space-y-6 items-center bg-white dark:bg-slate-900 shadow-xl w-full">

        <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold">
          Sa vodom
        </h3>

        <div className='flex flex-col space-y-6 w-full items-center md:flex-row md:space-y-0 md:space-x-12'>

          <img src="/images/Shila-Upotreba.png" className="rounded-lg w-3/4 md:w-2/5 " alt="" />

          <p className="text-xl mx-5 md:text-2xl lg:text-3xl ">
            Preporučenu dozu od 0,3g-0,5g (otprilike veličine zrna graška) istopite u toploj vodi, čaju ili mlijeku. Radi poboljšanja okusa možete dodati i med. Koristite svako jutro na prazan stomak, kako bi postigli očekivane rezultate.
          </p>

        </div>
        

      </div>

    </div>

  </div>
</section>

{/* Benefits Section */}
<section id="benefites" className="container max-w-6xl p-5 mt-12 mx-auto">

  <div className="border-2 border-gray-300 dark:border-slate-700 rounded-lg shadow-lg">

    <h2 className="text-center text-4xl font-bold md:text-5xl my-6 md:my-12">Benefiti</h2>

    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-10">

      {/* First Row of Benefits */}
      <div className="flex flex-col space-y-6 w-full">

        {/* Benefit 1 */}
        <div className="benefit-item">

          <img src="/svgs/energy-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt="" />

          <div className="flex flex-col space-y-2 items-start">

            <h3 className="text-3xl font-semibold">Energija</h3>
            <p className="text-xl font-light">Prirodno povećajte nivo energije.</p>

          </div>

        </div>

        {/* Benefit 2 */}
        <div className="benefit-item">

          <img src="/svgs/focus-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt="" />

          <div className="flex flex-col space-y-2 items-start">

            <h3 className="text-3xl font-semibold">Fokus</h3>
            <p className="text-xl font-light">Poboljšajte mentalni fokus i jasnoću.</p>

          </div>

        </div>

        {/* Benefit 3 */}
        <div className="benefit-item">

          <img src="/svgs/muscle-up-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt="" />

          <div className="flex flex-col space-y-2 items-start">

            <h3 className="text-3xl font-semibold">Trening</h3>
            <p className="text-xl font-light">Pojačajte fizičke performanse i izdržljivost.</p>

          </div>

        </div>

        {/* Benefit 4 */}
        <div className="benefit-item">

          <img src="/svgs/heart1-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt="" />

          <div className="flex flex-col space-y-2 items-start">

            <h3 className="text-3xl font-semibold">Zdravlje</h3>
            <p className="text-xl font-light">Unaprijedite sveukupno zdravlje i blagostanje.</p>

          </div>

        </div>

      </div>

      {/* Second Row of Benefits */}
      <div className="flex flex-col space-y-6 w-full">

        {/* Benefit 5 */}
        <div className="benefit-item">

          <img src="/svgs/blood-donation-1-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt="" />

          <div className="flex flex-col space-y-2 items-start">

            <h3 className="text-3xl font-semibold">Krvna slika</h3>
            <p className="text-xl font-light">Povećajte prirodni nivo željeza u krvi.</p>

          </div>

        </div>

        {/* Benefit 6 */}
        <div className="benefit-item">

          <img src="/svgs/men-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt="" />

          <div className="flex flex-col space-y-2 items-start">

            <h3 className="text-3xl font-semibold">Testosteron</h3>
            <p className="text-xl font-light">Podignite nivo testosterona u organizmu.</p>

          </div>

        </div>

        {/* Benefit 7 */}
        <div className="benefit-item">

          <img src="/svgs/woman-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt="" />

          <div className="flex flex-col space-y-2 items-start">

            <h3 className="text-3xl font-semibold">Kosti</h3>
            <p className="text-xl font-light">Zadržite gustinu kostiju tokom menopauze.</p>

          </div>

        </div>

        {/* Benefit 8 */}
        <div className="benefit-item">

          <img src="/svgs/hourglass-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt="" />

          <div className="flex flex-col space-y-2 items-start">

            <h3 className="text-3xl font-semibold">Starenje</h3>
            <p className="text-xl font-light">Usporite proces starenja organizma.</p>

          </div>

        </div>

      </div>

    </div>

      {/* toggle za vise benefita */}
    {/* <button id="more-benefites-btn" type="button" className="text-center w-full font-bold text-2xl md:text-3xl my-4 md:my-8 animate-pulse-strong">
      I više...
    </button> */}

    <div id="benefit-space" className="my-12 "></div>

    {/* More Benefits Section */}
    <div id="more-benefites" className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-10 ">


                    {/* first row */}
                <div className="flex flex-col space-y-6 w-full">

                    {/* item 1 */}
                    <div className="flex space-x-5 justify-center items-center rounded-lg bg-white dark:bg-slate-900 shadow-lg h-40 p-5">


                        <div className="flex flex-col space-y-2 items-start p-5 rounded-lg border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">

                            <h3 className="text-3xl font-semibold text-center">
                                Benefiti za Žene
                            </h3>

                        </div>


                    </div>


                    {/* item 2 */}
                    <div className="benefit-item">

                        <img src="/svgs/pregnant-woman-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt=""/>

                        <div className="flex flex-col space-y-2 items-start">

                            <h3 className="text-3xl font-semibold">
                                Povećava plodnost
                            </h3>

                        </div>


                    </div>

                    {/* item 3 */}
                    <div className="benefit-item">

                        <img src="/svgs/period-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt=""/>

                        <div className="flex flex-col space-y-2 items-start">

                            <h3 className="text-3xl font-semibold">
                                Reguliše menstrualni ciklus
                            </h3>

                        </div>


                    </div>

                    {/* item 4 */}
                    <div className="benefit-item">

                        <img src="/svgs/dna-svgrepo-com.svg" className="h-12 dark:invert duration-1000 rotate-12" alt=""/>

                        <div className="flex flex-col space-y-2 items-start">

                            <h3 className="text-3xl font-semibold">
                                Balansira hormone
                            </h3>

                        </div>


                    </div>





                </div>



                {/* second row */}
                <div className="flex flex-col space-y-6 w-full">

                    {/* item 1 */}
                    <div className="flex space-x-5 justify-center items-center rounded-lg bg-white dark:bg-slate-900 shadow-lg h-40 p-5">


                        <div className="flex flex-col space-y-2 p-5 items-start rounded-lg border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">

                            <h3 className="text-3xl font-semibold text-center inline-block">
                                Benefiti za Muškarce
                            </h3>

                        </div>


                    </div>


                    {/* item 2 */}
                    <div className="benefit-item">

                        <img src="/svgs/muscle-gain-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt=""/>

                        <div className="flex flex-col space-y-2 items-start">

                            <h3 className="text-3xl font-semibold">
                                Regeneriše mišiće
                            </h3>

                        </div>


                    </div>

                    {/* item 3 */}
                    <div className="benefit-item">

                        <img src="/svgs/weight-lifting-up-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt=""/>

                        <div className="flex flex-col space-y-2 items-start">

                            <h3 className="text-3xl font-semibold">
                                Povećava snagu na treninzima
                            </h3>

                        </div>


                    </div>

                    
                    {/* item 4 */}
                    <div className="benefit-item">

                        <img src="/svgs/male-gender-heart-svgrepo-com.svg" className="h-12 dark:invert duration-1000" alt=""/>

                        <div className="flex flex-col space-y-2 items-start">

                            <h3 className="text-3xl font-semibold">
                                Povećava libido
                            </h3>

                        </div>


                    </div>





                </div>

                





                </div>

  </div>

</section>

{/* Price Section */}
<section id="price" className="container max-w-6xl mx-auto p-5 mt-12">
            <div className="flex flex-col justify-center items-center border-2 border-gray-300 dark:border-slate-700 rounded-lg shadow-xl">


            <h2 className="text-4xl font-bold md:text-5xl my-6 md:my-12">
                Cijena
            </h2>


            <div className="flex flex-col space-y-12">

                {/* {/* 25g price */} 
                <div className="p-6 rounded-lg flex flex-col space-y-8 items-center justify-center bg-white dark:bg-slate-900 shadow-xl">

                    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold font-serif">
                        Earth Soul 25g
                    </h3>

                    <div className='flex flex-col space-y-6 items-center md:flex-row md:space-y-0 md:justify-around '>


                    <img src="/images/shila-25g.png" className="rounded-lg w-3/4 md:w-[45%] lg:w-[37%] duration-700  " alt=""/>

                    <div className='flex flex-col space-y-6 items-center md:w-[45%]  '>

                      

                    <p className="text-xl lg:text-2xl">
                        Doza za jednu osobu 2 mjeseca
                    </p>

                    {/* cart Add */}
          <div className=" border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800 rounded-xl p-5 w-full flex flex-col space-y-3 items-center ">

              <h3 className=" m-2 text-3xl font-bold font-static">
                  90 KM
              </h3>

              <h2 className='font-medium text-xl lg:text-2xl mb-3 '>
                Dodajte u Korpu
              </h2>

            
            {/* buttons */}
            <div className="flex space-x-4 items-center">


                {/* + 25 */}
                <div onClick={ () => plus25() } className='h-12 w-12 cursor-pointer'>
                    <FaPlusCircle className='h-full w-full bg-green-500 rounded-full p-1 text-white dark:text-black shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/40 duration-300 md:hover:scale-[1.03]' />
                </div>


                {/* amount */}
                <div className="flex items-center justify-center h-16 w-16 border-2 rounded-full border-gray-300 bg-white dark:border-slate-700 dark:bg-slate-900">
                    <p id="amount25" className="font-bold text-2xl">
                        {
                            cartData.amount25
                        }
                    </p>
                </div>


                {/* - 25 */}
                <div onClick={ minus25 } className='h-12 w-12 cursor-pointer'>
                    <FaMinusCircle className='h-full w-full bg-red-500 rounded-full p-1 text-white dark:text-black shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/40 duration-300 md:hover:scale-[1.03]' />
                </div>
                


            </div>
          </div>

                    </div>

                    

                    


            
        
        
        </div>

                </div>


                {/* {/* 50g price */} 
                <div className="p-6 rounded-lg flex flex-col space-y-8 items-center justify-center bg-white dark:bg-slate-900 shadow-xl">

                    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-serif font-semibold">
                        Earth Soul 50g
                    </h3>

                  <div className='flex flex-col space-y-6 items-center md:flex-row md:space-y-0 md:justify-around '>

                    <img src="/images/shila-main.jpg" className="rounded-lg w-3/4 md:w-[45%] lg:w-[37%] duration-700    " alt=""/>

                    <div className='flex flex-col space-y-6 items-center md:w-[45%] '>

                    <p className="text-xl text-center lg:text-2xl">
                        Doza za jednu osobu 4 mjeseca
                    </p>


                    {/* cart Add */}
                    <div className=" border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800 rounded-xl p-5 w-full flex flex-col space-y-3 items-center ">

              <h3 className=" m-2 text-3xl font-bold font-static">
                  150 KM
              </h3>

              <h2 className='font-medium text-xl lg:text-2xl mb-3 '>
                Dodajte u Korpu
              </h2>

            
            {/* buttons */}
            <div className="flex space-x-4 items-center">


                {/* + 25 */}
                <div onClick={ () => plus50() } className='h-12 w-12 cursor-pointer'>
                    <FaPlusCircle className='h-full w-full bg-green-500 rounded-full p-1 text-white dark:text-black shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/40 duration-300 md:hover:scale-[1.03]' />
                </div>


                {/* amount */}
                <div className="flex items-center justify-center h-16 w-16 border-2 rounded-full border-gray-300 bg-white dark:border-slate-700 dark:bg-slate-900">
                    <p id="amount25" className="font-bold text-2xl">
                        {
                            cartData.amount50
                        }
                    </p>
                </div>


                {/* - 25 */}
                <div onClick={ minus50 } className='h-12 w-12 cursor-pointer'>
                    <FaMinusCircle className='h-full w-full bg-red-500 rounded-full p-1 text-white dark:text-black shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/40 duration-300 md:hover:scale-[1.03]' />
                </div>
                


            </div>
          </div>
                    

                </div>

                </div>


                </div>
            </div>


        </div>
        </section>

{/* FAQ Section */}
<section id="FAQ" className="container max-w-6xl mx-auto p-5 mt-12">
    <div className="flex flex-col justify-center items-center border-2 border-gray-300 dark:border-slate-700 rounded-lg shadow-xl">


            <h2 className="text-4xl font-bold md:text-5xl my-6 md:my-12">
                Česta pitanja
            </h2>


            <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-10">

                {/* container for FAQ */}
                <div className="p-6 rounded-lg bg-white dark:bg-slate-900 shadow-xl">

                    <div className="m-8 mx-auto overflow-hidden">
                        {/* Tab 1 */}
                        <div className="py-1 border-b-2 border-gray-300 dark:border-slate-700 outline-none group" tabIndex="1">
                          {/* Tab Flex Container */}
                          <div className="flex items-center justify-between space-x-6 py-3 cursor-pointer group">

                            <div></div>


                            {/* Tab Title */}
                            <div className="text-center duration-500 mx-5 group-hover:scale-105 text-xl md:text-2xl">
                              Koliko dugo je potrebno da osjetite benefite Shilajita?
                            </div>
                            {/* Arrow */}
                            <div className=" duration-500   group-focus:-rotate-180 pr-5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                              </svg>
                            </div>
                          </div>


                          {/* Tab Inner Content */}
                          <div className="overflow-hidden  duration-1000 group-focus:max-h-screen max-h-0  ">
                            <p className="text-center text-lg p-5 font-light md:text-xl">
                                Ovaj drevni, prirodni suplement dobiven iz srca divljih planinskih lanaca na svakoga djeluje drugačije. Dok bi neki mogli primijetiti povećanje energije i vitalnosti unutar nekoliko dana, drugi bi mogli doživjeti postepeno poboljšanje tokom nekoliko sedmica.
                            </p>
                          </div>
                        </div>

                        {/* Tab 2 */}
                        <div className="py-1 border-b-2 border-gray-300 dark:border-slate-700 outline-none group" tabIndex="2">

                          {/* Tab Flex Container */}
                          <div className="flex items-center justify-between space-x-6 py-3 cursor-pointer group">

                            {/* left side empty */}
                            <div></div>

                            {/* Tab Title */}
                            <div className="text-center duration-500 mx-5 py-5 md:py-8 group-hover:scale-105 text-xl md:text-2xl">
                              Zašto varijaca u vremenu?
                            </div>
                            {/* Arrow */}
                            <div className=" duration-500  group-focus:-rotate-180 pr-5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                              </svg>
                            </div>
                          </div>

                          {/* Tab Inner Content */}
                          <div className="overflow-hidden  duration-1000 group-focus:max-h-screen max-h-0  ">
                            <p className="text-center text-lg p-5 font-light md:text-xl">
                                Shilajit nije brzo rješenje, to je duboki, holistički pojačivač koji postepeno usklađuje i podmlađuje vaše tijelo iznutra. Njegov niz dobrobiti, od jačanja imunološkog sustava do poboljšanja kognitivnih funkcija razvija se kroz dosljednu upotrebu. Zapamtite, putovanje sa Shilajitom jednako je važno kao i odredište. Radi se o prihvaćanju postepenog puta do dobrobiti, usklađivanju s reakcijama vašeg tijela i promatranju suptilnih ali dubokih promjena.
                            </p>
                          </div>
                        </div>

                        {/* Tab 3 */}
                        <div className="py-1 border-b-2 border-gray-300 dark:border-slate-700 outline-none group" tabIndex="3">
                          {/* Tab Flex Container */}
                          <div className="flex items-center justify-between space-x-6 py-3 cursor-pointer group  ">

                            <div></div>


                            {/* Tab Title */}
                            <div className="text-center duration-500 mx-5 py-5 md:py-8 group-hover:scale-105 text-xl md:text-2xl">
                              Odakle dolazi <span className="font-serif font-semibold text-2xl md:text-3xl">Earth Soul</span> Shilajit?
                            </div>
                            {/* Arrow */}
                            <div className=" duration-500   group-focus:-rotate-180 pr-5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                              </svg>
                            </div>
                          </div>

                          {/* Tab Inner Content */}
                          <div className="overflow-hidden  duration-1000 group-focus:max-h-screen max-h-0  ">
                            <p className="text-center text-lg p-5 font-light md:text-xl">
                                Smola bogata mineralima dolazi iz slojeva stijena planinskih lanaca kao što su Himalaji, Tibetan i Altaj.
                            </p>
                          </div>
                        </div>

                        {/* Tab 4 */}
                        <div className="py-1 border-b-2 border-gray-300 dark:border-slate-700 outline-none group" tabIndex="4">
                          {/* Tab Flex Container */}
                          <div className="flex items-center justify-between space-x-6 py-3 cursor-pointer group  ">

                            <div></div>

                            {/* Tab Title */}
                            <div className="text-center duration-500 mx-5 py-5 md:py-8 group-hover:scale-105 text-xl md:text-2xl">
                              Kako dozirati <span className="font-serif font-semibold text-2xl md:text-3xl">Earth Soul</span> Shilajit?
                            </div>
                            {/* Arrow */}
                            <div className=" duration-500   group-focus:-rotate-180 pr-5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                              </svg>
                            </div>
                          </div>

                          {/* Tab Inner Content */}
                          <div className="overflow-hidden  duration-1000 group-focus:max-h-screen max-h-0  -in">
                            <div className="text-start text-lg p-5 font-light md:text-xl">

                                <p className="text-center text-lg p-5 font-light md:text-xl">
                                    <span className="font-semibold">
                                        Odrasli:
                                    </span> <br/>
                                    0.5g na dnevnoj bazi
                                    <br/><br/>

                                    <span className="font-semibold">
                                        Tinejdžeri (12-16 god):
                                    </span> <br/>

                                    0.25g na dnevnoj bazi
                                    <br/><br/>

                                    <span className="font-semibold">
                                        Sportisti:
                                    </span> <br/>

                                    2 x 0.5g na dan fizičke aktivnosti prije i poslje treninga
                                    <br/><br/>

                                    <span className="font-semibold">
                                        Životinje:
                                    </span> <br/>

                                    1.5 mg po kilogramu težine

                                  </p>
                            </div>
                          </div>
                        </div>


                        {/* Tab 5 */}
                        <div className="py-1 border-b-2 border-gray-300 dark:border-slate-700 outline-none group" tabIndex="5">
                            {/* Tab Flex Container */}
                            <div className="flex items-center justify-between space-x-6 py-3 cursor-pointer group  ">

                              <div></div>


                              {/* Tab Title */}
                              <div className="text-center duration-500 mx-5 py-5 md:py-8 group-hover:scale-105 text-xl md:text-2xl">
                                Šta je Fulvinska Kiselina?
                              </div>
                              {/* Arrow */}
                              <div className=" duration-500   group-focus:-rotate-180 pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                  <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                                </svg>
                              </div>
                            </div>

                            {/* Tab Inner Content */}
                            <div className="overflow-hidden  duration-1000 group-focus:max-h-screen max-h-0  ">
                              <p className="text-center text-lg p-5 font-light md:text-xl">
                                Fulvinska kiselina je jak antioksidans. Dokazano je da stimulira rad mozga i sprječava nakupljanje tau proteina koji je odgovoran za nastanak, odnosno razvoj Alzheimerove bolesti. Najjači je prirodni elektrolit i u tijelu djeluje protuupalno. Fulvinska kiselina za sebe veže mnogobrojne vitamine, minerale i druge tvari i na taj ih način prenosi do tjelesnih stanica i brine se o ravnoteži stanica. Istodobno, fulvinska kiselina povećava energiju i stimulira regeneraciju.
                              </p>
                            </div>
                          </div>


                          {/* Tab 6 */}
                        <div className="py-1 border-b-2 border-gray-300 dark:border-slate-700 outline-none group" tabIndex="6">
                            {/* Tab Flex Container */}
                            <div className="flex items-center justify-between space-x-6 py-3 cursor-pointer group  ">

                              <div></div>


                              {/* Tab Title */}
                              <div className="text-center duration-500 mx-5 py-5 md:py-8 group-hover:scale-105 text-xl md:text-2xl">
                                Koje su prednosti Fulvinske Kiseline?
                              </div>
                              {/* Arrow */}
                              <div className=" duration-500   group-focus:-rotate-180 pr-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                  <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                                </svg>
                              </div>
                            </div>

                            {/* Tab Inner Content */}
                            <div className="overflow-hidden  duration-1000 group-focus:max-h-screen max-h-0  ">
                              <p className="text-center text-lg p-5 font-light md:text-xl">
                                <span className="font-semibold">
                                    1. Poboljšana apsorpcija hranjivih tvari:
                                </span> <br/>
                                Fulvinska kiselina olakšava apsorpciju hranjivih tvari u stanice, povećavajući biodostupnost minerala prisutnih u shilajitu.
                                <br/><br/>

                                <span className="font-semibold">
                                    2. Antioksidativna svojstva:
                                </span> <br/>

                                Fulvinska kiselina neutrališe slobodne radikale i smanjuje oksidativni stres, što poboljšava ukupno zdravlje i usporava starenje.
                                <br/><br/>

                                <span className="font-semibold">
                                    3. Detoksikacija:
                                </span> <br/>

                                Pomaže u uklanjanju toksina iz tijela, poboljšavajući funkciju jetre i bubrega.
                                <br/><br/>

                                <span className="font-semibold">
                                    4. Povećanje energije:
                                </span> <br/>

                                Redovna konzumacija shilajita može poboljšati nivo energije i izdržljivost zahvaljujući fulvinskoj kiselini koja potiče staničnu energiju i metabolizam.

                              </p>
                            </div>
                          </div>






                      </div>

                </div>






            </div>


        </div>
    </section>

</main>





    );
};

export default Info;
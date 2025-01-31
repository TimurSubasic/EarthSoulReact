// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { getCartData, getShippingData, updateCartData } from '../utils/shippingData';

const Cart = () => {

    const navigate = useNavigate()

    const handleCartUpdateData = () => {

        if (getPrice() > 0) {
            updateCartData({
            amount25: amount25,
            amount50: amount50,
            totalPrice: getPrice()
        })

        if (getShippingData().name == '') {
            navigate('/buy')
        }
        else{
            navigate('/buy/confirmation')
        }
        
        }

        else{
            const buy = document.getElementById('cart-next')

             if (!buy.classList.contains("animate-wiggle-fast", "bg-red-600")) {
        
                buy.classList.add("animate-wiggle-fast", "bg-red-600")
                buy.classList.remove("hover:shadow-cyan-600/30")
                
            
                setTimeout(() => {
                    buy.classList.remove("animate-wiggle-fast", "bg-red-600")
                    buy.classList.add("hover:shadow-cyan-600/30")
                    
                }, 1300);
            
                }
        }

        

    }


    const cartData = getCartData()
    


    const [amount25, setAmount25] = useState(cartData.amount25)

    const [amount50, setAmount50] = useState(cartData.amount50)


    const minus25 = () => {

        if (amount25 > 0) {
            setAmount25(amount25 - 1)
        }

    }

    const minus50 = () => {

        if (amount50 > 0) {
            setAmount50(amount50 - 1)
        }

    }

    const getPrice = () => {

        const price = (amount25 * 90) + (amount50 * 150)

        return price

    }




  const galleryRef = useRef(null); // Reference to the gallery container
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft); // Mouse position relative to the container
    setScrollLeft(galleryRef.current.scrollLeft); // Get current scroll position
    // Disable snapping during drag
    galleryRef.current.style.scrollSnapType = 'none';
  };

  const stopDragging = () => {
    setIsDragging(false);
    // Re-enable snapping after drag
    galleryRef.current.style.scrollSnapType = 'x mandatory';
  };

  const onDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent text selection while dragging
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };



    return (



<div className='w-full min-h-[100vh] duration-300 -mt-12 p-5 '>

<div className="container max-w-6xl flex flex-col my-2 mx-auto">

{/* Top part */}
<div className="flex justify-between mb-24 items-center ">

    <h3 className="text-2xl font-bold mx-3">
        Vaša korpa
    </h3>

    {/* x btn */}               
    <Link to='/buy' className="h-10 w-10 mx-3">

        <MdClose className='w-full h-full'/>

    </Link>
    

</div>

{/* images */}
<div className="flex justify-center items-center relative cursor-grab active:cursor-grabbing  ">


    {/* snap scroll */}
    <div
      id="scroll-container"
      ref={galleryRef}
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={onDragging}
      className="relative w-full flex gap-6 mx-4 overflow-x-auto pb-14 cursor-grab active:cursor-grabbing select-none"
    >
      {/* Empty div to pad the left side */}
      <div className="shrink-0 w-20 md:w-44 lg:w-56"></div>

      {/* Image Gallery */}
      <div className="snap-center shrink-0">
        <img
          className="shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl bg-white selectDisable"
          src="/images/shila-main.jpg"
        />
      </div>
      <div className="snap-center shrink-0">
        <img
          className="shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl bg-white selectDisable"
          src="/images/shila-25g.png"
        />
      </div>
      <div className="snap-center shrink-0">
        <img
          className="shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl bg-white selectDisable"
          src="/images/ShilajitPic.png"
        />
      </div>
      <div className="snap-center shrink-0">
        <img
          className="shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl bg-white selectDisable"
          src="/images/shila-planina.jpg"
        />
      </div>
      <div className="snap-center shrink-0">
        <img
          className="shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl bg-white selectDisable"
          src="/images/shila-jezero.jpg"
        />
      </div>
      <div className="snap-center shrink-0">
        <img
          className="shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl bg-white selectDisable"
          src="/images/shila-stablo.png"
        />
      </div>

      {/* Empty div to pad the right side */}
      <div className="shrink-0 w-20 md:w-44 lg:w-56"></div>
    </div>

    




</div>


{/* items */}
<div className="flex flex-col space-y-8 mt-12">

    {/* 25g select */}
<div className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-lg shadow-lg">

    <div className="p-5 bg-white dark:bg-slate-900 flex flex-col space-y-5 justify-between items-center w-full my-3 md:flex-row md:space-y-0">

            <div className="flex flex-col space-y-1 items-center justify-center md:items-start">

                <h4 className="font-serif font-semibold text-2xl">
                    Earth Soul 25g
                </h4>

                <p className="font-light">
                    Doza za jednu osobu 2 mjeseca
                </p>

            </div>


            {/* price */}
            <div className="font-semibold text-xl p-3 rounded-2xl border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
                90 KM
            </div>


            {/* right side */}
        <div className="flex flex-col space-y-5 items-center justify-center md:flex-row md:space-y-0 md:space-x-6">

            
            {/* buttons */}
            <div className="flex space-x-4">


                {/* + 25 */}
                <div onClick={ () => setAmount25(amount25+1) } className='h-12 w-12 cursor-pointer'>
                    <FaPlusCircle className='h-full w-full bg-green-500 rounded-full p-1 text-white dark:text-black shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/40 duration-300 md:hover:scale-[1.03]' />
                </div>


                {/* - 25 */}
                <div onClick={  minus25 } className='h-12 w-12 cursor-pointer'>
                    <FaMinusCircle className='h-full w-full bg-red-500 rounded-full p-1 text-white dark:text-black shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/40 duration-300 md:hover:scale-[1.03]' />
                </div>
                


            </div>


            {/* amount */}
            <div className="flex items-center justify-center h-16 w-16 border-2 rounded-full border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
                 <p id="amount25" className="font-bold text-2xl">
                    {
                        amount25
                    }
                </p>
            </div>
        
        
        </div>



    </div>



</div>






        {/* 50g select */}
<div className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-lg shadow-lg">

    <div className="p-5 bg-white dark:bg-slate-900 flex flex-col space-y-5 justify-between items-center w-full my-3 md:flex-row md:space-y-0">

            <div className="flex flex-col space-y-1 items-center justify-center md:items-start">

                <h4 className="font-serif font-semibold text-2xl">
                    Earth Soul 50g
                </h4>

                <p className="font-light">
                    Doza za jednu osobu 4 mjeseca
                </p>

            </div>


            {/* price */}
            <div className="font-semibold text-xl p-3 rounded-2xl border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
                150 KM
            </div>


            {/* right side */}
        <div className="flex flex-col space-y-5 items-center justify-center md:flex-row md:space-y-0 md:space-x-6">

            
            {/* buttons */}
            <div className="flex space-x-4">


                {/* + 50 */}
                <div onClick={ () => setAmount50(amount50 + 1) } className='h-12 w-12 cursor-pointer'>
                    <FaPlusCircle className='h-full w-full bg-green-500 rounded-full p-1 text-white dark:text-black shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/40 duration-300 md:hover:scale-[1.03]' />
                </div>


                {/* - 50 */}
                <div onClick={  minus50 } className='h-12 w-12 cursor-pointer'>
                    <FaMinusCircle className='h-full w-full bg-red-500 rounded-full p-1 text-white dark:text-black shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/40 duration-300 md:hover:scale-[1.03]' />
                </div>
                


            </div>


            {/* amount */}
            <div className="flex items-center justify-center h-16 w-16 border-2 rounded-full border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
                 <p id="amount50" className="font-bold text-2xl">
                    {
                        amount50
                    }
                </p>
            </div>
        
        
        </div>



    </div>



</div>


    


{/*  */}
    {/* Price  */}
<div className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-lg shadow-lg">

    <div className="p-5 bg-white dark:bg-slate-900 flex justify-between items-center w-full my-3">

        <div className="flex flex-col space-y-1 ">

            <h4 className="font-serif font-semibold text-2xl">
                Cijena
            </h4>

            <p className="font-light">
                Dostava nije uključena
            </p>

        </div>

        <div className="text-2xl font-semibold">
            <span id="price">
                {
                    getPrice()
                }
            </span> KM
        </div>



    </div>




    



</div>




<button onClick={ handleCartUpdateData } id="cart-next" type="button" className="text-3xl text-center py-5 w-full bg-cyan-600 rounded-xl text-white font-serif font-semibold uppercase shadow-lg hover:shadow-cyan-600/30 duration-300 md:hover:scale-[1.03] ">
        nastavite
</button>








</div>






</div>
            
</div>





    );
};

export default Cart;
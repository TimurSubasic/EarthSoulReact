// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateShippingData, getShippingData } from '../utils/shippingData';

const Buy = () => {


    

const handleShippingUpdate = () => {

    updateShippingData({ 
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        address: address,
        country: country,
        city: city,
        zip: zip,
        message: message
     });

    console.log(getShippingData());

};




    const [name, setName] = useState('')

    const [surname, setSurname] = useState('')

    const [email, setEmail] = useState('')

    const [phone, setPhone] = useState('')

    const [address, setAddress] = useState('')

    const [country, setCountry] = useState('')

    const [city, setCity] = useState('')

    const [zip, setZip] = useState('')

    const [message, setMessage] = useState('')


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'surname') setSurname(value);
        if (name === 'email') setEmail(value);
        if (name === 'phone') setPhone(value);
        if (name === 'address') setAddress(value);
        if (name === 'country') setCountry(value);
        if (name === 'city') setCity(value);
        if (name === 'zip') setZip(value);
        if (name === 'message') setMessage(value);
        // And so on for the other fields
    };





var nameok = 0
var surnameok = 0
var mailok = 0
var addressok = 0
var countryok = 0
var cityok = 0
var zipok = 0
var zipMistake = 0

    const validateData = () => {

        if(name === ""){
            document.getElementById("no-name").classList.remove("hidden")
        }
        else{
            if (hasNumbers(name)){
                document.getElementById("wrong-name").classList.remove("hidden")
                if(!document.getElementById("no-name").classList.contains("hidden")){
                    document.getElementById("no-name").classList.add("hidden")
                }
            }
            else{
    
                nameok = 1
    
                if(document.getElementById("no-name").classList.contains("hidden")){
                    if(!document.getElementById("wrong-name").classList.contains("hidden")){
                        document.getElementById("wrong-name").classList.add("hidden")
                    }
                }
                else{
                    document.getElementById("no-name").classList.add("hidden")
                }
            }
        }


        if(surname === ""){
            document.getElementById("no-surname").classList.remove("hidden")
        }
        else{
            if (hasNumbers(surname)){
                document.getElementById("wrong-surname").classList.remove("hidden")
                if(!document.getElementById("no-surname").classList.contains("hidden")){
                    document.getElementById("no-surname").classList.add("hidden")
                }
            }
            else{
    
                surnameok = 1
    
                
                if(document.getElementById("no-surname").classList.contains("hidden")){
                    if(!document.getElementById("wrong-surname").classList.contains("hidden")){
                        document.getElementById("wrong-surname").classList.add("hidden")
                    }
                }
                else{
                    document.getElementById("no-surname").classList.add("hidden")
                }
            }
        }


        if(email === ""){
            document.getElementById("no-mail").classList.remove("hidden")
        }
        else{
            checkMail(email)
        }


        if(address === ""){
            document.getElementById("no-address").classList.remove("hidden")
        }
        else{
            if(hasLetters(address) && hasNumbers(address)){
    
                addressok = 1
    
                if(!document.getElementById("no-address").classList.contains("hidden")){
                    document.getElementById("no-address").classList.add("hidden")
                }
                if(!document.getElementById("wrong-address").classList.contains("hidden")){
                    document.getElementById("wrong-address").classList.add("hidden")
                }
            }
            else{
    
                
    
                
                document.getElementById("wrong-address").classList.remove("hidden")
                if(!document.getElementById("no-address").classList.contains("hidden")){
                    document.getElementById("no-address").classList.add("hidden")
                }
                
            }
        }


        if(country === ""){
            document.getElementById("no-country").classList.remove("hidden")
        }
        else{
    
                
            countryok = 1
    
                if(!document.getElementById("no-country").classList.contains("hidden")){
                    document.getElementById("no-country").classList.add("hidden")
                }
    
        }


        if(city === ""){
            document.getElementById("no-city").classList.remove("hidden")
        }
        else{
            if (hasNumbers(city)){
                document.getElementById("wrong-city").classList.remove("hidden")
                if(!document.getElementById("no-city").classList.contains("hidden")){
                    document.getElementById("no-city").classList.add("hidden")
                }
            }
            else{
    
                
                cityok = 1
    
                
                if(document.getElementById("no-city").classList.contains("hidden")){
                    if(!document.getElementById("wrong-city").classList.contains("hidden")){
                        document.getElementById("wrong-city").classList.add("hidden")
                    }
                }
                else{
                    document.getElementById("no-city").classList.add("hidden")
                }
            }
        }



        if(zip === ""){
            document.getElementById("no-zip").classList.remove("hidden")
    
            if(!document.getElementById("wrong-zip").classList.contains("hidden")){
                document.getElementById("wrong-zip").classList.add("hidden")
            }
            if(!document.getElementById("mistake-zip").classList.contains("hidden")){
                document.getElementById("mistake-zip").classList.add("hidden")
            }
        }
        else{
            if (hasLetters(zip)){
                    zipMistake++
                document.getElementById("wrong-zip").classList.remove("hidden")
                if(!document.getElementById("no-zip").classList.contains("hidden")){
                    document.getElementById("no-zip").classList.add("hidden")
                }
    
                if(zipMistake >= 2){
                    document.getElementById("mistake-zip").classList.remove("hidden")
                }
    
            }
            else{
    
                if(zip.length < 4 || zip.length > 5){
    
                    zipMistake++
                document.getElementById("wrong-zip").classList.remove("hidden")
                if(!document.getElementById("no-zip").classList.contains("hidden")){
                    document.getElementById("no-zip").classList.add("hidden")
                }
    
                if(zipMistake >= 2){
                    document.getElementById("mistake-zip").classList.remove("hidden")
                }
    
                }
    
                else{
    
                    
                    zipok = 1
    
                     zipMistake = 0
    
                
                if(document.getElementById("no-zip").classList.contains("hidden")){
                    if(!document.getElementById("wrong-zip").classList.contains("hidden")){
                        document.getElementById("wrong-zip").classList.add("hidden")
                    }
                }
                else{
                    document.getElementById("no-zip").classList.add("hidden")
                }
                if(!document.getElementById("mistake-zip").classList.contains("hidden")){
                    document.getElementById("mistake-zip").classList.add("hidden")
                }
                }
    
                
            }
        }


// ALL DATA IS OK
        if(nameok+surnameok+mailok+addressok+countryok+cityok+zipok == 7){
            handleShippingUpdate()
        }

        else{
             nameok = 0
             surnameok = 0
             mailok = 0
             addressok = 0
             countryok = 0
             cityok = 0
             zipok = 0

             const buy = document.getElementById('buy')

             if (!buy.classList.contains("animate-wiggle-fast", "bg-red-600")) {
        
                buy.classList.add("animate-wiggle-fast", "bg-red-600")
                buy.classList.remove("hover:shadow-cyan-600/30")
                
            
                setTimeout(() => {
                    buy.classList.remove("animate-wiggle-fast", "bg-red-600")
                    buy.classList.add("hover:shadow-cyan-600/30")
                    
                }, 1300);
            
                }


        }


    } // end of validation function



    function hasNumbers(input) {
        return /\d/.test(input);
      }


      function hasLetters(input) {
        return /[a-zA-Z]/.test(input);
      }  

      function checkMail(mailTxt){

        // eslint-disable-next-line no-useless-escape
        if(mailTxt.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
          // mail good
    
               
          mailok = 1
    
                
    
          if(document.getElementById("no-mail").classList.contains("hidden")){
            if(!document.getElementById("wrong-mail").classList.contains("hidden")){
                document.getElementById("wrong-mail").classList.add("hidden")
            }
        }
        else{
            document.getElementById("no-mail").classList.add("hidden")
        }
    
    
        }
        else{
            document.getElementById("wrong-mail").classList.remove("hidden")
                if(!document.getElementById("no-mail").classList.contains("hidden")){
                    document.getElementById("no-mail").classList.add("hidden")
                }
        }
      }




    return (
        



<main className="flex-grow">

    

<section id="buy-menu">

    <div className="flex flex-col space-y-24 container max-w-6xl mx-auto p-7">

        
            
        {/* buy form */}
        <form className="flex flex-col space-y-6 items-start justify-normal  w-full">

            {/* top part */}
            <div className="flex items-center justify-between w-full">
                <h3 className="text-2xl font-bold md:text-3xl">
                    Podatci za dostavu
                </h3>

                <Link to='/buy/cart' id="cart-btn" type="button" className="flex items-center justify-center space-x-3 p-2.5 border-2 border-gray-300 bg-white rounded-3xl shadow-md hover:scale-110 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 duration-300 animate-wiggle">
                    <img src="/svgs/cart-arrow-down-svgrepo-com.svg" className="h-12 dark:invert" alt=""/>

                    <span id="cart-amount" className="text-3xl font-bold mx-2">0</span>

                </Link>
                


            </div>
            

            {/* name/surname */}
            <div className="flex flex-col space-y-6 w-full md:flex-row md:space-y-0 md:space-x-4">

                {/* name form */}
                <div className="flex flex-col items-start w-full md:text-lg">
                    <h5 className="p-3 text-lg">Ime</h5>
                    <input htmlFor="firstName" onChange={handleChange} name="name" type="text" className="bg-white w-full shadow-md shadow-black/50 p-3 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black focus:scale-105 duration-500 dark:bg-slate-900 dark:shadow-white/50 dark:focus:shadow-white/50"/>
                    <p id="wrong-name" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Unesite validno ime
                    </p>
                    <p id="no-name" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Unesite ime
                    </p>
                </div>

                {/* surname form */}
                <div className="flex flex-col items-start w-full md:text-lg">
                    <h5 className="p-3 text-lg">Prezime</h5>
                    <input htmlFor="lastName" onChange={handleChange} name="surname" type="text" className="bg-white w-full shadow-md shadow-black/50 p-3 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black focus:scale-105 duration-500 dark:bg-slate-900 dark:shadow-white/50 dark:focus:shadow-white/50"/>
                    <p id="wrong-surname" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Unesite validno prezime
                    </p>
                    <p id="no-surname" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Unesite prezime
                    </p>
                </div>
                

            </div>

            {/* email form */}
            <div className="flex flex-col items-start w-full md:text-lg">
                <h5 className="p-3 text-lg">E-Mail</h5>
                <input type="email" onChange={handleChange} name="email" className="bg-white w-full shadow-md shadow-black/50 p-3 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black focus:scale-105 duration-500 dark:bg-slate-900 dark:shadow-white/50 dark:focus:shadow-white/50"/>
                <p id="wrong-mail" className="italic text-red-600 mt-2 hidden animate-pulse">
                    Unesite validan E-Mail
                </p>
                <p id="no-mail" className="italic text-red-600 mt-2 hidden animate-pulse">
                    Unesite E-Mail
                </p>
            </div>

            {/* phone number form */}
            <div className="flex flex-col items-start w-full md:text-lg">
                <h5 className="p-3 text-lg">Broj telefona</h5>
                <input htmlFor="phone" onChange={handleChange} name="phone" type="tel" className="bg-white w-full shadow-md shadow-black/50 p-3 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black focus:scale-105 duration-500 dark:bg-slate-900 dark:shadow-white/50 dark:focus:shadow-white/50 appearance-none"/>
            </div>

            {/* address form */}
            <div className="flex flex-col items-start w-full md:text-lg">
                <h5 className="p-3 text-lg">Adresa</h5>
                <input htmlFor="address" onChange={handleChange} name="address" type="text" className="bg-white w-full shadow-md shadow-black/50 p-3 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black focus:scale-105 duration-500 dark:bg-slate-900 dark:shadow-white/50 dark:focus:shadow-white/50"/>
                <p id="wrong-address" className="italic text-red-600 mt-2 hidden animate-pulse">
                    Vaša Adresa 1234
                </p>
                <p id="no-address" className="italic text-red-600 mt-2 hidden animate-pulse">
                    Unesite adresu
                </p>
            </div>



            {/* country/city/zip */}
            <div className="flex flex-col space-y-6 w-full md:flex-row md:space-y-0 md:space-x-4">

          

                {/* country form */}
                <div className="flex flex-col items-start w-full md:text-lg">
                    <h5 className="p-3 text-lg">Država</h5>
                    <select className="bg-white w-full p-3 h-12 shadow-md shadow-black/50 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black focus:scale-105 duration-500 dark:bg-slate-900 dark:shadow-white/50 md:h-[52px] appearance-none" name="country" onChange={handleChange} required="">
                        <option value="">
                            Izaberite...
                        </option>
                        <option className="font-semibold ">Bosna i Hercegovina</option>
                        <option className="font-semibold ">Hrvatska</option>
                        <option className="font-semibold ">Srbija</option>
                        <option className="font-semibold ">Crna Gora</option>
                        <option className="font-semibold ">Austrija</option>
                        <option className="font-semibold ">Belgija</option>
                        <option className="font-semibold ">Bugarska</option>
                        <option className="font-semibold ">Kipar</option>
                        <option className="font-semibold ">Češka Republika</option>
                        <option className="font-semibold ">Danska</option>
                        <option className="font-semibold ">Estonija</option>
                        <option className="font-semibold ">Francuska</option>
                        <option className="font-semibold ">Njemačka</option>
                        <option className="font-semibold ">Grčka</option>
                        <option className="font-semibold ">Mađarska</option>
                        <option className="font-semibold ">Irska</option>
                        <option className="font-semibold ">Italija</option>
                        <option className="font-semibold ">Letonija</option>
                        <option className="font-semibold ">Litvanija</option>
                        <option className="font-semibold ">Luksemburg</option>
                        <option className="font-semibold ">Malta</option>
                        <option className="font-semibold ">Holandija</option>
                        <option className="font-semibold ">Poljska</option>
                        <option className="font-semibold ">Portugal</option>
                        <option className="font-semibold ">Rumunija</option>
                        <option className="font-semibold ">Slovačka</option>
                        <option className="font-semibold ">Slovenija</option>
                        <option className="font-semibold ">Španija</option>
                        <option className="font-semibold ">Švedska</option>
                      </select>

                    <p id="no-country" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Izaberite državu
                    </p>
                </div>

                {/* city form */}
                <div className="flex flex-col items-start w-full md:text-lg">
                    <h5 htmlFor="city" className="p-3 text-lg">Grad</h5>
                    <input name="city" onChange={handleChange} type="text" className="bg-white w-full shadow-md shadow-black/50 p-3 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black focus:scale-105 duration-500 dark:bg-slate-900 dark:shadow-white/50 dark:focus:shadow-white/50"/>
                    <p id="wrong-city" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Unesite validan grad
                    </p>
                    <p id="no-city" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Unesite grad
                    </p>
                </div>

                {/* zip form */}
                <div className="flex flex-col items-start w-full md:text-lg">
                    <h5 className="p-3 text-lg">Poštanski broj</h5>
                    <input htmlFor="zip" onChange={handleChange} name="zip" type="text" pattern="\d*" inputMode="numeric" className="bg-white w-full shadow-md shadow-black/50 p-3 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black focus:scale-105 duration-500 dark:bg-slate-900 dark:shadow-white/50 dark:focus:shadow-white/50"/>
                    <p id="wrong-zip" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Unesite validan poštanski broj
                    </p>
                    <p id="no-zip" className="italic text-red-600 mt-2 hidden animate-pulse">
                        Unesite poštanski broj
                    </p>
                    <p id="mistake-zip" className="italic text-red-600 mt-2 hidden">
                        Neki od poznatih brojeva su: <br/>
                        Sarajevo: 71000 <br/>
                        Mostar: 88000 <br/>
                        Zagreb: 10000 <br/>
                        Beograd: 11000 <br/>
                        Podgorica: 81000 <br/>
                        Ljubljana: 1000
                    </p>
                </div>
                

            </div>


            <div className="border-b-2 border-gray-300 dark:border-slate-700 w-full h-1 py-2"></div>

            {/* message form */}
            <div className="flex flex-col items-start w-full md:text-lg">
                <h5 className="p-3 text-lg">Poruka</h5>
                <textarea name="message" onChange={handleChange}  className="bg-white w-full shadow-md shadow-black/50 p-3 rounded-lg focus:outline-none focus:shadow-xl focus:shadow-black duration-500 dark:bg-slate-900 dark:shadow-white/50"></textarea>
            </div>



            {/* pay type */}
            <button type="button" id="pay-type" className="flex items-center justify-center space-x-3 my-8">

                <div id="pay-type-check" className="p-1.5 rounded-full bg-sky-700 bg-opacity-80 cursor-pointer border-4 border-sky-300 "></div>
                <p className="text-lg font-light">
                    Plaćanje po preuzimanju
                </p>

            </button>




            <button onClick={validateData} id="buy" type="button" className="text-3xl text-center py-5 w-full bg-cyan-600 rounded-xl text-white font-serif uppercase shadow-lg hover:shadow-cyan-600/30 duration-300 ">
                naručite
            </button>



        </form>
    </div>

</section>




</main>





    );
};

export default Buy;
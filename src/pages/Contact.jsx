// eslint-disable-next-line no-unused-vars
import React from 'react';

const Contact = () => {
    return (
        


<main className="flex-grow flex items-center justify-center">


<section id="contact" className="min-h-full mt-12">
    <div className="container max-w-3xl mx-auto p-5 h-full w-full">

        <div className="p-5 flex flex-col space-y-16 items-center rounded-lg bg-white border-2 border-gray-300 dark:bg-slate-900 dark:border-slate-700 h-full w-full">

            <h2 className="text-4xl font-bold font-static uppercase p-5">
                Kontakt
            </h2>

            <div className="w-full flex flex-col items-center space-y-16 sm:flex-row sm:space-y-0 sm:space-x-20">


                <div className="w-3/4 rounded-2xl sm:w-1/2 hover:scale-105 duration-500">

                    <img src="/images/planina02.jpg" className="rounded-2xl dark:hidden" alt=""/>

                    <img src="/images/planina03.jpg" className="rounded-2xl hidden dark:block" alt=""/>



                </div>
                
                



                <div className="felx space-y-6">

                    {/* instagram */}
                    
                        <a href="https://www.instagram.com/earthsoul.sa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="flex items-center justify-start space-x-2 rounded-xl border-2 px-5 py-3 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300">
                            <img src="/svgs/instagram.svg" className="h-8 ml-2 dark:invert duration-1000" alt=""/>
                            <p className="text-lg">
                                Instagram
                            </p>
                        </a>
                    
                    

                    {/* E-Mail */}
                    
                        <a href="mailto:earthsoul.sa@gmail.com" className="flex items-center justify-start space-x-2 rounded-xl border-2 px-5 py-3 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300">
                            <img src="/svgs/mail-right-arrow-svgrepo-com.svg" className="h-8 ml-2 dark:invert duration-1000" alt=""/>
                            <p className="text-lg">
                                E-Mail
                            </p>
                        </a>
                    
                    

                    
                    {/* Phone */}
                    
                        <a href="tel:+38762437347" className="flex items-center justify-start space-x-2 rounded-xl border-2 px-5 py-3 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800 hover:scale-110 shadow-none hover:shadow-lg shadow-black dark:shadow-gray-500 duration-300">
                            <img src="/svgs/telephone-forward.svg" className="h-8 ml-2 dark:invert duration-1000" alt=""/>
                            <p className="text-lg">
                                Pozovite
                            </p>
                        </a>
                    
                    


                </div>

            </div>

        </div>

    </div>
</section>


</main>



    );
};

export default Contact;
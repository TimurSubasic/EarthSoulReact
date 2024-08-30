// eslint-disable-next-line no-unused-vars
import React from 'react';

const Info = () => {
    return (



<main className="flex-grow mt-2">

{/* Use Section */}
<section id="use" className="container max-w-6xl mx-auto p-5">
  <div className="flex flex-col justify-center items-center border-2 border-gray-300 dark:border-slate-700 rounded-lg shadow-xl">

    <h2 className="text-4xl font-bold md:text-5xl my-6 md:my-12">Upotreba</h2>

    <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-10">

      {/* Direct Usage */}
      <div className="p-6 rounded-lg flex flex-col space-y-6 items-center bg-white dark:bg-slate-900 shadow-xl">

        <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold">
          Direktno
        </h3>

        <img src="/images/smola-kasika.png" className="rounded-lg w-3/4 lg:h-1/2 lg:w-auto" alt="" />

        <p className="text-xl mx-5 lg:text-2xl">
          Preporučenu dozu od 0,3g-0,5g (otprilike veličine zrna graška) stavite direktno u usta, ostavite par sekundi da se rastopi i progutajte. Nakon toga zalijte čašom vode. Koristite svako jutro na prazan stomak, kako bi postigli očekivane rezultate.
        </p>

      </div>

      {/* With Water */}
      <div className="p-6 rounded-lg flex flex-col space-y-6 items-center bg-white dark:bg-slate-900 shadow-xl">

        <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold">
          Sa vodom
        </h3>

        <img src="/images/Shila-Upotreba.png" className="rounded-lg w-3/4 lg:h-1/2 lg:w-auto" alt="" />

        <p className="text-xl mx-5 lg:text-2xl">
          Preporučenu dozu od 0,3g-0,5g (otprilike veličine zrna graška) istopite u toploj vodi, čaju ili mlijeku. Radi poboljšanja okusa možete dodati i med. Koristite svako jutro na prazan stomak, kako bi postigli očekivane rezultate.
        </p>

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

    {/* <button id="more-benefites-btn" type="button" className="text-center w-full font-bold text-2xl md:text-3xl my-4 md:my-8 animate-pulse-strong">
      I više...
    </button> */}

    <div id="benefit-space" className="my-12 hidden"></div>

    {/* More Benefits Section */}
    {/* mzd ubaciti toggle mzd ne */}
    <div id="more-benefites" className="flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-10 hidden">

      {/* First Row of More Benefits */}
      <div className="flex flex-col space-y-6 w-full">

        {/* Benefit 9 */}
        <div className="flex space-x-5 justify-center items-center rounded-lg bg-white dark:bg-slate-900 shadow-lg h-40 p-5">

          <div className="flex flex-col space-y-2 items-start p-5 rounded-lg border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-3xl font-semibold text-center">Benefiti za Žene</h3>
          </div>

        </div>

        {/* Benefit 10 */}
        <div className="flex space-x-5 justify-center items-center rounded-lg bg-white dark:bg-slate-900 shadow-lg h-40 p-5">

          <div className="flex flex-col space-y-2 items-start p-5 rounded-lg border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-3xl font-semibold text-center">Pomaže kod neplodnosti</h3>
          </div>

        </div>

        {/* Benefit 11 */}
        <div className="flex space-x-5 justify-center items-center rounded-lg bg-white dark:bg-slate-900 shadow-lg h-40 p-5">

          <div className="flex flex-col space-y-2 items-start p-5 rounded-lg border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-3xl font-semibold text-center">Jačanje Imuniteta</h3>
          </div>

        </div>

      </div>

      {/* Second Row of More Benefits */}
      <div className="flex flex-col space-y-6 w-full">

        {/* Benefit 12 */}
        <div className="flex space-x-5 justify-center items-center rounded-lg bg-white dark:bg-slate-900 shadow-lg h-40 p-5">

          <div className="flex flex-col space-y-2 items-start p-5 rounded-lg border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-3xl font-semibold text-center">Poboljšanje rada jetre</h3>
          </div>

        </div>

        {/* Benefit 13 */}
        <div className="flex space-x-5 justify-center items-center rounded-lg bg-white dark:bg-slate-900 shadow-lg h-40 p-5">

          <div className="flex flex-col space-y-2 items-start p-5 rounded-lg border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-3xl font-semibold text-center">Regulacija šećera u krvi</h3>
          </div>

        </div>

        {/* Benefit 14 */}
        <div className="flex space-x-5 justify-center items-center rounded-lg bg-white dark:bg-slate-900 shadow-lg h-40 p-5">

          <div className="flex flex-col space-y-2 items-start p-5 rounded-lg border-2 border-gray-300 bg-gray-100 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-3xl font-semibold text-center">Poboljšanje kvalitete sperme</h3>
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


            <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-10 lg:space-x-16">

                {/* <!-- 25g price --> */}
                <div className="p-6 rounded-lg flex flex-col space-y-8 items-center justify-center bg-white dark:bg-slate-900 shadow-xl md:w-1/2">

                    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold font-serif">
                        Earth Soul 25g
                    </h3>

                    <img src="/images/shila-25g.png" className="rounded-lg w-3/4 md:h-1/2 md:w-auto" alt=""/>

                    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold">
                        90 KM
                    </h3>

                    <p className="text-xl text-center lg:text-2xl">
                        Doza za jednu osobu 2 mjeseca
                    </p>

                </div>


                {/* <!-- 50g price --> */}
                <div className="p-6 rounded-lg flex flex-col space-y-8 items-center justify-center bg-white dark:bg-slate-900 shadow-xl md:w-1/2">

                    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold font-serif">
                        Earth Soul 50g
                    </h3>

                    <img src="/images/shila-main.jpg" className="rounded-lg w-3/4 md:h-1/2 md:w-auto" alt=""/>

                    <h3 className="p-4 rounded-xl border-2 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 text-3xl font-semibold">
                        150 KM
                    </h3>

                    <p className="text-xl text-center lg:text-2xl">
                        Doza za jednu osobu 4 mjeseca
                    </p>

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
                              Odakle dolazi <span className="font-serif text-2xl md:text-3xl">Earth Soul</span> Shilajit?
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
                              Kako dozirati <span className="font-serif text-2xl md:text-3xl">Earth Soul</span> Shilajit?
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
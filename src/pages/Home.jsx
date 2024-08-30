// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (



<main className="flex-grow">
      
      {/* Hero Section */}
      <section id="hero" className="relative">

        <img src="/images/shila-jezero.jpg" className="w-screen sm:hidden" alt="Shilajit Jezero" />

        <img src="/images/sm-shila-jezero.jpg" className="w-screen hidden sm:block md:hidden" alt="Shilajit Jezero" />

        <img src="/images/md-shila-jezero.jpeg" className="w-screen hidden md:block xl:hidden" alt="Shilajit Jezero" />

        <img src="/images/xl-shila-jezero.jpeg" className="w-screen hidden xl:block 2xl:hidden" alt="Shilajit Jezero" />

        <img src="/images/2xl-shila-jezero.jpg" className="w-screen hidden 2xl:block" alt="Shilajit Jezero" />

        <div className="absolute top-12 z-10 text-center w-full text-white font-bold text-xl md:top-20 md:text-left md:text-3xl">
          <div className="container max-w-6xl mx-auto">
            <Link
              to="/buy"
              className="inline-block p-4 border-2 border-white rounded-xl bg-black/35 md:mx-5 md:p-8 md:leading-relaxed hover:bg-white hover:text-black hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl duration-200"
              id="hero-a"
            >
              Osjetite Punu <br className="hidden md:block" /> Moć Shilajita
            </Link>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section id="info">
        <div className="container max-w-6xl mx-auto mt-20">

          {/* Items 1 */}
          <div className="flex flex-col space-y-6 justify-center items-center mx-5 md:flex-row md:space-y-0 md:space-x-7">

            <div>
              <h2 className="text-4xl font-bold md:mx-10 md:my-5 lg:text-5xl">
                Šta je Shilajit
              </h2>
              <p className="hidden p-5 font-normal bg-white rounded-lg text-xl shadow-lg md:block lg:text-2xl dark:bg-slate-900">
                Shilajit (Mumija, Moomiyo, Mummiyo) je prirodni supstrat koji se sastoji od slojeva organskog materijala i minerala, kompresovanih kroz stoljeća u stijenama visokih planinskih lanaca poput Himalaja. Ovaj tamni, smolasti materijal poznat je po svojoj bogatoj koncentraciji fulvinske kiseline i više od 85 minerala u jonskom obliku, što ga čini izuzetno nutritivno bogatim.
              </p>
            </div>

            <img src="/images/shila-kafaKocka.jpg" className="w-full rounded-lg sm:w-3/4 md:w-1/3" alt="Shilajit Kafa Kocka" />

            <p className="p-5 font-normal bg-white rounded-lg text-xl shadow-lg md:hidden dark:bg-slate-900">
              Shilajit (Mumija, Moomiyo, Mummiyo) je prirodni supstrat koji se sastoji od slojeva organskog materijala i minerala, kompresovanih kroz stoljeća u stijenama visokih planinskih lanaca poput Himalaja. Ovaj tamni, smolasti materijal poznat je po svojoj bogatoj koncentraciji fulvinske kiseline i više od 85 minerala u jonskom obliku, što ga čini izuzetno nutritivno bogatim.
            </p>

          </div>

          {/* Items 2 */}
          <div className="flex flex-col space-y-6 justify-center items-center mx-5 mt-16 md:flex-row md:space-y-0 md:space-x-7">

            <img src="/images/planina04.jpg" className="w-full hidden rounded-lg md:block md:w-1/3" alt="Planina" />

            <div>
              <h2 className="text-4xl font-bold md:mx-10 md:my-5 lg:text-5xl">
                Benefiti Shilajita
              </h2>
              <p className="hidden p-5 font-normal bg-white rounded-lg text-xl shadow-lg md:block lg:text-2xl dark:bg-slate-900">
                Tradicionalno se cijeni u ayurvedskoj medicini zbog svojih adaptogenih svojstava, sposobnosti poboljšanja energije, vitalnosti i fizičkog oporavka, kao i podrške za mentalne funkcije. Shilajit se koristi i za unapređenje općeg zdravlja, jačanje imunološkog sistema, poboljšanje seksualnog zdravlja, te kao sredstvo za balansiranje šećera u krvi i smanjenje upalnih procesa u tijelu.
              </p>
            </div>

            <img src="/images/planina04.jpg" className="w-full rounded-lg sm:w-3/4 md:w-1/3 md:hidden" alt="Planina" />

            <p className="p-5 font-normal bg-white rounded-lg text-xl shadow-lg md:hidden dark:bg-slate-900">
              Tradicionalno se cijeni u ayurvedskoj medicini zbog svojih adaptogenih svojstava, sposobnosti poboljšanja energije, vitalnosti i fizičkog oporavka, kao i podrške za mentalne funkcije. Shilajit se koristi i za unapređenje općeg zdravlja, jačanje imunološkog sistema, poboljšanje seksualnog zdravlja, te kao sredstvo za balansiranje šećera u krvi i smanjenje upalnih procesa u tijelu.
            </p>

          </div>

          {/* Items 3 */}
          <div className="flex flex-col space-y-6 justify-center items-center mx-5 mt-16 md:flex-row md:space-y-0 md:space-x-7">

            <div>
              <h2 className="text-4xl font-bold md:mx-10 md:my-5 lg:text-5xl">
                Zašto čisti shilajit
              </h2>
              <p className="hidden p-5 font-normal bg-white rounded-lg text-xl shadow-lg md:block lg:text-2xl dark:bg-slate-900">
                Obzirom da je potentan i moćan, čisti shilajit će biti vaša prva doza za bolji i zdraviji način života. Forma smole je najčišća forma shilajita i dolazi sa visokih stijena Himalaja. Ne sadrži nikakve hemikalije niti dodatne sastojke. Ukoliko želite da znate ostale informacije o ovom nevjerovatnom proizvodu kao što je način upotrebe, ostali benefiti i cijena možete da pritisnete
                <Link to="/info" className="inline-block px-1 py-0.5 rounded-xl border-b-2 border-black duration-300 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                  ovdje
                </Link>.
              </p>
            </div>

            <img src="/images/shilaNaSuncu.jpg" className="w-full rounded-lg sm:w-3/4 md:w-1/3" alt="Shilajit Na Suncu" />

            <p className="p-5 font-normal bg-white rounded-lg text-xl shadow-lg md:hidden dark:bg-slate-900">
              Obzirom da je potentan i moćan, čisti shilajit će biti vaša prva doza za bolji i zdraviji način života. Forma smole je najčišća forma shilajita i dolazi sa visokih stijena Himalaja. Ne sadrži nikakve hemikalije niti dodatne sastojke. Ukoliko želite da znate ostale informacije o ovom nevjerovatnom proizvodu kao što je način upotrebe, ostali benefiti i cijena možete da pritisnete
              <Link to="/info" className="inline-block px-1 rounded-lg border-b-2 border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black ml-2 duration-300">
                ovdje
              </Link>.
            </p>

          </div>

        </div>
      </section>
      
    </main>




    );
};

export default Home;
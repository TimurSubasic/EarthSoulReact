import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Info from './pages/Info';
import Buy from './pages/Buy';
import ScrollToTop from './components/ScrollToTop';
import Cart from './pages/Cart';
import Confirmation from './pages/Confirmation';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();

  // Define the route paths where the Navbar and Footer should not be displayed
  const noNavFooterPaths = ['/buy/cart', '/buy/confirmation'];

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };


  return (
    <div className='flex flex-col min-h-[100vh] bg-gray-200 dark:bg-slate-800 dark:text-white duration-300 '>
      
      {/* Conditionally render Navbar */}
      {!noNavFooterPaths.includes(location.pathname) && <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />}
      
      <main className='flex-1 mt-[74px]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy/cart" element={<Cart />} />
          <Route path="/buy/confirmation" element={<Confirmation />} />
        </Routes>
      </main>

      {/* Conditionally render Footer */}
      {!noNavFooterPaths.includes(location.pathname) && <Footer />}
      
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default AppWrapper;

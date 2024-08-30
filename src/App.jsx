import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Info from './pages/Info';
import Buy from './pages/Buy';
import ScrollToTop from './components/ScrollToTop';
import Cart from './pages/Cart';

function App() {
  const location = useLocation();

  // Define the route paths where the Navbar and Footer should not be displayed
  const noNavFooterPaths = ['/buy/cart'];

  return (
    <div className='flex flex-col min-h-[100vh] bg-gray-200 dark:bg-slate-800 dark:text-white duration-300 '>
      
      {/* Conditionally render Navbar */}
      {!noNavFooterPaths.includes(location.pathname) && <Navbar />}
      
      <main className='flex-1 mt-[74px]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy/cart" element={<Cart />} />
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

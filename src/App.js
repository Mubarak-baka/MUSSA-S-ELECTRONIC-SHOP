import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Addproduct from './Component/Addproduct';
import Nopage from './Component/Nopage';
import Cart from './Component/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav';
import Footer from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav /> {/* Navigation will appear on all pages */}
      
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Addproduct" element={<Addproduct />} />
       <Route path="*" element={<Nopage />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>
 
      <Footer />
    </div>

  </BrowserRouter>
  );
}

export default App;

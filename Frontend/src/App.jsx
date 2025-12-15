import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import Hotels from './Pages/Hotels.jsx';
import Transport from './Pages/Transport.jsx';
import Tour from './Pages/Tour.jsx';
import TravelPlanner from './Pages/TravelPlanner.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Login from './Components/Login.jsx';

import ScrollToTop from './Components/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter>
      
    
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/travelplanner" element={<TravelPlanner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

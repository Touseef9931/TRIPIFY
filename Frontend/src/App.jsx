import './App.css'
import Home from './Pages/Home.jsx'
import Hotels from './Pages/Hotels.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Transport from './Pages/Transport.jsx'
import Tour from './Pages/Tour.jsx'
import TravelPlanner from './Pages/TravelPlanner.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import AuthPages from './Components/Login.jsx'
import ProfileSettings from './Components/ProfileSettings.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/transport' element={<Transport/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/travelplanner' element={<TravelPlanner/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        
        {/* Auth Routes - Same component handles both */}
        <Route path='/login' element={<AuthPages/>}/>
        <Route path='/signup' element={<AuthPages/>}/>
        
        {/* Profile Settings Route */}
        <Route path='/profile-settings' element={<ProfileSettings/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
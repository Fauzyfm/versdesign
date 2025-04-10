// import Navbar from './components/common/Navbar'
import Home from './pages/Home'
// import About from './pages/About'
// import Service from './pages/Service'
// import Packet from './pages/Packet'
import FormProject from './pages/FormProject'
// import Footer from './components/common/Footer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Impor stylesheet AOS
import {Route, Routes} from "react-router"
import NotFoundPage from './pages/NotFoundPage'
import MainPage from './pages/MainPage'
import TiniAgus from './invitation-website/Tini-Agus/TiniAgus'
import ContactPage from './pages/ContactPage'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (ms)
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/project/:name' element={<FormProject />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='*' element={<NotFoundPage />} />
;
        <Route path='/web-invitation/tini-agus/:namaTamu' element={<TiniAgus />} />
      </Routes>
      {/* <Navbar />
      <Home />
      <About />
      <Service/>
      <Packet />
      <FormProject />
      <Footer /> */}
    </>
  )
}

export default App

import About from './About'
import Navbar from '@/components/common/Navbar'
import Service from './Service'
import Packet from './Packet'
import Footer from '@/components/common/Footer'

function MainPage() {
  return (
    <>
    <Navbar />
    <About />
    <Service/>
    <Packet />
    <Footer />
    </>
  )
}

export default MainPage
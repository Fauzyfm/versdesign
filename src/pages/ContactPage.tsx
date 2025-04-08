import Footer from "@/components/common/Footer"
import Lanyard from "@/components/common/Lanyard"
import Navbar from "@/components/common/Navbar"

function ContactPage() {
  return (
    <>
    <Navbar />
    <div className="bg-slate-700 h-screen flex justify-center items-center">
        <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
    </div>
    <Footer />
    </>
  )
}

export default ContactPage
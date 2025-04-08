import Form from '@/components/common/Form';
import image1 from '../assets/images/bg-potong-1.png';
import Footer from '@/components/common/Footer';
import { useSearchParams } from 'react-router';
import Navbar from '@/components/common/Navbar';
import Contact from './Contact';

function FormProject() {
  const [searchParams] = useSearchParams()


  return (
    <>
      <Navbar />
      <div className='flex flex-wrap h-screen bg-slate-900 sm:bg-slate-700 pb-[50px] bg-center bg-cover '>
        <div className='hidden md:block sm:flex justify-self-center z-20 -mt-[30px]' >
        <Contact />
        </div>
        
        {/* Container untuk gambar mirror */}
        <div className='hidden sm:block w-[900px] h-[600px] bg-cover bg-center mt-[90px]' style={{ 
          backgroundImage: `url(${image1})`, 
          transform: 'scaleX(-1)', // Membuat gambar mirror
          marginLeft: 'auto', // Menempatkan gambar di sebelah kanan
        }} data-aos='fade-left'>

          <div className='container mx-5 mt-[50px] flex flex-col gap-7'>
            <div className='flex flex-col justify-start mt-[80px] p-5 gap-2 w-[700px] h-[400px] opacity-90'
            style={{
              transform: 'scaleX(-1)'
            }}>
              <div className='text-white text-2xl mb-[30px]'>
                <h1 data-aos='fade-right' className='font-bold flex justify-start gap-3'>Mulai Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
 
                  <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{searchParams.get("product")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>

                </h1>
              </div>

              <Form />
            </div>
          </div>

        </div>
        
        {/* Tampilan Mobile/Handphone */}
        <div className='sm:block md:hidden container mx-4 flex flex-col justify-center gap-7'>
            <div className='flex flex-col justify-center mt-[80px] p-5 gap-2 w-full h-[400px] opacity-90 '>
              <div className='text-white text-2xl mb-[30px]'>
                <h1>Mulai Project <span className='font-bold bg-gradient-to-r from-softPurple to-softblue bg-clip-text text-transparent'>{searchParams.get("product")}</span></h1>
              </div>
              <Form />
            </div>
        </div>    

      </div>
      <div className='sm:block md:hidden h-screen flex justify-center bg-slate-900 w-full'>
         <Contact />
        </div>
      <Footer></Footer>
    </>
  );
}

export default FormProject;
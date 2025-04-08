import { useEffect, useRef, useState } from "react";
// import image from '../assets/images/bg-1.jpeg';
import '../assets/styles/Home.css';
import RotatingText from "@/components/common/Rotatingtext";
import { Link } from "react-router";
import Waves from "@/components/common/Waves";


function Home() {
  const typewriterRef = useRef<HTMLParagraphElement>(null);
  const [textIndex, setTextIndex] = useState(0); // State untuk menyimpan indeks teks

  const texts = [
    "Selamat Datang di Website Kami!",
    "Kami Menyediakan Solusi Terbaik untuk Anda.",
    "Mari Mulai Petualangan Anda Bersama Kami.",
    "Terima Kasih Telah Mengunjungi Kami.",
  ];

  useEffect(() => {
    const typewriterElement = typewriterRef.current;

    const typeWriter = () => {  
      if (typewriterElement) {
        typewriterElement.textContent = texts[textIndex]; // Set teks
        typewriterElement.classList.remove("typewriter"); // Hapus class animasi
        void typewriterElement.offsetWidth; // Trigger reflow untuk restart animasi
        typewriterElement.classList.add("typewriter"); // Tambahkan kembali class animasi

        // Pindah ke teks berikutnya
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    // Jalankan animasi setiap 4 detik
    const intervalId = setInterval(typeWriter, 6000);

    // Bersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, [textIndex, texts]);


  // Button Konnsultasi
  const handleConsultationClick = () => {
    const phoneNumber = "6285155217688"; // Nomor WhatsApp tujuan
    const message = "Halo, saya ingin berkonsultasi mengenai website. di versdesign.com"; // Pesan yang ingin dikirim
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank"); // Buka WhatsApp dengan pesan yang telah disiapkan
  }
  
  return (
    <>
    <div className="relative">
      <div className="h-screen w-full bg-gradient-to-br from-softPurple to-softblue mx-auto">
        <div className="flex flex-col justify-center items-center pt-[100px] md:pt-[150px] gap-[35px] px-4 sm:px-0 relative">
        {/* bg Animation */}
        <div className="w-full h-screen top-0 absolute">
        {/* <Aurora
          colorStops={["#1A1130", "#7B52C1", "#6698D1"]}
          blend={0.0}
          amplitude={1.0}
          speed={0.5}
        /> */}
        <Waves
          lineColor="#fff"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
        </div>

          {/* Judul Paragraf 1 dan 2 */}
          <div className="flex flex-col gap-[40px] w-full max-w-[1200px] backdrop-blur-lg rounded-xl pt-[50px]" data-aos='fade-up'>
            {/* <p
              id="typewriter"
              ref={typewriterRef} // Attach ref ke elemen
              className="font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] px-[10px] sm:px-[30px] text-center opacity-80"
            >
              Jasa Pembuatan Website untuk kebutuhan Bisnis Anda
            </p> */}
            <div className="flex justify-center items-center text-[26px] sm:text-[32px] md:text-[40px] py-[10px] px-[10px] sm:px-[30px]  font-bold gap-3  ">
              <p className="md:flex md:justify-center md:items-center text-white text-4xl md:text-5xl md:gap-1  backdrop-blur-lg rounded-md px-[5px]">Ingin Membuat Website
              <span className="flex md:justify-center sm:justify-start items-center gap-1">
              <RotatingText
              texts={['Personal ?', 'Invitation ?', 'Company Profile ?', 'E-Commerce ?', 'Application ?']}
              mainClassName="px-2 sm:px-2 md:px-2 bg-slate-900 text-white overflow-hidden py-0.5 sm:py-5 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3500}
              />
              </span>
              
              </p>

            </div>
            <p className="md:text-xl sm:text-base text-white md:text-center mx-4 sm:mx-[300px] backdrop-blur-lg rounded-md px-[10px] py-[5px] flex flex-col">
            Dari landing page hingga toko online, semua kami kerjakan dengan desain eksklusif, performa optimal, dan dukungan penuh.
            </p>


          {/* Button Konsultasi dan Mulai Project */}
          <div className="flex flex-col justify-center items-center md:flex-row  gap-3 backdrop-blur-lg rounded-md mb-[50px]">
            <button onClick={handleConsultationClick} className="w-[250px] sm:w-[180px] h-[50px] flex justify-center items-center rounded-md gap-3 transition-all duration-300 cursor-pointer bg-slate-900 text-white hover:bg-transparent hover:border-2 font-medium shadow-2xl hover:scale-90 hover:border-white">
              Konsultasi
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </button>
            <Link to="/main">
            <button  className="w-[250px] sm:w-[180px] h-[50px] flex justify-center items-center gap-1 rounded-md bg-transparent border-white border-2 text-white font-medium  hover:text-slate-900 hover:bg-white transition-all duration-300 cursor-pointer shadow-2xl hover:scale-90">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>

            </button>
            </Link>
          </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
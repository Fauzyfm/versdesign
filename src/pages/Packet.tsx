import CardsPacket from "@/components/common/CardsPacket"
import {CardsDataPacket} from "@/data/CardsDataPacket"
import { useState } from "react";
// import SpotlightCard from "@/components/common/Sporlightcard";
// import RotatingText from "@/components/common/Rotatingtext";

function Packet() {

  const [activeSlide, setActiveSlide] = useState(1); // State untuk melacak slide aktif

  const totalSlides = 5; // Jumlah total slide

  // Fungsi untuk mengubah slide
  const goToSlide = (slideNumber: number) => {
    setActiveSlide(slideNumber);
  };

  // Fungsi untuk slide berikutnya
  const nextSlide = () => {
    setActiveSlide((prev) => (prev % totalSlides) + 1);
  };

  // Fungsi untuk slide sebelumnya
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <>
        <div id="packet" className="px-5 md:px-28 py-28 h-auto w-full bg-slate-900">
            <div className="text-white flex justify-center items-center text-center font-bold text-[28px] md:text-[34px] pb-[40px]">
                <h1>Paket Solusi</h1>
            </div>

            {/* Mode Desktop
            <div className="carousel w-full h-[900px] hidden md:block">
                <div id="item1" className="carousel-item w-full flex justify-center gap-5">

                </div>
                <div id="item2" className="carousel-item w-full  flex justify-center gap-5">

                </div>

            </div> */}

            {/* <div className="md:block hidden">
            </div> */}
            <div className="md:block hidden">
            <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full flex justify-center gap-5">
                                <CardsPacket 
                                    title={CardsDataPacket[0].title}
                                    price={CardsDataPacket[0].price}
                                    list={CardsDataPacket[0].list}
                                    detail={CardsDataPacket[0].detail}
                                />
                                <CardsPacket 
                                    title={CardsDataPacket[1].title}
                                    price={CardsDataPacket[1].price}
                                    list={CardsDataPacket[1].list}
                                    detail={CardsDataPacket[1].detail}
                                />
                                <CardsPacket 
                                    title={CardsDataPacket[2].title}
                                    price={CardsDataPacket[2].price}
                                    list={CardsDataPacket[2].list}
                                    detail={CardsDataPacket[2].detail}
                                />  
            </div>
            <div id="item2" className="carousel-item w-full flex justify-center gap-5">
                                <CardsPacket 
                                    title={CardsDataPacket[3].title}
                                    price={CardsDataPacket[3].price}
                                    list={CardsDataPacket[3].list}
                                    detail={CardsDataPacket[3].detail}
                                />
                                <CardsPacket 
                                    title={CardsDataPacket[4].title}
                                    price={CardsDataPacket[4].price}
                                    list={CardsDataPacket[4].list}
                                    detail={CardsDataPacket[4].detail}
                                />
            </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-5">
                <a href="#item1" className="btn btn-lg btn-soft btn-primary">1</a>
                <a href="#item2" className="btn btn-lg btn-soft btn-primary">2</a>
            </div>
            </div>


            {/* Mode Mobile */}
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <CardsPacket 
                        title={CardsDataPacket[0].title}
                        price={CardsDataPacket[0].price}
                        list={CardsDataPacket[0].list}
                        detail={CardsDataPacket[0].detail}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
                    <a href="#slide5" className="btn btn-circle ">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <CardsPacket 
                        title={CardsDataPacket[1].title}
                        price={CardsDataPacket[1].price}
                        list={CardsDataPacket[1].list}
                        detail={CardsDataPacket[1].detail}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <CardsPacket 
                        title={CardsDataPacket[2].title}
                        price={CardsDataPacket[2].price}
                        list={CardsDataPacket[2].list}
                        detail={CardsDataPacket[2].detail}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <CardsPacket 
                        title={CardsDataPacket[3].title}
                        price={CardsDataPacket[3].price}
                        list={CardsDataPacket[3].list}
                        detail={CardsDataPacket[3].detail}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <CardsPacket 
                        title={CardsDataPacket[4].title}
                        price={CardsDataPacket[4].price}
                        list={CardsDataPacket[4].list}
                        detail={CardsDataPacket[4].detail}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
            <div className="relative w-full md:hidden h-[900px]" data-aos='fade-up'>
                {/* Carousel */}
                <div className="carousel w-full" data-aos='zoom-in'>
                    {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                        id={`slide${index + 1}`}
                        key={index + 1}
                        className={`carousel-item relative w-full ${
                        activeSlide === index + 1 ? "block" : "hidden"
                        }`}
                    >
                        <CardsPacket
                        title={CardsDataPacket[index].title}
                        price={CardsDataPacket[index].price}
                        list={CardsDataPacket[index].list}
                        detail={CardsDataPacket[index].detail}
                        />
                    </div>
                    ))}
                </div>

                {/* Tombol Navigasi */}
                <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2 transform flex justify-between" data-aos='zoom-in'>
                    <button onClick={prevSlide} className="btn btn-circle -ml-10">
                    ❮
                    </button>
                    <button onClick={nextSlide} className="btn btn-circle -mr-10">
                    ❯
                    </button>
                </div>

                {/* Indikator Slide */}
                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => goToSlide(index + 1)}
                        className={`h-3 w-3 rounded-full ${
                        activeSlide === index + 1 ? "bg-blue-500" : "bg-gray-300"
                        }`}
                    ></button>
                    ))}
                </div>
            </div>

  
            
        </div>
 
    
    </>
  )
}

export default Packet

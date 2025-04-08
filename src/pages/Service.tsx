
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import {CardsData} from "../data/CardsData"
import CardsService from "../components/common/CardsService";



// swiper
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// import required modules

// splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';


function Service() {
  return ( 
    <>
        <div id="service" className="bg-slate-700 w-full h-auto py-[100px] ">
            <div className="text-white font-bold text-[34px] pt-[40px] flex justify-center items-center text-center">
                <h1>Layanan Kami</h1>
            </div>

            <div className="mt-[50px] items-center">
                {/* <ScrollArea className="w-full rounded-md">
                    <div className="flex gap-4">
                    {CardsData.map((cards) => (
                        <CardsService 
                        title={cards.title}
                        cardContent={cards.cardContent}
                        icon={cards.icon}
                        />

                    ))}
                    </div>
                    <ScrollBar orientation="horizontal"></ScrollBar>
                </ScrollArea> */}
                
            <Splide
            aria-label="Slider Autoscroll"  
            options={{
            type: 'loop',
            perPage: 3,
            focus: 'center',
            arrows: false,
            pagination: false,
            gap: '10px',
            autoScroll: {
                speed: 1,
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: true,
            },
            breakpoints: {
                640: {
                perPage: 1,
                },
                768: {
                perPage: 2,
                },
            },
            }}
            extensions={{ AutoScroll }}
        >
            {CardsData.map((cards) => (
            <SplideSlide>       
                <CardsService 
                    title={cards.title}
                    cardContent={cards.cardContent}
                    icon={cards.icon}
                />
            </SplideSlide>


            ))}

            </Splide>
            </div>
{/* 
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {CardsData.map((cards) => (
                    <SwiperSlide className="flex">
                        <CardsService 
                            title={cards.title}
                            cardContent={cards.cardContent}
                            icon={cards.icon}
                        />

                    </SwiperSlide>

                ))}
            </Swiper> */}

        </div>


    </>
  )
}

export default Service

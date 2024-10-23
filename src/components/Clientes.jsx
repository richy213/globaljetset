"use client";
import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import { clientes } from '@/app/data';
import { Typography } from '@material-tailwind/react';
import globalContext from '@/app/context/globalContext';
const Clientes = () => {
    const { handleLanguage, language } = useContext(globalContext)
    const [windowWidth, setWindowWidth] = useState(0);
    const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth)
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }

    }, []);
    return (

        <div className='w-full bg-[#ebebeb]'>
            <div className="w-full flex justify-center p-5 md:p-10 mb-5 ">
                <Typography variant='h3' color='black' className='uppercase'>{language ? "Our Clients" : "Nuestros Clientes"}</Typography>
            </div>
            <Swiper
                slidesPerView={windowWidth < 950 ? 1 : 3}
                spaceBetween={50}
                grabCursor={true}
                loop={true}
                autoplay={{ 
                    delay: 0,
                    disableOnInteraction: false,

                }}
                freeMode={true}
                speed={10000}
                
                modules={[FreeMode, Autoplay, Navigation]}
                className="swiper"
            >
                {
                    clientes?.map((item, index) => (
                        <SwiperSlide key={index} className="w-full shadow-xl transform duration-500 hover:scale-110">
                            <div className="relative group"> {/* Asegúrate de agregar la clase 'group' aquí */}
                                <Image src={item.imagen} width={500} height={500} className="w-full" alt={item.description} />
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 hover:text-[#c89919] transform duration-300 p-4 cursor-pointer">
                                    <div className="opacity-0 h-full text-white text-center flex justify-center items-center text-3xl group-hover:opacity-80 transform duration-500">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    )
}

export default Clientes

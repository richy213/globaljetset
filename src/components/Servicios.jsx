"use client";
import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { servicios } from '../app/data';
import globalContext from '@/app/context/globalContext';
import {
    Card,
    CardHeader,
    CardBody,
    Dialog,
    DialogBody,
    Typography,
} from "@material-tailwind/react";

const Servicios = ({ setOpen, open }) => {
    const [isElementVisible, setElementVisible] = useState(false);
    const [animation1, setAnimation1] = useState(false)
    const [windowWidth, setWindowWidth] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(2); 
    const { handleLanguage, language } = useContext(globalContext)
    const [browser, setBrowser] = useState(null)

    const handleBrowser = () => {
        const browser = window.navigator.userAgent;
        if (browser.includes("Mac")) {
            setBrowser("Mac")
        }
    }

    useEffect(() => {
        handleBrowser()
    }, [])

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newZoomLevel = 2 - scrollY / 1200; 
        setZoomLevel(Math.max(newZoomLevel, 1)); 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const backgroundStyle = {
        transform: `scale(${zoomLevel})`,
        transition: 'transform 0.5s ease-out',
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#cards-catalogo');

            if (element && !animation1) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setElementVisible(true);
                    setAnimation1(true)
                } else {
                    setElementVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animation1]);
    return (
        <>
            <div className='block w-full'>

                <div className="md:block lg:block sm:blok" id='cards-catalogo'>
                    {
                        <div className={`w-full h-[80vh] bg-cover bg-center 
                        bg-no-repeat ${browser == "Mac" ? "" : " bg-fixed"} 
                        relative bg-[url('/fondos/aviones.png')]`}>
                            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                            <div className="w-full h-[80vh] absolute flex justify-center items-center">
                                <Typography variant='h3' color='white' 
                                className='uppercase'>{language ? "Our Services" : "Nuestros Servicios"}</Typography>
                            </div>
                        </div>
                    }

                    <div className="mt-[-12%] gap-10 p-10 grid md:grid-cols-3">
                        {
                            servicios?.map((item, index) => (
                                <div key={index} className={`mt-10 sm:mt-10 md:mt-0 lg:mt-0 w-[100%] 
                                shadow-xl bg-cover bg-center
                                transform duration-500 hover:-translate-y-2 group z-10 ${isElementVisible ? item.clase : ""}`}
                                    style={
                                        { backgroundImage: `url(${item.imagen})` }
                                    }>
                                    <div className="z-10 h-full text-white bg-black bg-opacity-0 px-10 flex 
                                    flex-col pt-60 hover:bg-opacity-50 transform duration-300">
                                        <div className="text-3xl mb-5 ml-0 text-left transform translate-y-20 
                                        group-hover:translate-y-0 duration-500">
                                            <Typography variant="h4"
                                                className={`mb-2 uppercase`}>
                                                {language ? item.name2 : item.name}</Typography>
                                        </div>

                                        <div className={`opacity-0 text-white text-2xl text-left group-hover:opacity-80 transform translate-y-20 group-hover:translate-y-0 duration-500 h-[25vh]`}>
                                            <Typography variant='h6' color='white'>{language ? item.description2 : item.description}</Typography>
                                        </div>
                                    </div>
                                </div>
                            ))
                        } </div>
                </div>


            </div>
            <div className="yates" id='yates'></div>
        </>
    )
}

export default Servicios
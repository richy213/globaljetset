"use client";
import React, { useState, useEffect, useContext } from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import globalContext from '@/app/context/globalContext';
import Link from 'next/link';
import Image from 'next/image';
import Video from './Video';
const Yates = () => {
    const [browser, setBrowser] = useState(null)
    const { handleOpenCoization } = useContext(globalContext)
    const [windowWidth, setWindowWidth] = useState(0);
    const [rutaVideo, setRutaVideo] = useState("/videos/yate.mp4")
    const [poster, setPoster] = useState("/fondos/poster_aguila.png")
    const handleBrowser = () => {
        const browser = window.navigator.userAgent;
        if (browser.includes("Mac")) {
            setBrowser("Mac")
        }
    }

    useEffect(() => {
        handleBrowser()
    }, [])

    const { language } = useContext(globalContext)
    
    const scrollToElement = (elementId) => {
        const target = document.getElementById(elementId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        const handleResize = () => {
            const newWindowWidth = window.innerWidth;
            setWindowWidth(newWindowWidth);
            if (newWindowWidth < 700) {
                setRutaVideo("/videos/tiktok_yate.mp4")
                setPoster("/fondos/postertiktok3.png")
            } else {
                setRutaVideo("/videos/yate.mp4")
                setPoster("/fondos/posteryate.png")
            }
            console.log(newWindowWidth);
        };

        if (typeof window !== 'undefined') {
            handleResize();

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <>
            <div className="relative">
                <div className="w-full">
                    <video className="w-full aguila1" autoPlay loop muted poster={"/fondos/posteryate.jpg"}>
                        <source src="/videos/yate.mp4" type="video/mp4" />
                    </video>

                    <video className="w-full aguila2" autoPlay loop muted poster={"/fondos/postertiktok2.jpg"}>
                        <source src="/videos/tiktok_yate.mp4" type="video/mp4" />
                    </video>
                </div>



                <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`}></div>




                <div className="absolute top-[25%] left-10 z-10">

                    <div className={`card-up text-white sm:text-xl md:text-4xl lg:text-4xl md:pl-0 uppercase md:leading-normal lg:leading-normal
                     text-left md:text-left lg:text-left ${windowWidth < 601 ? "w-[90%]" : "w-[50%]"} md:w-[50%] lg:w-[50%]`}>
                        <Typography variant={windowWidth < 950 ? "small" : "h6"}>{language ? "Experience unforgettable moments aboard our exclusive yachts." : "Vive experiencias inolvidables a bordo de nuestros exclusivos yates."}</Typography></div>

                    <div className={`card-up2 text-white sm:text-xl md:text-4xl lg:text-4xl md:pl-0 uppercase md:leading-normal lg:leading-normal 
                    text-left md:text-left lg:text-left ${windowWidth < 601 ? "w-[90%]" : "w-[50%]"} md:w-[50%] lg:w-[50%] mt-5 sm:mt-5 md:mt-16 lg:mt-16 mb-8`}>
                        <Typography variant={windowWidth < 950 ? "small" : "h6"}>{language ? "Our crews are perfectly qualified to provide you with top-tier service." : "Nuestras tripulaciones estan perfectamente calificadas para ortorgarte un servicio de primera."}</Typography></div>



                    <Button size={windowWidth < 950 ? "sm" : "lg"}
                        className='card-up3 bg-[] text-[#d1af77] border border-[#d1af77]'
                        onClick={() => { scrollToElement("carrusel") }}>
                        {language ? "More Info" : "Conocer Más"}
                    </Button>

                </div>

                <div className="" id='servicios'></div>

            </div>

            <div className={`w-full relative h-[100vh] bg-cover bg-center bg-no-repeat ${browser == "Mac" ? "" : "bg-fixed"} bg-[url('/yates/yate.jpg')]`}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 grid h-full w-full place-items-center" id="carrusel">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography variant="h3" color="white" className="mb-4 text-2xl md:text-3xl lg:text-4xl font-whisper uppercase">
                            {language ? "Sail through the Mexican Caribbean." : "Navega en el caribe mexicano."}
                        </Typography>
                        <Typography variant="lead" color="white" className="mb-12 opacity-80 font-whisper">
                            {language ? "We offer the most exclusive yachts, where you can enjoy unforgettable moments with family and friends, complemented by the finest service and first-class attention on board." : "Contamos con los yates más exclusivos, en los que podrás disfrutar en familia y con tus amigos, con el mejor servicio y atención de primera a bordo."}

                        </Typography>
                        <div className="flex justify-center gap-2">

                            <Link href={"https://wa.link/ixcnyg"} target='_blank'
                                className='text-sm font-normal text-[#d1af77] uppercase p-4 no-focus-border clase mb-2'>
                                {language ? "Get a Quote" : "Cotizar"} </Link>
                        </div>
                    </div>
                </div>


            </div>
            <div className={`w-full relative h-[100vh] bg-cover bg-center bg-no-repeat ${browser == "Mac" ? "" : "bg-fixed"} bg-[url('/yates/yate1.png')]`}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography variant="h3" color="white" className="mb-4 text-2xl md:text-3xl lg:text-4xl uppercase">
                            {language ? "Exclusivity" : "Exclusividad"}
                        </Typography>
                        <Typography variant="lead" color="white" className="mb-12 opacity-80">
                            {language ? "VIP access to top-tier restaurants and exclusive events." : "Acceso VIP a los mejores restaurantes, eventos exclusivos."}
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={`w-full relative h-[100vh] bg-cover bg-center bg-no-repeat ${browser == "Mac" ? "" : "bg-fixed"} bg-[url('/yates/yate3.jpg')]`}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography variant="h3" color="white" className="mb-4 text-2xl md:text-3xl lg:text-4xl uppercase">
                            {language ? "Comfort and Luxury" : "Confort y Lujo"}
                        </Typography >
                        <Typography variant="lead" color="white" className="mb-12 opacity-80">
                            {language ? "We have the most exclusive fleet of yachts, with the most skilled crew ready to serve you and your guests, ensuring that your experience on board is amazing." : "Contamos con la flota de yates más exclusivos, con la tripulación más capacitada para atenderte a ti y a tus invitados  y hacer que tu experiencia a bordo sea increíble."}
                        </Typography>
                        <div className="flex justify-center gap-2">

                            <Link href={"https://wa.link/ixcnyg"} target='_blank'
                                className='text-sm font-normal text-[#d1af77] uppercase p-4 no-focus-border clase mb-2'>
                                {language ? "Contact Us" : "Contactanos"} </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full relative h-[100vh] bg-cover bg-center bg-no-repeat ${browser == "Mac" ? "" : "bg-fixed"} bg-[url('/yates/yate2.jpg')]`}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography variant="h4" color="white" className="mb-4 text-2xl md:text-3xl lg:text-4xl uppercase">
                            {language ? "Space" : "Espacio"}
                        </Typography>
                        <Typography variant="lead" color="white" className="mb-12 opacity-80">
                            {language ? "Explore a new world aboard our exclusive yachts, where space and first-class service make your journey unforgettable." : "Explora un mundo nuevo a bordo de nuestros exclusivos yates, donde el espacio y servicio de primera clase será inolvidable."}
                        </Typography>

                    </div>
                </div>
            </div>

        </>


    )
}

export default Yates

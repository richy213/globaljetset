"use client";
import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { Typography } from '@material-tailwind/react';
import globalContext from '@/app/context/globalContext';
import { equipo } from '@/app/data';
const Nosotros = () => {

    const [isElementVisible, setElementVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(null);
    const [animation1, setAnimation1] = useState(false)
    const [zoomLevel, setZoomLevel] = useState(1);
    const { language } = useContext(globalContext)
    
    const handleScrollZoom = () => {
        const scrollY = window.scrollY;
        const newZoomLevel = 1 - scrollY / 1200; 
        setZoomLevel(newZoomLevel);
    };

    const backgroundStyle = {
        transform: `scale(${zoomLevel})`,
        transition: 'transform 0.5s ease-out', 
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScrollZoom);
        return () => window.removeEventListener('scroll', handleScrollZoom);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#nosotrostransition');

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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            // Limpieza al desmontar el componente
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    return (
        // #bd9973
        <div className='w-full sinscroll'>

            <div className="w-full h-[100vh] bg-cover bg-black bg-opacity-50 bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/fondos/poster_aguila.png')", ...backgroundStyle }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                <div className="w-full h-full flex justify-center md:justify-end items-center text-left absolute">
                    <div className="md:w-[50%] p-10 card-up">
                      
                        <Typography variant='h6' color='white' className='uppercase text-center tex-sm'>{language ? "We draw inspiration from the qualities of this majestic bird and strive to reach new heights in our achievements." : "Nos inspiramos en las cualidades de esta majestuosa ave y nos esforzamos por alcanzar nuevas alturas en nuestros logros."}</Typography>

                        <Typography variant='h6' color='white' className='uppercase mt-16 text-center'>{language ? "Let's continue flying together, as a strong and united team, soaring towards success and overcoming any challenge that comes our way." : "Sigamos volando juntos, como un equipo fuerte y unido, elevándonos hacia el éxito y superando cualquier desafío que se nos presente en el camino."}</Typography>
                    </div>
                </div>
            </div>

            <div className="w-full sm:block h-full md:flex md:justify-center p-10" id='nosotrostransition'>

                <div className="md:w-[100%] lg:w-[100%] p-10 flex justify-center items-center">
                    <div className="w-full">
                        <Typography variant='h4' className={`md:leading-normal lg:leading-normal uppercase
                         ${isElementVisible ? "card-up" : ""}`}>{language ? "Discover the favorite company of the Mexican Jet Set" : "Conoce la empresa favorita del Jet Set Mexicano"}</Typography>

                        <Typography variant='h5' className={`mt-10 ${isElementVisible ? "card-up2" : ""}`}>{language ? "We embody luxury, comfort, safety, and exclusivity for all our clients. We are your provider with over 32 aircraft available for sale and lease." : "Representamos el lujo, confort, seguridad y exclusividad para todos nuestros clientes. Somos tu proveedor con más de 32 aviones en venta y renta."}</Typography>

                        <Typography variant='h5' className={`mt-10 ${isElementVisible ? "card-up3" : ""}`}>
                            {language ? "We provide unique and unforgettable experiences while ensuring the safety and privacy of our clients." : " Proporcionamos experiencias únicas e inolvidables garantizando la seguridad, confort  y privacidad de nuestros clientes."}
                        </Typography>
                    </div>
                </div>

                <div className="w-full md:flex">

                    <div className={`w-full h-[100vh] md:w-[80%] lg:w-[80%] rounded-xl shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 z-10 group  ${isElementVisible ? "card-up" : ""}`}
                        style={
                            { backgroundImage: "url('/ceo/socio-2.jpg')" }
                        }>
                        <div className="text-white bg-black bg-opacity-0 h-full px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-50 hover:text-[#c89919] transform duration-300">
                            <h1 className="text-left text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                William Da Silva
                            </h1>
                            <div className="w-16 h-1 bg-[#c89919] rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                            <div className="opacity-0 text-white text-left text-2xl group-hover:opacity-80 transform duration-500 h-[10vh]">
                                FOUNDER / CEO
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full p-10 sinscroll">
                <div className="w-full">
                    <Typography variant='h3' className='text-center uppercase'>{language ? "Staff" : "Nuestro Equipo"}</Typography>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:p-10 sinscroll">
                    {
                        equipo?.map((item, index) => (
                            <div key={index} className={`sinscroll w-[100%] mt-10 
                            rounded-xl shadow-xl bg-cover bg-no-repeat bg-center h-[100vh] md:h-[70vh] 
                            transform duration-500 hover:-translate-y-2 z-10 group  ${isElementVisible ? "card-up" : ""}`}
                                style={
                                    { backgroundImage: `url(${item.imagen})` }
                                }>
                                <div className="text-white h-[100vh] md:h-[70vh] bg-black bg-opacity-0 px-10 flex flex-wrap flex-col hover:bg-opacity-50 hover:text-[#c89919]
                             transform duration-300">
                                    <h1 className="mt-32 text-left text-2xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                        {item.name}
                                    </h1>
                                    <div className="w-16 h-1 bg-[#c89919] rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>

                                    <div className="opacity-0 text-white text-left text-xl group-hover:opacity-80 transform duration-500 h-[10vh]">
                                        {language ? item.description2 : item.description}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Nosotros

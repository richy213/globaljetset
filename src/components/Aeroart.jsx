"use client";
import { Typography } from '@material-tailwind/react';
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import globalContext from '@/app/context/globalContext';
const Aeroart = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isElementVisible2, setElementVisible2] = useState(false);
    const [animation2, setAnimation2] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    const { handleLanguage, language } = useContext(globalContext)

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


    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newZoomLevel = 0 + scrollY / 1800;
        setZoomLevel(newZoomLevel);
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
        const handleScroll = () => {
            const element = document.querySelector('#logos-marcas');

            if (element && !animation2) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setElementVisible2(true);
                    setAnimation2(true)
                } else {
                    setElementVisible2(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animation2]);



    return (
        <>
            {
                windowWidth < 721 ? <div className="w-full flex justify-center"><Image src={"/fondos/03.jpg"} width={1000} height={1000} alt='avion' className='w-full' ></Image></div> : <div className="w-full overflow-x-hidden overflow-y-hidden">
                    <div className='w-full h-[100vh] bg-black bg-opacity-50 bg-cover bg-center bg-no-repeat bg-fixed' style={windowWidth < 950 ? { backgroundImage: 'url("/fondos/03.jpg")' } : { backgroundImage: 'url("/fondos/03.jpg")', ...backgroundStyle }}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                        <div className="w-full h-[100vh] border relative">
                            <Typography 
                            variant={windowWidth < 950 ? "h6" : "h6"} 
                            color='white' 
                            className='text-center text-xl uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{language ? "We collaborate and have commercial partnerships with the finest brands and companies." : "Colaboramos y tenemos alianzas comerciales con las mejores marcas y empresas"}</Typography>
                            <Typography variant={"h6"} color='white' className={`text-center text-lg uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24`}>{language ? "We are creating history in the aviation sector, both within and outside of México" : "Creamos historia en el sector aeronáutico dentro y fuera de México."}</Typography>
                        </div>


                    </div>

                </div>
            }


            <div className="w-full bg-[#ebebeb] p-20">

                {windowWidth < 950 ? <div className="text-center mb-10 border md:p-10">
                    <Typography variant={windowWidth < 950 ? "h6" : "h5"} className={`text-center uppercase ${isElementVisible2 ? "card-push" : ""}`}>{language ? "We collaborate and have commercial partnerships with the finest brands and companies." : "Colaboramos y tenemos alianzas comerciales con las mejores marcas y empresas"}</Typography>
                    <Typography variant={"h6"} className={`text-center uppercase mt-20 ${isElementVisible2 ? "card-push2" : ""}`}>{language ? "We are creating history in the aviation sector, both within and outside of México" : "Creamos historia en el sector aeronáutico dentro y fuera de México."}</Typography>
                </div> : null}

                <div className="w-full grid md:grid-cols-3 gap-5 justify-center items-center" id='logos-marcas'>
                    <div className={`${isElementVisible2 ? "card-push" : ""}`}>
                        <Image src="/managment/aeroart.png" width={500} height={500} alt='aeroart'></Image>
                    </div>
                   
                    <div className={`w-full flex justify-center text-center ${isElementVisible2 ? "card-push4" : ""}`}>
                        <Image src="/managment/festival.png" width={400} height={400} alt='aeroart'></Image>
                    </div>
                    <div className={`w-full md:p-10 ${isElementVisible2 ? "card-push5" : ""}`}>
                        <Image src={"/logos/club51.png"} width={windowWidth < 400 ? 100 : 200} height={200} alt='club51' className='mx-auto'></Image>
                    </div>
                    
                </div>
                <div className={`w-full flex justify-center ${windowWidth < 720 ? "mt-10" : ""} ${isElementVisible2 ? "card-push6" : ""}`}>
                        <Image src={"/logos/logo_forbes.svg"} width={windowWidth < 980 ? 250 : 300} height={windowWidth < 980 ? 200 : 300} alt='forbes'></Image>
                    </div>
            </div>





        </>

    );
};

export default Aeroart;

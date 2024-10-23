"use client";
import React, { useEffect, useState, useContext } from 'react'
import globalContext from '@/app/context/globalContext';
import {
    Typography,
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingLuggage, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { listCategories } from '@/app/data';
import Link from 'next/link';

const Aviones = ({ handleOpen, open, valor, aviones }) => {
    const [animation1, setAnimation1] = useState(false)
    const [isElementVisible, setElementVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(null);
    const [browser, setBrowser] = useState(null)
    const [avion, setAvion] = useState(null)
    const [flota, setFlota] = useState(null)
    const { handleOpenCoization, handleLanguage, language } = useContext(globalContext)
    const [activeLink, setActiveLink] = useState(null)

    const scrollToElement = (elementId) => {
        const target = document.getElementById(elementId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            const element = document.querySelector('#aviones');
            if (element && !animation1) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation1(true)
                    setElementVisible(true);
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
    const handleBrowser = () => {
        const browser = window.navigator.userAgent;
        if (browser.includes("Mac")) {
            setBrowser("Mac")
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            handleBrowser()
        }

    }, [])

    useEffect(() => {
        if (aviones && valor == "venta") {
            const filterJet = aviones.filter((item => item.categorie == "Cessna"))
            setFlota(filterJet)
        }
        if (valor == "renta") {
            setFlota(aviones)
        }
    }, [])

    // Abrir cerrar Modal 
    const handleModal = (value) => {
        const avionesFiltrados = aviones.filter(avion => avion.id === value);
        setAvion(avionesFiltrados)
        handleOpen()
    }
    const handleFilter = (title) => {
        const filterJet = aviones.filter((item => item.categorie == title))
        setFlota(filterJet)
        setActiveLink(title)
    }
    return (
        <>
            <div className="w-full">
                <div className="relative">

                    {
                        valor == "renta" ? <div className="">
                            <video className="w-full aguila1" autoPlay loop muted poster={"/fondos/poster_turbina.jpg"}>
                                <source src="/videos/turbina.mp4" type="video/mp4" />
                            </video>

                            <video className="w-full aguila2" autoPlay loop muted poster={"/fondos/postertiktokturbina.png"}>
                                <source src="/videos/tiktok_turbina.mp4" type="video/mp4" />
                            </video>
                        </div> : <div className="">
                            <video className="w-full aguila1" autoPlay loop muted poster={"/fondos/posterprimero.png"}>
                                <source src="/videos/video.mp4" type="video/mp4" />
                            </video>

                            <video className="w-full aguila2" autoPlay loop muted poster={"/fondos/postertiktok3.jpg"}>
                                <source src="/videos/tiktok_video.mp4" type="video/mp4" />
                            </video>
                        </div>

                    }

                    <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`}></div>

                    <div className="absolute top-[25%] left-10 z-10">

                        <div className={`sm:text-xl md:text-4xl lg:text-4xl md:pl-0 uppercase md:leading-normal lg:leading-normal
                                text-left md:text-left lg:text-left w-[90%] md:w-[80%] lg:w-[80%]`}>
                            {
                                valor == "venta" ? 
                                <Typography variant={windowWidth < 950 ? "small" : "h6"} color='white' className='md:w-[50%]'>
                                    {language ? "We take pride in offering unparalleled service and experience in the acquisition of private aircraft." 
                                    : "Nos enorgullece ofrecer un servicio y una experiencia sin igual en la adquisición de aviones privados."}
                                </Typography> : 
                                <Typography variant={windowWidth < 950 ? "small" : "h6"} color='white'>
                                    {language ? "Experience the power of personalized flight with our aircraft" :
                                        "Experimenta el poder del vuelo personalizado con nuestras aeronaves."}
                                </Typography>
                            }
                        </div>

                        <div className={`sm:text-xl md:text-4xl lg:text-4xl md:pl-0 uppercase md:leading-normal lg:leading-normal 
                                text-left md:text-left lg:text-left w-[90%] md:w-[90%] lg:w-[90%] mt-5 sm:mt-5  md:mt-16 lg:mt-10`}>

                            {
                                valor == "venta" ?
                                    <Typography variant={windowWidth < 950 ? "small" : "h6"} color='white' className='md:w-[50%]'>
                                        {language ? "We are your trusted partner in the search for your private aircraft. Begin now the exciting journey towards acquiring your own aircraft."
                                            : "Somos tu socio de confianza en la búsqueda de tu avión privado. Comienza ahora el emocionante viaje hacia la adquisición de tu propia aeronave."}
                                    </Typography>
                                    : <Typography variant={windowWidth < 950 ? "small" : "h6"} color='white'>
                                        {language ? "FOR BOTH DOMESTIC AND INTERNATIONAL TRAVEL" : "Viajes nacionales e internacionales."}</Typography>
                            }

                        </div>

                        <Button size={windowWidth < 950 ? "sm" : "lg"} className='card-up2 bg-[] text-[#d1af77] border border-[#d1af77] mt-5 md:mt-16 lg:mt-16 ' onClick={() => { scrollToElement("aviones") }}>
                            {
                                valor == "renta" ? (language ? "Our Fleet" : "Nuestra Flota") : (language ? "Aircraft" : "Aeronaves")
                            }
                        </Button>
                    </div>

                    <div className="" id='aviones'></div>

                </div>

            </div>

            <div className={`w-full bg-[url('/fondos/fondo1.png')] bg-black bg-opacity-50 bg-cover
             bg-no-repeat bg-center ${browser == "Mac" ? "" : ""}`}>
                <div className="w-full ">
                    <Image src="/fondos/nubes.png" width={100} height={100} className='w-[70%]' alt='nubes'></Image>

                    <div className="w-full flex justify-center mb-10">
                        {
                            valor == "renta" ? <Typography variant='h3' color='white'
                                className='uppercase'>{language ? "Our Fleet" : "Nuestra Flota"}
                            </Typography> :
                                <Typography variant='h3' color='white' className='uppercase'>
                                    {language ? "Our Aircraft" : "Nuestras Aeronaves"}</Typography>
                        }

                    </div>

                    {
                        valor == "venta" ? <div className="w-full p-5 grid md:grid-cols-6">
                            {
                                listCategories?.map((item, index) => (
                                    <div key={index} className="mb-5 md:mb-0">
                                        <Typography
                                            variant='paragraph'
                                            color='white'
                                            className={`text-center uppercase hover:border-b border-[#bd9973] cursor-pointer ${item.title == activeLink ? "border-b border-[#bd9973]" : ""}`}
                                            onClick={() => handleFilter(item.title)}>
                                            {item.title}
                                        </Typography>
                                    </div>
                                ))
                            }
                        </div> : null
                    }

                </div>
                <div className="w-full flex justify-center items-center p-10">
                    <div className="md:w-[80%] lg:w-[80%] grid md:grid-cols-3 lg:grid-cols-3 gap-5" id='aviones'>
                        {
                            flota?.map((item, index) => (
                                <div key={index} className={`w-full shadow-xl bg-black bg-opacity-60 p-10 cursor-pointer ${item.clase}`} onClick={() => handleModal(item.id)}>
                                    <div className="w-full">
                                        {
                                            windowWidth < 700 ? <div className="w-full flex justify-center p-10">
                                                <Typography variant='h4' color='white' className='uppercase'>{item.title}</Typography>
                                            </div> : null
                                        }

                                        <div className="w-full flex justify-center mb-10 sm:mt-10 xs:mt-10">
                                            <Image src={item.imagen} alt='avion' width={500} height={500}></Image>
                                        </div>
                                        {
                                            windowWidth < 700 ? null : <div className="w-full flex justify-center">
                                                <Typography variant='h6' color='white' className='uppercase'>{item.title}</Typography>
                                            </div>
                                        }

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Dialog open={open} handler={handleOpen} size='xl' className='bg-[] border-none'>
                    {
                        avion?.map((item, index) => (
                            <>
                                <DialogBody key={index} className='shadow-2xl sinpadin'>
                                    <div className="w-full md:flex lg:flex ">

                                        <div className="w-full">
                                            <div className="w-full h-full flex items-center p-5">
                                                <Image src={item.imagen} width={1000} height={500} alt='avion'></Image>
                                            </div>
                                        </div>

                                        <div className="w-full md:border-l pl-10">
                                            {
                                                windowWidth < 700 ? null : <div className="w-full flex justify-center p-5">
                                                    <Typography variant='h5' color='white' className='uppercase'>{item.title}</Typography>
                                                </div>
                                            }

                                            <div className="w-full flex">
                                                <div className="flex items-center pr-10">
                                                    <FontAwesomeIcon icon={faPlane} size='2x' color='white'></FontAwesomeIcon>
                                                </div>
                                                <div className="w-full">
                                                    <Typography variant='h6' color='white' className='mt-4 mb-2'>{language ? "AIRCRAFT TYPE" : "TIPO DE AERONAVE"}​</Typography>
                                                    <ul className='w-full'>
                                                        {
                                                            item.variantes.map((target, element) => (
                                                                <li key={element} className='text-white'>{target}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>

                                            </div>

                                            <div className="w-full flex">
                                                <div className="flex items-center pr-10">
                                                    <FontAwesomeIcon icon={faPlaneDeparture} size='xl' color='white'></FontAwesomeIcon>
                                                </div>
                                                <div className="w-full">
                                                    <Typography variant='h6' color='white' className='uppercase mt-4 mb-2'>
                                                        {language ? "Flight Range" : "Alcance de Vuelo"}
                                                    </Typography>
                                                    <Typography variant='paragraph' color='white'>{item.alcance}</Typography>
                                                </div>
                                            </div>

                                            <div className="w-full flex">
                                                <div className="flex items-center pr-10">
                                                    <FontAwesomeIcon icon={faPersonWalkingLuggage} size='xl' color='white'></FontAwesomeIcon>
                                                </div>
                                                <div className="w-full">
                                                    <Typography variant='h6' color='white' className='uppercase mt-4 mb-2'>{language ? "Passengers" : "Pasajeros"}</Typography>

                                                    <Typography variant='paragraph' color='white'>{item.pasajeros}</Typography>
                                                </div>
                                            </div>
                                            <div className="w-full p-5 md:p-0 lg:p-0 md:mb-2 sm:mb-2 flex justify-center mt-5">
                                                {
                                                    valor == "venta" ? <Link href={"https://wa.link/zishfv"} target='_blank'
                                                        className='w-full text-center text-sm font-normal text-[#d1af77] uppercase p-2 no-focus-border clase mb-2'>
                                                        {language ? "Get a Quote" : "Cotizar"}</Link> : <Button
                                                            className="bg-[] border border-[#d1af77] text-[#d1af77] conpading w-full"
                                                            size="lg" onClick={handleOpenCoization}>{language ? "Get a Quote" : "Cotizar"}</Button>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </DialogBody>
                            </>
                        ))
                    }

                </Dialog>



            </div>

        </>
    )
}

export default Aviones

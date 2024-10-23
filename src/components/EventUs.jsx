"use client";
import { Typography } from '@material-tailwind/react'
import React, { useState, useEffect, useContext } from 'react'
import VideoPlayer from './VideoPlayer';
import Image from 'next/image';
import globalContext from '@/app/context/globalContext';
const EventUs = () => {
  const [isElementVisible, setElementVisible] = useState(false);
  const [animation1, setAnimation1] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const {language} = useContext(globalContext);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newZoomLevel = 1 - scrollY / 1200; 
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


  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('#videos-eventos');

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
      <div className="w-full h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed relative" 
      style={{ backgroundImage: 'url("/fondos/evento.png")', ...backgroundStyle }}>
        <div className="w-full h-[80vh] text-center absolute flex justify-center items-center">
          <Typography variant='h4' color='white'
          className='uppercase w-[90%] absolute top-[40%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{language ? 
          "Global Jet Set Experience." : "Experiencia Global Jet Set"}</Typography>
          <Typography variant='h5' color='white' 
          className='w-[90%] uppercase absolute text-center mt-24'>{language ? 
          "We are not just a company, we are a lifestyle." : "No solo somos una empresa, somos un estilo de vida."}</Typography>
        </div>
      </div>

      <div className="w-full ">
        <div className="w-full md:flex justify-center items-center">
          <div className="w-full p-10">
            <Typography variant='h5' color='gray' className={`card-up`}>
              {language ? "Recently, AEROART 2023 was held at the Felipe Angeles International Airport, where artistic experiences were showcased." : "Recientemente, se llevó a cabo AEROART 2023 en el aeropuerto internacional Felipe Ángeles, donde se desplegaron experiencias artísticas. "}</Typography>

              {
                windowWidth < 950 ? <Image src="/eventos/event02.jpg" alt="evento" className="derecha mt-10" width={1000} height={1000}></Image> : null
              }
            <Typography variant='h5' color='gray' className={"mt-16 card-up2"}>{language ? "In addition to the aerial spectacle and art exhibitions, our goal was to host an exclusive runway event, showcasing 24 aircraft for sale, thereby bolstering the aviation sector in Mexico." : "El objetivo, además del show aéreo y las muestras de arte, fue hacer un showroom exclusivo para comercializar aeronaves y fomentar la industria aérea en México."}</Typography>
          </div>
          {
            windowWidth < 950 ? null : <div className="w-full p-10">
              <Image src="/eventos/event02.jpg" alt="evento" className="derecha" width={1000} height={1000}></Image>
            </div>
          }
        </div>


      </div>

      <div className="w-full md:grid md:grid-cols-3 md:gap-5 overflow-hidden" id='videos-eventos'>
        <div className={isElementVisible ? "card-up3" : ""}><VideoPlayer src={"/videos/aero.mp4"} poster={"/fondos/poster3.png"}></VideoPlayer></div>
        <div className={isElementVisible ? "card-up2" : ""}><VideoPlayer src={"/videos/fbo.mp4"} poster={"/fondos/poster.png"}></VideoPlayer></div>
        <div className={isElementVisible ? "card-up" : ""}><VideoPlayer src={"/videos/even.mp4"} poster={"/fondos/poster1.png"} ></VideoPlayer></div>
      </div>
    </>
  )
}

export default EventUs

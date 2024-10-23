"use client";
import { Typography, Button } from '@material-tailwind/react';
import React, { useState, useEffect, useContext } from 'react'
import globalContext from '@/app/context/globalContext';
import Video from './Video';
const Inicio = () => {
    const [browser, setBrowser] = useState(null)
    const { handleLanguage, language } = useContext(globalContext)
    const [windowWidth, setWindowWidth] = useState(0);
    const [rutaVideo, setRutaVideo] = useState("/videos/aguila_01.mp4")
    const [poster, setPoster] = useState("/fondos/poster_aguila.png")
    
    const handleBrowser = () => {
        const browser = window.navigator.userAgent;
        console.log(browser);
        if (browser.includes("Mac")) {
            setBrowser("Mac")
        }
    }

    useEffect(() => {
        handleBrowser()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            const newWindowWidth = window.innerWidth;
            setWindowWidth(newWindowWidth);
            if (newWindowWidth < 700) {
                setRutaVideo("/videos/tiktok_aguila.mp4")
                setPoster("/fondos/postertiktok1.png")
            } else {
                setRutaVideo("/videos/aguila_01.mp4")
                setPoster("/fondos/poster_aguila.png")
            }
            console.log(newWindowWidth);
        };

        if (typeof window !== 'undefined') {
            handleResize();

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, [])


    useEffect(() => {
        const video = document.getElementById('myVideo')

        video.addEventListener('loadeddata', () => {
            const video = document.getElementById('myVideo')
            const playPromise = video.play()
            console.log(playPromise);

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                   
                }).catch(error => {
                    video.addEventListener('click', function () {
                        if (video.paused) {
                            video.play()
                        } else {
                            video.play()
                        }
                    })
                })
            }
        })
    }, [])

    return (
        <div className="w-full">
            <div className="relative">

                {
                    <div className="">
                        <video id='myVideo' className="w-full aguila1" autoPlay loop muted poster={"/fondos/poster_aguila.png"}>
                            <source src="/videos/aguila_01.mp4" type="video/mp4" />
                        </video>

                        <video id='myVideo' className="w-full aguila2" autoPlay loop muted poster={"/fondos/postertiktok1.jpg"}>
                            <source src="/videos/tiktok_aguila.mp4" type="video/mp4" />
                        </video>
                    </div>
                }


                <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 animatedFadeIn`}></div>




                <div className="w-full top-[45%] md:top-[65%] left-0 h-full absolute cursor-pointer z-50">
                    <div className="w-full flex justify-center items-center gap-5 md:gap-10">

                        <div className="text-center mb-4 flex justify-center">
                            <Typography variant='h5' className='text-white hover:text-[#bd9973] uppercase'>{language ? "United States" : "Estados Unidos"}</Typography>
                        </div>
                        <div className="text-center mb-4 flex justify-center">
                            <Typography variant='h5' className='text-white hover:text-[#bd9973] uppercase'>{language ? "México" : "México"} </Typography>
                        </div>
                        <div className="text-center mb-4 flex justify-center">
                            <Typography variant='h5' className='text-white hover:text-[#bd9973] uppercase'>{language ? "Spain" : "España"}</Typography>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Inicio

"use client";
import React, {useContext} from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import globalContext from '@/app/context/globalContext';
import { Typography } from '@material-tailwind/react';
const Footer = () => {
    const {language} = useContext(globalContext);
    return (
        <div>
            <footer className="p-5 bg-[#f6f4f2] text-gray-700 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left bg-[#F4F4F4]">

                <div className="flex items-center justify-center md:justify-between lg:justify-between">

                    <div className="w-full flex justify-end gap-5 mt-10 mr-10">
                        <div className="">
                            <Link href={"https://www.facebook.com/GlobalJetSetMexico/"} target='_blank'>
                                <FontAwesomeIcon icon={faFacebook} size='2xl' color='#d1af77'></FontAwesomeIcon>
                            </Link>
                        </div>
                        <div className="">
                            <Link href={"https://www.instagram.com/globaljetset.mx"} target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} size='2xl' color='#d1af77'></FontAwesomeIcon>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="mx-auto mt-10 text-center md:text-left">
                    <div className="grid-1 grid gap-4 md:grid-cols-3 lg:grid-cols-3 ">

                        <div className="mx-auto text-center">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase">
                                Global Jet Set
                            </h6>
                            <p>
                                {language ? "Your exclusivity deserves the extraordinary. Thank you for choosing Global Jet Set for your select jet and yacht experiences." : "Tu exclusividad merece lo extraordinario. Gracias por elegir Global Jet Set para tus experiencias en jets y yates."}
                            </p>
                        </div>

                        <div className='mx-auto'>
                            <h6 className="mb-4 flex justify-center font-semibold uppercase">
                                {language ? "Contact" : "Contacto"}
                            </h6>
                            
                            <div className="mb-4 flex items-center justify-center md:justify-center">
                                <Typography variant={"h5"}>{language ? "info@globaljetset.mx" :
                                 "info@globaljetset.mx"}</Typography>
                            </div>
                            <div className="mb-4 flex items-center justify-center md:justify-center">

                                <Typography variant={"h5"}>+52 1 667 236 3386</Typography>
                            </div>
                        </div>

                        <div className="mx-auto">
                            <h6 className="mb-4 flex justify-center font-semibold uppercase">
                                {language ? "Privacy Policy" : "Política de Privacidad"}
                            </h6>
                            <div className="bg-neutral-200 p-2 text-center dark:bg-neutral-700">
                                <span>© 2024 Copyright:
                                </span>
                                <a className="font-semibold text-neutral-600 dark:text-neutral-400" href="/"> Global Jet Set</a>

                            </div>
                            <div className="bg-neutral-200 text-center dark:bg-neutral-700 ">
                                <span>Developed by: 
                                </span>
                                <a className="font-semibold text-neutral-600 dark:text-neutral-400"
                                    href="https://www.boom-partner.com/" target='_blank'>Boom Growth Partner</a>

                            </div>
                        </div>

                    </div>
                </div>



            </footer>
        </div>
    )
}

export default Footer

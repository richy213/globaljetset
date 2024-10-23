"use client";
import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import globalContext from '@/app/context/globalContext';
import {
    Card,
    Input,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
const Cotizar = () => {

    const { expandido, handleOpenCoization, language } = useContext(globalContext)
   
    const handleCotization = () => {

    }
    const manejarCambioFecha = (e) => {
        setFechaSeleccionada(e.target.value);
    };

    const [type, setType] = useState("jets");
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const manejarCambioFechaInicio = (e) => {
        setFechaInicio(e.target.value);
    };

    const manejarCambioFechaFin = (e) => {
        setFechaFin(e.target.value);
    };


    return (
        // transition-all duration-1000
        <div className='bottom-0 p-4 transition-all duration-1000' style={{ right: expandido ? '-20px' : '-410px', position: "fixed", zIndex: "10000" }}>
            <div className="w-full flex items-center">
                <div className="w-full p-2">
                    <FontAwesomeIcon icon={expandido ? faChevronRight : faChevronLeft}
                        color='#d1af77' size='3x' className='cursor-pointer' onClick={handleOpenCoization}>
                    </FontAwesomeIcon>
                </div>
                <div className="w-full">
                    <Card className="w-full max-w-[22rem] p-2">
                        <Tabs value={type} className="overflow-visible">
                            <TabsHeader className="relative z-0 p-2">
                                <Tab value="jets" onClick={() => setType("yates")}>
                                    <Typography variant={"paragraph"} className="px-5">{language ? "JETS" : "JETS"}</Typography>
                                </Tab>
                                {/* <Tab value="yates" onClick={() => setType("jets")}>
                                    <Typography variant="paragraph" className="px-5">{language ? "YACHTS" : "YATES"}</Typography>
                                </Tab> */}

                            </TabsHeader>

                            <TabsBody className=""
                                animate={{
                                    initial: {
                                        x: type === "jets" ? 400 : type === "yates" ? -400 : 0,
                                    },
                                    mount: {
                                        x: 0,
                                    },
                                    unmount: {
                                        x: type === "jets" ? -400 : type === "yates" ? 400 : 0,
                                    },
                                }}
                            >

                                <TabPanel value="jets" className="p-5">

                                    <div className='mb-5'>
                                        <Input
                                            variant='standard'
                                            // type="email"
                                            // placeholder="Ciudad de Origen"
                                            label={language ? 'AIRCRAFT' : 'AERONAVE'}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <Input
                                            variant='standard'
                                            // placeholder="name@mail.com"
                                            label={language ? 'PASSENGERS' : 'PASAJEROS'}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <Input
                                            variant='standard'
                                            // placeholder="Ciudad de México"
                                            label={language ? "ORIGIN" : "ORIGEN"}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <Input
                                            variant='standard'
                                            // placeholder="Monterrey"
                                            label={language ? "DESTINY" : 'DESTINO'}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <div className='flex gap-5 mb-5'>
                                        <div className="w-full">
                                            <Typography variant='paragraph' className='mb-2'>{language ? "TRIP START" : "INICIO DEL VIAJE"}</Typography>
                                            <input
                                                className='border'
                                                type="date"
                                                id="fechaInicio"
                                                value={fechaInicio}
                                                onChange={manejarCambioFechaInicio}
                                            />
                                        </div>

                                        <div className="w-full">
                                            <Typography variant='paragraph' className='mb-2'>{language ? "TRIP END" : "FIN DEL VIAJE"}</Typography>
                                            <input
                                                className='border'
                                                type="date"
                                                id="fechaFin"
                                                value={fechaFin}
                                                onChange={manejarCambioFechaFin}
                                            />
                                        </div>

                                    </div>

                                    {/* <Button className="bg-[] border border-[#d1af77] text-[#d1af77] conpading w-full" size="lg">{language ? "GET A QUOTE" : "COTIZAR"}</Button> */}
                                    <Link href={"https://wa.link/zishfv"} target='_blank'
                                        className='text-sm w-full font-normal text-[#d1af77] uppercase p-2 no-focus-border clase mb-2'>
                                            {language ? "Get Quote Now" : "Cotizar Ahora"}
                                        </Link>

                                </TabPanel>

                                {/* <TabPanel value="yates" className="p-5">

                                    <div className='mb-5'>
                                        <Input
                                            variant='standard'
                                            // type="email"
                                            // placeholder="Ciudad de Origen"
                                            label={language ? "'YACHTS'" : "EMBARCACIONES"}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <Input
                                            variant='standard'
                                            // placeholder="name@mail.com"
                                            label={language ? "PASSENGERS" : "PASAJEROS"}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <Input
                                            variant='standard'
                                            // placeholder="Ciudad de México"
                                            label={language ? "FROM" : "DE"}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <Input
                                            variant='standard'
                                            // placeholder="Cancún"
                                            label={language ? "TO" : "HASTA"}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>

                                    <div className='flex gap-5 mb-5'>
                                        <div className="w-full">
                                            <Typography variant='paragraph' className='mb-2'>{language ? "TRIP START" : "INICIO DEL VIAJE"}</Typography>
                                            <input
                                                className='border'
                                                type="date"
                                                id="fechaInicio"
                                                value={fechaInicio}
                                                onChange={manejarCambioFechaInicio}
                                            />
                                        </div>

                                        <div className="w-full">
                                            <Typography variant='paragraph' className='mb-2'>{language ? "TRIP END" : "FIN DEL VIAJE"}</Typography>
                                            <input
                                                className='border'
                                                type="date"
                                                id="fechaFin"
                                                value={fechaFin}
                                                onChange={manejarCambioFechaFin}
                                            />
                                        </div>

                                    </div>
                                  
                                    <Link href={"https://wa.link/ixcnyg"} target='_blank'
                                        className='text-sm w-full font-normal text-[#d1af77] uppercase p-2 no-focus-border clase mb-2'>
                                        Cotizar Ahora</Link>

                                </TabPanel> */}


                            </TabsBody>
                        </Tabs>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Cotizar


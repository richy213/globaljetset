"use client";
import React, { useEffect, useState, useContext } from 'react'
import { Input, Textarea, Button, Typography } from '@material-tailwind/react'
import globalContext from '@/app/context/globalContext';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
const Contact = () => {

    const [browser, setBrowser] = useState(null)
    const [zoomLevel, setZoomLevel] = useState(1);
    const [status, setStatus] = useState(null)
    const [mensaje, setMensaje] = useState(null)
    const [formData, setFormData] = useState({
        nombre: null,
        correo: null,
        telefono: null,
        subject: null,
        emisor: "globaljetset"
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleData = async () => {
        const allFieldsFilled = Object.values(formData).every(item => item !== null && item !== "");

        if (allFieldsFilled) {
            console.log('Todos los campos están completos');
            setStatus(false)
            try {
                console.log(formData);
                console.log(typeof formData);
                const response = await fetch("https://expres-jwgr.onrender.com/mailGlobal", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
                if (response) {
                    console.log("mensaje enviado");
                    const data = await response.json()
                    // console.log(data);
                    setMensaje(true)

                    setTimeout(() => {
                        setMensaje(false); // Cambiar mensaje a false o null después de 3 segundos
                    }, 3000); // 3000 milisegundos = 3 segundos


                } else {
                    console.log("No se envio el mensaje");
                    // console.log(response.status, response.statusText);
                    setMensaje(false)
                }
            } catch (error) {
                // console.log(error);
                // console.error('Error al enviar el formulario:', error);
                setMensaje(false)
            }
        } else {
            setStatus(true)
            setMensaje(false)
            console.log('Algunos campos están vacíos');
            // Manejar campos vacíos o nulos aquí
        }
    }

    const { language } = useContext(globalContext)

    const handleBrowser = () => {
        const browser = window.navigator.userAgent;
        // console.log(browser);
        if (browser.includes("Mac")) {
            setBrowser("Mac")
            // console.log("Mac OS");
        }
    }



    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newZoomLevel = 1 - scrollY / 1200; // Ajusta este valor según tus necesidades
        setZoomLevel(newZoomLevel);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const backgroundStyle = {
        transform: `scale(${zoomLevel})`,
        transition: 'transform 0.5s ease-out', // Ajusta la duración de la transición según tus preferencias
    };


    useEffect(() => {
        handleBrowser()
    }, [])

    return (
        <div className='overflow-hidden'>
            <div className="h-[100vh] w-full bg-cover bg-center bg-black bg-opacity-90 bg-fixed"
                style={{ backgroundImage: "url('/fondos/fondo.jpg')", ...backgroundStyle }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="w-full h-full flex justify-center md:justify-start items-center text-left absolute">
                    <div className="md:w-[50%] p-10 card-up">

                        <Typography variant='h5' color='white' className='uppercase text-left'>
                            {language ? "Contact Us" : "Contáctanos"}</Typography>

                        <Typography variant='h5' color='white'
                            className='uppercase mt-16 text-left'>{language ? "Locate our offices in México City, MIAMI and MADRID." :
                                "Localiza nuestras sedes en CDMX, MIAMI y MADRID."}</Typography>

                        <div className="w-full flex items-center">
                            <Typography variant='h5' color='white'
                                className='uppercase mt-16 text-left'>
                                {language ? "Connect with us on social media or send a message." :
                                    "Conecta con nosotros en redes sociales o envianos un mensaje por whatsapp."}</Typography>

                        </div>
                        <div className="w-full flex mt-10">
                            <FontAwesomeIcon icon={faWhatsapp} size='2x' color='white'></FontAwesomeIcon>
                            <Link href={"https://wa.link/zishfv"} target='_blanklocal'
                                className='ml-5 hover:border-b hover:border-white text-white text-xl font-semibold uppercase'>
                                {language ? "Send message" : "Enviar mensaje"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mb-10 p-10">

                <Card className="mx-auto w-full max-w-[78rem] md:flex-row mb-10 shadow-2xl">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 md:w-2/5 shrink-0 rounded-r-none"
                    >

                        <iframe className="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.7319504006377!2d-99.57399822564331!3d19.337434443714823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8a9c1bd3d19f%3A0x32b410ec2b6e1e99!2sAeropuerto%20Internacional%20de%20Toluca%20-%20AIT!5e0!3m2!1ses!2smx!4v1705890381342!5m2!1ses!2smx" width="600" height="450" style={{ border: "0px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </CardHeader>
                    <CardBody>

                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {language ? "International Airport of Toluca" : "Aeropuerto Internacional de Toluca"}
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                            {
                                language ? "With our modern facilities at the Toluca International Airport, we provide an exceptional flight experience from the moment our customers arrive. Our commitment to quality, safety, and customer service sets us apart as leaders in the private aviation industry." : "Con nuestras modernas instalaciones en el Aeropuerto Internacional de Toluca, proporcionamos una experiencia de vuelo excepcional desde el momento en que llegan nuestros clientes. Nuestro compromiso con la calidad, la seguridad y el servicio al cliente nos distingue como líderes en la industria de la aviación privada."
                            }
                        </Typography>

                    </CardBody>
                </Card>


                <Card className="mx-auto w-full max-w-[78rem] md:flex-row mb-10 shadow-2xl">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 md:w-2/5 shrink-0 rounded-r-none"
                    >

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.255431823176!2d-80.28208948938479!3d25.79514587723632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b74d4eb94ac1%3A0x989fdae0cba2f8e1!2sAeropuerto%20Internacional%20de%20Miami!5e0!3m2!1ses!2smx!4v1709661469781!5m2!1ses!2smx" width="600" height="450" style={{ border: "0px" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </CardHeader>
                    <CardBody>

                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {language ? "International Airport of Miami" : "Aeropuerto Internacional de Miami"}
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                            {
                                language ? "With strategically located facilities at the Miami International Airport, we are your trusted partner for all private aviation services." : "Con instalaciones estratégicamente ubicadas en el Aeropuerto Internacional de Miami, somos su socio confiable para todos los servicios de aviación privada."
                            }
                        </Typography>

                    </CardBody>
                </Card>

                <Card className="mx-auto w-full max-w-[78rem] md:flex-row mb-10 shadow-2xl">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 md:w-2/5 shrink-0 rounded-r-none"
                    >

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12137.42318131!2d-3.5833308128418087!3d40.48951470000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4231d000000001%3A0x6e7725ea0f85ceef!2sAeropuerto%20Adolfo%20Su%C3%A1rez%20Madrid-Barajas!5e0!3m2!1ses!2smx!4v1709662239945!5m2!1ses!2smx" width="600" height="450" style={{ border: "0px" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </CardHeader>
                    <CardBody>

                        
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {language ? "International Airport of Madrid" : "Aeropuerto Internacional de Madrid"}
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            {language ? "Executive Terminal" : "Terminal Ejecutiva"}
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            {language ? "28042 Madrid" : "28042 Madrid"}
                        </Typography>
                        
                        <Typography color="gray" className="mb-8 font-normal">
                            {
                                language ? "Based at the Madrid-Barajas Airport, one of Europe's premier aviation hubs, we are strategically positioned to serve our distinguished clients with utmost convenience and efficiency." : "Con sede en el Aeropuerto de Madrid-Barajas, uno de los principales centros aeroportuarios de Europa, estamos estratégicamente ubicados para atender a nuestros distinguidos clientes con la máxima comodidad y eficiencia."
                            }
                        </Typography>

                    </CardBody>
                </Card>


            </div>

            <div className="shadow-xl z-50 flex justify-center items-center">
                <div className="w-full h-[100vh] bg-cover bg-center bg-no-repeat bg-fixed relative bg-[url('/fondos/01.jpg')]">
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                    <div className="absolute p-10 flex justify-center items-center bg-black bg-opacity-50 h-full w-full md:w-[40%] lg:w-[40%] md:px-3 lg:mb-0 lg: lg:px-6">

                        <div className="w-full">
                            <div className="w-full flex justify-center">
                                <Typography className="uppercase text-white" variant="h5">{language ? "Send a message" : "Envíanos un Mensaje"}
                                </Typography>
                            </div>
                            <div className="mt-10">
                                <Input
                                    onChange={handleChange}
                                    variant='standard'
                                    size='lg'
                                    label={language ? "Name" : "Nombre"}
                                    name='nombre'
                                    className='text-xl text-white'
                                    required
                                    labelProps={{
                                        className: "color-blanco before:content-none after:content-none",
                                    }}></Input>
                            </div>

                            <div className="mt-10">
                                <Input onChange={handleChange}
                                    variant='standard'
                                    label={language ? "Email" : "Correo"}
                                    name='correo'
                                    className='text-xl text-white'
                                    required labelProps={{
                                        className: "color-blanco before:content-none after:content-none",
                                    }}></Input>
                            </div>

                            <div className="mt-10">
                                <Input onChange={handleChange}
                                    variant='standard'
                                    label={language ? "Phone" : "Telefono"}
                                    type='text'
                                    name='telefono'
                                    className='text-xl text-white'
                                    required labelProps={{
                                        className: "color-blanco before:content-none after:content-none",
                                    }}></Input>
                            </div>

                            <div className="mt-10">
                                <Input onChange={handleChange}
                                    variant='standard'
                                    label={language ? "Subject" : "Asunto"}
                                    name='subject' className='text-xl text-white'
                                    required labelProps={{
                                        className: "color-blanco before:content-none after:content-none",
                                    }}></Input>
                            </div>


                            <div className="mt-10">
                                <Button type='submit' className='w-full text-lg bg-[] border text-white'
                                    onClick={handleData}>{language ? "Send" : "Enviar"}</Button>
                            </div>

                            {/* <div className={`text-center text-white text-xl p-2 transition-all duration-500`} id='error-message'>{language ? "An error occurred while sending the message." : "Ocurrio un error al enviar el mensaje"}</div> */}
                            <div className={`text-center text-white text-xl p-2 mt-10 ${mensaje == true ? "" : "hidden"} transition-all duration-500`} id="exito">{language ? "Thank you  your message has been sent." : "Muchas gracias, tu mensaje ha sido enviado."}</div>
                            <div className={`text-center text-white text-xl p-2 mt-10 ${status == true ? "" : "hidden"} transition-all duration-500`} id='warning'>{language ? "All fields are required." : "Todos los campos son requeridos"}</div>
                        </div>

                    </div>

                </div>




            </div>
        </div>
    )
}

export default Contact

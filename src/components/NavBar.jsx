// #bd9973
"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button, Collapse } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavListMenu from "./Menu";
import MegaMenuDefault from "./Prueba";
import globalContext from "@/app/context/globalContext";
export function NavbarResponsive() {
    const [openNav, setOpenNav] = useState(false);
    const [openCollapse, setOpenCollapse] = useState(false)
    const [activeLink, setActiveLink] = useState(null)
    const [windowWidth, setWindowWidth] = useState(0);
    const [bgChange, setBgChange] = useState(false)
    const { handleLanguage, language } = useContext(globalContext)

    const handleBackground = () => {
        if (window.scrollY > 100) {
            setBgChange(true);
        } else {
            setBgChange(false);
        }
    }

    const itemNavbar = (elementId) => {
        console.log(elementId);
        setActiveLink(elementId)
    };

    const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);
        if (newWindowWidth > 865) {
            setOpenNav(false)
            setOpenCollapse(false)
        }
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
        window.addEventListener('scroll', handleBackground);
        return () => window.removeEventListener('scroll', handleBackground);
    }, []);

    return (
        <>
            <div className={`w-full menubar ${bgChange ? "transition-all duration-500 bg-[white] shadow-xl fixed" : "bg-transparent fixed"}`} style={{ zIndex: "10000" }}>

                <div className={`w-full flex items-center justify-center`}>

                    <ul className="w-[40%] p-2 ml-10 md:flex-row flex md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link href={'/'} className={`hover:text-[#bd9973]
                            ${activeLink === "inicio" ? "text-[#bd9973]" : ""}`} onClick={() => itemNavbar("inicio")}>
                                <Image src={"/logos/logo_dorado.png"} width={100} height={100} alt="Global jet Set"></Image>
                            </Link>
                        </li>
                    </ul>

                    <ul className={`w-full p-2 md:flex-row flex justify-center md:space-x-8 mt-4 md:mt-0 md:text-xs
                     ${windowWidth <= 870 ? "hidden" : ""}`}>
                        <li>
                            <Link href={'/'} className={`hover:text-[#bd9973] uppercase ${bgChange ? "text-gray" : "text-white"}
                            ${activeLink === "inicio" ? "text-[#bd9973]" : ""}`} onClick={() => itemNavbar("inicio")} style={{ fontSize: "16px" }}>{language ? "Home" : "Inicio"}</Link>

                        </li>
                        <li className="p-0">
                            <NavListMenu bgchange={bgChange} collapse={openCollapse}></NavListMenu>
                        </li>

                        <li>
                            <Link href={'/eventos'} className={`hover:text-[#bd9973] uppercase ${bgChange ? "text-gray" : "text-white"}
                            ${activeLink === "eventos" ? "text-[#bd9973]" : ""}`} onClick={() => itemNavbar("eventos")} style={{ fontSize: "16px" }}>{language ? "Events" : "Eventos"}</Link>
                        </li>

                        <li>
                            <Link href={'/nosotros'} className={`hover:text-[#bd9973] uppercase ${bgChange ? "text-gray" : "text-white"}
                            ${activeLink === "nosotros" ? "text-[#bd9973]" : ""}`} onClick={() => itemNavbar("nosotros")} style={{ fontSize: "16px" }}>{language ? "About Us" : "Nosotros"}</Link>
                        </li>

                        <li>
                            <Link href={'/contacto'} className={`hover:text-[#bd9973] uppercase ${bgChange ? "text-gray" : "text-white"}
                            ${activeLink === "contacto" ? "text-[#bd9973]" : ""}`} onClick={() => itemNavbar("contacto")} style={{ fontSize: "16px" }}>{language ? "Contact" : "Contacto"}</Link>
                        </li>

                        <li style={{ fontSize: "14px" }}>
                            <Link href={''} className={`hover:text-[#bd9973] uppercase ${bgChange ? "text-gray" : "text-white"}
                            ${activeLink === "language" ? "text-[#bd9973]" : ""}`}
                                onClick={handleLanguage} style={{ fontSize: "16px" }}>{language ? "Spanish" : "English"}</Link>
                        </li>

                    </ul>

                    <div className={`visible cursor-pointer w-full flex justify-end p-5`}>
                        <FontAwesomeIcon icon={faBars} size="xl" color="black" onClick={() => setOpenNav(!openNav)}></FontAwesomeIcon>
                    </div>
                </div>


                <Collapse open={openNav}>
                    <div className="text-center p-5 bg-white">

                        <div className="">
                            <Link href={"/"} onClick={() => { itemNavbar("inicio"); setOpenNav(!openNav); }} className={
                                `mt-4 cursor-pointer md:text-md text-black hover:text-[#bd9973] sm:mx-6 uppercase
                                ${activeLink === "inicio" ? "text-[#bd9973]" : ""
                                }`
                            }
                            >{language ? "Home" : "Inicio"}</Link>
                        </div>

                        <div className="mt-5">
                            <Link href={"/jets/venta"} onClick={() => { itemNavbar("eventos"); setOpenNav(!openNav) }} className={
                                `mt-4 cursor-pointer hover:text-[#bd9973] sm:mx-6 uppercase text-black ${activeLink === "eventos" ? "text-[#bd9973]" : ""
                                }`
                            }
                            >{language ? "Jet Sales" : "Venta de Jets"}</Link>
                        </div>
                        <div className="mt-5">
                            <Link href={"/jets/renta"} onClick={() => { itemNavbar("eventos"); setOpenNav(!openNav) }} className={
                                `mt-4 cursor-pointer hover:text-[#bd9973] sm:mx-6 uppercase text-black ${activeLink === "eventos" ? "text-[#bd9973]" : ""
                                }`
                            }
                            >{language ? "Jet Charter" : "Renta de Jets"}</Link>
                        </div>
                        <div className="mt-5">
                            <Link href={"/yates"} onClick={() => { itemNavbar("eventos"); setOpenNav(!openNav) }} className={
                                `mt-4 cursor-pointer hover:text-[#bd9973] sm:mx-6 uppercase text-black ${activeLink === "eventos" ? "text-[#bd9973]" : ""
                                }`
                            }
                            >{language ? "Yates" : "Renta de Yates"}</Link>
                        </div>

                        <div className="mt-5">
                            <Link href={"/eventos"} onClick={() => { itemNavbar("eventos"); setOpenNav(!openNav) }} className={
                                `mt-4 cursor-pointer hover:text-[#bd9973] sm:mx-6 uppercase text-black ${activeLink === "eventos" ? "text-[#bd9973]" : ""
                                }`
                            }
                            >{language ? "Events" : "Eventos"}</Link>
                        </div>

                        <div className="mt-5">
                            <Link href={"/nosotros"} onClick={() => { itemNavbar("nosotros"); setOpenNav(!openNav) }} className={
                                `mt-4 cursor-pointer hover:text-[#bd9973] sm:mx-6 uppercase text-black ${activeLink === "nosotros" ? "text-[#bd9973]" : ""
                                }`
                            }
                            >{language ? "About" : "Nosotros"}</Link>
                        </div>

                        <div className="mt-5">
                            <Link href={"/contacto"} onClick={() => { itemNavbar("contacto"); setOpenNav(!openNav) }} className={
                                `mt-4 cursor-pointer hover:text-[#bd9973] sm:mx-6 uppercase ${activeLink === "contacto" ? "text-[#bd9973]" : ""
                                }`
                            }
                            >{language ? "Contact" : "Contacto"}</Link>
                        </div>

                        <div className="mt-5">
                            <Link href={""} onClick={() => { handleLanguage(); setOpenNav(!openNav) }} className={
                                `mt-4 cursor-pointer hover:text-[#bd9973]
                                 sm:mx-6 uppercase ${activeLink === "" ? "text-[#bd9973]" : ""
                                }`
                            }
                                style={{ fontSize: "16px" }}
                            >{language ? "Spanish" : "English"}</Link>
                        </div>
                    </div>
                </Collapse>
            </div>


        </>

    );
}

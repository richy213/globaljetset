import React, { useState, useEffect, useContext } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    Collapse,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import globalContext from "@/app/context/globalContext";
import Link from "next/link";

const menuItems = [
    {
        title: "Venta de Jets",
        title2: "Jet Sales",
        enlace: `/jets/${"venta"}`,
    },
    {
        title: "Renta de Jets",
        title2: "Jet Charter",
        enlace: `/jets/${"renta"}`,
    },
    {
        title: "Renta de Yates",
        title2: "Yates",
        enlace: "/yates",
    },
];

const NavListMenu = ({ bgchange, collapse }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const { language } = useContext(globalContext)

    const renderItems = menuItems.map(({ title, title2, enlace },index) => (
        <div key={index} className="text-left w-full flex md:px-2">
            <Link className={`w-full mt-2 mb-1 uppercase hover:text-[#bd9973] ${bgchange ? "md:text-black lg:text-black" : "lg:text-white"}`} 
            href={enlace} key={title} style={{fontSize: "16px"}}>
                {language ? title2 : title}
            </Link>
        </div>

    ))

    const handleResize = () => {
        const newWindowWidth = window.innerWidth;
        setWindowWidth(newWindowWidth);
        if (newWindowWidth > 959) {
            setOpenMenu(false)
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
    return (

        <Menu placement="bottom" open={openMenu} handler={setOpenMenu} >
            <MenuHandler>
                <div
                    variant="text"
                    className={`md:flex lg:flex items-center gap-3 p-0 text-base font-normal 
                    capitalize tracking-normal hover:text-[#bd9973] custom-menu-handler cursor-pointer ${bgchange ? "text-gray" : collapse ? "text-gray" : "text-white"}`}
                    style={{ fontSize: "16px", marginTop: "-3px" }}
                >
                    {language ? "INVENTORY" : "INVENTARIO"}{" "}
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        color="#d1af77"
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                            }`}></FontAwesomeIcon>
                </div>
            </MenuHandler>
            {
                windowWidth <= 870 ?
                    <Collapse open={openMenu}>
                        <div className="bloc">{renderItems}</div>
                    </Collapse> :
                    <MenuList className={`hidden grid-cols-1 overflow-visible md:grid lg:grid ${bgchange ? "" : "bg-black bg-opacity-30"} arriba`}>
                        <div className="arriba">
                            {
                                renderItems
                            }
                        </div >
                    </MenuList>
            }

        </Menu>

    );
}

export default NavListMenu
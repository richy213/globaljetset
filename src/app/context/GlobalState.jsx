import React, { useEffect, useState } from "react";
import globalContext from './globalContext';
const GlobalState = ({ children }) => {

    const [expandido, setExpandido] = useState(false);
    const [language,setLanguage] = useState(false)

    const handleLanguage = () => {
        setLanguage(!language);
    }

    const handleOpenCoization  = () =>{
        console.log("global state");
        setExpandido(!expandido);
    }
    
    return (
        <globalContext.Provider value={{expandido,language,handleOpenCoization,handleLanguage}}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalState

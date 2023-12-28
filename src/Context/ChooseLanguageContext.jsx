import { createContext, useState } from "react";

export const ChooseLanguageProvider = createContext();

export const ChooseLanguageContext = ({ children }) => {

    const [ language, setLanguage ] = useState("IT");

    return (
        <ChooseLanguageProvider.Provider value={{ language, setLanguage }}>
            {children}
        </ChooseLanguageProvider.Provider>
    )

};
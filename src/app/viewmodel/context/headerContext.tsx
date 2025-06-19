import React, { createContext, useState } from 'react';

type HeaderContextType = {
    header: string;
    toggleHeader: () => void;
}

export const HeaderContext = createContext<HeaderContextType | any>(null);

export const HeaderProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [header, setHeader] = useState<string>("initial");

    const toggleHeader = (screen: any) => {
        setHeader(screen);
        // setHeader(header == 'initial' ? 'home' : 'access');
    };

    return (
        <HeaderContext.Provider value={{ header, toggleHeader }}>
            {children}
        </HeaderContext.Provider>
    );
};
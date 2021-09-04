import React, { createContext, useState } from "react";

type PagesContextProps = {
    totalPages: number;
    setTotalPages: Function;
    currentPage: number;
    setCurrentPage: Function;
}

export const PagesContext = createContext({} as PagesContextProps);

const PagesProvider: React.FC = ({ children }) => {
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <PagesContext.Provider value={{ totalPages, setTotalPages, currentPage, setCurrentPage }}>
            {children}
        </PagesContext.Provider>
    )
}

export default PagesProvider;
import React, {createContext, useState, useEffect, useContext} from "react";
import axios from "axios";
import {AuthContext} from "./AuthContext";

export const PictureContext = createContext({});

function PictureContextProvider({children}) {

    const [file, setFile] = useState({});
    const [url, setUrl] = useState({});

    return(
        <PictureContext.Provider

            value={{
                file,
                setFile,
                url,
                setUrl
            }}>

            {children}

        </PictureContext.Provider>
    );
}

export default PictureContextProvider;
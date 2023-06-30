import React from "react"



export const UploadImageContextDefaults = {
    value: null,
    setValue: () => { }
}

export const UploadImageContext = React.createContext(UploadImageContextDefaults)
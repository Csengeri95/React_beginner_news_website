import React from "react";


export const SnackbarContextDefaults = {
    login: false,
    logout: false,
    setLogin: () => { },
    setLogout: () => { }
};


export const SnackbarContext = React.createContext(SnackbarContextDefaults);
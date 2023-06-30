import React from "react";


export const UserContextDefaults = {
    value: null,
    setValue: () => { }
};


export const UserContext = React.createContext(UserContextDefaults);

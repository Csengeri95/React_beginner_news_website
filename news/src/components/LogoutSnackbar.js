import React, { useContext } from "react";
import { Snackbar, Alert } from "@mui/material"
//import { LogoutContext } from "../contexts/LogoutContext"
import { SnackbarContext } from "../contexts/SnackbarContext";


export default function LogoutSnackbar({ handleClose }) {

    const { logout } = useContext(SnackbarContext);
    return (
        <Snackbar
            autoHideDuration={1500}
            open={logout}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
        >
            <Alert severity="success" style={{ fontSize: "1.3rem", color: "#000", fontWeight: '600' }}>
                Ön sikeresen kijelentkezett!
            </Alert>

        </Snackbar>
    )
}
import React, { useContext } from "react";
import { Snackbar, Alert } from "@mui/material"
//import { LoginContext } from "../contexts/LoginContext";
import { SnackbarContext } from "../contexts/SnackbarContext";


export default function LoginSnackbar({ handleClose }) {

    const { login } = useContext(SnackbarContext);
    return (
        <Snackbar
            autoHideDuration={1500}
            open={login}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
        >
            <Alert severity="success" style={{ fontSize: "1.3rem", color: "#000", fontWeight: '600' }}>
                Ön sikeresen bejelentkezett!
            </Alert>

        </Snackbar>
    )
}
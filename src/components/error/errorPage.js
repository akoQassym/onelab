import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import s from "./errorPage.module.css";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export default function ErrorPage() {
    const history = useHistory();

    return (
        <div className={s.errorPageSection}>
            <ErrorIcon sx={{ fontSize: 40 }}/>
            <h2>Oops.. Something went wrong..</h2>
            <Button variant="contained" onClick={() => history.push('/')}>Home</Button>
        </div>
    )
}
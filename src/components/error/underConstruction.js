import React from "react";
import ConstructionIcon from '@mui/icons-material/Construction';
import s from "./errorPage.module.css";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export default function ErrorPage() {
    const history = useHistory();

    return (
        <div className={s.errorPageSection}>
            <ConstructionIcon sx={{ fontSize: 40 }}/>
            <h2>The page is under construction</h2>
            <Button variant="contained" onClick={() => history.push('/')}>Home</Button>
        </div>
    )
}
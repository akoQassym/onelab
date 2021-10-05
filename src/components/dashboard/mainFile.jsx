import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Posts from "./post.jsx";
import BottomNav from "./bottomNav.jsx";
import { autocompleteClasses } from "@mui/material";

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    const handleFetch = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.ok ? response.json() : setError(true))
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        handleFetch();
    }, [])

    return (
        <>
            {error ? <Alert sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={5} severity="error">Ошибка при загрузке данных! Попробуйте еще раз!</Alert> : ''}
            {loading ? 
                <Paper sx={{ minHeight: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} elevation={0}>
                    <CircularProgress/> 
                </Paper>
                :
                <Paper sx={{ minHeight: '100vh', width: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }} elevation={0}>
                    <Posts posts={posts}/> 
                </Paper>
            }
            
            <BottomNav />
        </>
    )
}
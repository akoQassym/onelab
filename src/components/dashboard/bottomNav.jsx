import React, { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useHistory} from 'react-router-dom';

const pages = ['/', '/favourite', '/nearby'];

export default function BottomNav() {
    const [navValue, setNavValue] = useState(0);
    const history = useHistory();

    return (
        <Box sx={{ width: 500 }}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={5}>
                <BottomNavigation
                    showLabels
                    value={navValue}
                    onChange={(event, newValue) => {
                        history.push(`${pages[newValue]}`);
                        setNavValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Dashboard" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favourite posts" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Posts nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
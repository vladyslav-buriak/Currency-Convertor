import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { PRIMARY_BG } from '../../theme';
import { PRIMARY_FONT } from '../../theme';
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
    appBar: {
        background: PRIMARY_BG,
    },
    curencyWrapp: {
        flexGrow: 1,
    },
    curencyTitle: {
        fontFamily: PRIMARY_FONT,
        fontSize: '1rem',
        width: '140px',
        color: 'rgba(255,255,255,0.5)',
        position: 'relative',
        letterSpacing: 2,
        textAlign: 'center',

        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 25,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '2px',
            background: 'rgba(255,255,255,0.5)',
            opacity: 0,
        },

        '&:hover': {
            cursor: 'pointer',
            color: 'rgba(255,255,255,1)',

            '&::before': {
                opacity: 1,
            }
        }
    }
});

const Navigation = () => {
    const classes = useStyles();
    const [eur, setEur] = useState();
    const [usd, setUsd] = useState();

    useEffect(() => {
        axios.get(`https://api.exchangerate.host/convert?from=EUR&to=UAH`)
            .then(resp => { setEur(resp.data.result.toFixed(2)) })
    })

    useEffect(() => {
        axios.get(`https://api.exchangerate.host/convert?from=USD&to=UAH`)
            .then(resp => { setUsd(resp.data.result.toFixed(2)) })
    })

   
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className={classes.appBar}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                          
                        </IconButton>
                        <Typography variant="h6" component="div">
                            Convertor valutar 
                            </Typography>
                        <Box ml={2} className={classes.curencyWrapp} sx={{ flexGrow: 1 }} component="div">
                            <Typography class={classes.curencyTitle} sx={{ width: '200px' }}>
                                &#36;{usd}/&euro;{eur}
                            </Typography>
                        </Box>

                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Navigation;
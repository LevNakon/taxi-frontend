import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './header.scss'

export default class Header extends Component {
    render() {
        return (
            <AppBar position="static" className='header_bg'>
                <Toolbar>
                    <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
                        Teleport
                    </Typography>
                    <div>
                        <Button className='btn_sign' variant="contained" color="secondary">SIGN UP</Button>
                    </div>
                </Toolbar>
            </AppBar>
        );
    };
};


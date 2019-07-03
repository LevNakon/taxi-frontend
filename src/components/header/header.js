import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import PATHS from '../../constants/routes';
import auth from '../../services/auth';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDrawer: false
        }
    }

    handlerOpenDrawer = (e) => {
        this.setState({
            openDrawer: true
        });
    }

    handlerCloseDrawer = (e) => {
        this.setState({
            openDrawer: false
        });
    }

    handlerLogout = (e) => {
        auth.logout();
    }

    render() {
        const { location } = this.props;
        const { openDrawer } = this.state;
        return (
            <React.Fragment>
                <AppBar position="static" className='header_bg'>
                    <Toolbar>
                        {auth.isAuthenticated ? <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handlerOpenDrawer}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton> : null}
                        <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
                            <NavLink to={PATHS.INDEX} className='link_decoration'>Teleport</NavLink>
                        </Typography>
                        <div>
                            {!auth.isAuthenticated ? (location.pathname !== PATHS.SIGNUP ? <NavLink to={PATHS.SIGNUP}>
                                <Button className='btn_sign' variant="contained" color="secondary">
                                    SIGN UP
                            </Button>
                            </NavLink> : null) :
                                <Button className='btn_sign' variant="contained" color="secondary" onClick={this.handlerLogout}>
                                    Logout
                            </Button>
                            }
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    transitionDuration={300}
                    open={openDrawer}
                >
                    <div className='h_63'>
                        <IconButton className='menu_button' onClick={this.handlerCloseDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Drawer>
            </React.Fragment>
        );
    };
};

export default withRouter(Header);


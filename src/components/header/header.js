import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBox from '@material-ui/icons/AccountBox'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Map from '@material-ui/icons/Map';
import Navigation from '@material-ui/icons/Navigation';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Room from '@material-ui/icons/Room';

import { userGetWatcher, userGetNull, checkerChange } from '../../actions/userAction';
import { driverCarGetWatcher } from '../../actions/driverCarAction';
import PATHS from '../../constants/routes';
import auth from '../../services/auth';
import driverSwitch from '../../services/driver';
import { joinDriverRoom, leaveDriverRoom } from '../../services/socket'; 

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDrawer: false,
            switchDriver: driverSwitch.isChecked
        }
    }

    componentDidMount() {
        if (auth.isAuthenticated && this.props.user === null) {
            this.props.userGetWatcher();
        }
        this.props.checkerChange(driverSwitch.isChecked);
        if(driverSwitch.isChecked){
            joinDriverRoom();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            if (this.props.user === null && nextProps.user !== null) {
                if (nextProps.user.driverId) {
                    const driverId = nextProps.user.driverId;
                    this.props.driverCarGetWatcher({ driverId });
                }
            }
        }
    }

    accountSwitcher = (e) => {
        if (!e.currentTarget.checked) {
            driverSwitch.setCheckedFalse();
            leaveDriverRoom();
        } else {
            driverSwitch.setCheckedTrue();
            joinDriverRoom();
        }
        this.props.checkerChange(driverSwitch.isChecked);
        // this.setState({ switchDriver: driverSwitch.isChecked });
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
        const { location, history, user, driver, car, isChecked } = this.props;
        // console.log(driver, car);
        let { openDrawer, switchDriver } = this.state;
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
                        {user && !user.driverId ?
                            <ListItem key={'Regist as a driver'}>
                                <Button onClick={(e) => {
                                    history.push(PATHS.REGISTR_DRIVER);
                                    this.handlerCloseDrawer()
                                }} selected={location.pathname === PATHS.REGISTR_DRIVER ? true : false}
                                    className='btn_sign' variant="contained" color="secondary">
                                    Regist as a driver
                            </Button>
                            </ListItem> : <FormControlLabel
                                className='account_switch'
                                control={
                                    <Switch
                                        defaultChecked={switchDriver}
                                        value={switchDriver}
                                        onChange={this.accountSwitcher}
                                        color={"secondary"}
                                    />
                                } label='Driver' />}
                        <Divider />
                        <ListItem onClick={(e) => {
                            history.push(PATHS.TELEPORT);
                            this.handlerCloseDrawer()
                        }} selected={location.pathname === PATHS.TELEPORT ? true : false}
                            button key={'Teleport Map'}>
                            <ListItemIcon ><Map /></ListItemIcon>
                            <ListItemText primary={'Teleport'} secondary={'View Map'} />
                        </ListItem>
                        <ListItem onClick={(e) => {
                            history.push(PATHS.USER);
                            this.handlerCloseDrawer()
                        }} selected={location.pathname === PATHS.USER ? true : false}
                            button key={'My Account'}>
                            <ListItemIcon><AccountBox /></ListItemIcon>
                            <ListItemText primary={user ? user.firstName : 'My Account'} secondary={'View Profile'} />
                        </ListItem>
                        <ListItem onClick={(e) => {
                            history.push(PATHS.TRIPS);
                            this.handlerCloseDrawer()
                        }} selected={location.pathname === PATHS.TRIPS ? true : false}
                            button key={'My Trips'}>
                            <ListItemIcon><Room /></ListItemIcon>
                            <ListItemText primary={'My Trips'} secondary={'View Trips'} />
                        </ListItem>
                        {isChecked ?
                            <React.Fragment>
                                <ListItem onClick={(e) => {
                                    history.push(PATHS.DRIVER);
                                    this.handlerCloseDrawer()
                                }} selected={location.pathname === PATHS.DRIVER ? true : false}
                                    button key={'Driver Page'}>
                                    <ListItemIcon><Navigation /></ListItemIcon>
                                    <ListItemText primary={'Driver'} secondary={'View Profile'} />
                                </ListItem>
                                <ListItem onClick={(e) => {
                                    history.push(PATHS.CAR);
                                    this.handlerCloseDrawer()
                                }} selected={location.pathname === PATHS.CAR ? true : false}
                                    button key={'Car Page'}>
                                    <ListItemIcon><DirectionsCar /></ListItemIcon>
                                    <ListItemText primary={'Car'} secondary={'View Profile'} />
                                </ListItem>
                            </React.Fragment>
                            : null}
                    </List>
                </Drawer>
            </React.Fragment>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userGetWatcher,
        userGetNull,
        driverCarGetWatcher,
        checkerChange
    }, dispatch);
};

const mapStateToProps = ({ userState, driverState, carState }) => ({
    user: userState.user,
    driver: driverState.driver,
    car: carState.car,
    isChecked: userState.isChecked
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));


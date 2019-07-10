import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { FixedSizeList } from 'react-window';
import GoogleMapReact from 'google-map-react';

import { userGetWatcher, checkerChange } from '../../actions/userAction';
import { tripCreateWatcher } from '../../actions/tripAction';
import {
    trip,
    getAvailableTrps,
    tripCancel,
    tripStatus,
    driverConfirm,
    tripDriverStatus,
    confirmedTripForUser,
    cancelConfirmedTrip,
    finishConfirmedTrip
} from '../../services/socket';
import auth from '../../services/auth';
import Trip from '../trip';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
class Teleport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            availableTrips: [],
            statusTrip: false,
            confirmedDriver: false,
            userId: null,
            driverId: null,
            confirmedTrip: false,
            trip: null
        }

        getAvailableTrps((availableTrips) => {
            this.setState({
                availableTrips
            });
        });

        tripStatus((statusTrip) => {
            this.setState({
                statusTrip
            });
        });

        tripDriverStatus((confirmedDriver, userId, trip) => {
            this.setState({
                confirmedDriver,
                userId,
                trip
            });
        });

        confirmedTripForUser((confirmedTrip, driverId) => {
            this.setState({
                confirmedTrip,
                driverId
            })
        });
    }

    componentDidMount() {
        if (auth.isAuthenticated && this.props.user === null) {
            this.props.userGetWatcher();
        }
        getAvailableTrps((availableTrips) => {
            this.setState({
                availableTrips
            })
        });

    }

    sendLocationHandler = (startAddress, endAddress) => {
        trip({
            name: this.props.user.firstName,
            id: this.props.user.id,
            startAddress,
            endAddress
        })
    }

    cancelTrip = () => {
        tripCancel({
            id: this.props.user.id
        })
    }

    confirmTrip = (id) => (e) => {
        driverConfirm(id);
    }

    cancelTripConfirmed = () => {
        const { driverId } = this.state;
        cancelConfirmedTrip(driverId);
    }

    finishTripConfirmed = () => {
        const { userId, trip } = this.state;
        const { tripCreateWatcher } = this.props;
        tripCreateWatcher({
            startAddress: trip.startAddress,
            endAddress: trip.endAddress,
            price: 50.0,
            id: trip.id,
            history: this.props.history
        });
        finishConfirmedTrip(userId);
    }

    row = ({ index }) => {
        const { availableTrips } = this.state;
        return (
            <ListItem button key={index}>
                <ListItemText primary={availableTrips[index].name} secondary={availableTrips[index].endAddress} />
                <Button onClick={this.confirmTrip(availableTrips[index].socketId)} className='btn_sign' variant="contained" color="secondary">Confirm trip</Button>
            </ListItem>
        );
    }

    render() {
        const { user, isChecked } = this.props;
        const { availableTrips, statusTrip, confirmedDriver, confirmedTrip, userId, driverId } = this.state;
        return (
            <Grid xs={10} md={10} item className='mg_0_auto'>
                <Paper xs={10} md={10} item className='mg_0_auto user_bg paper_conf'>
                    {user ?
                        <React.Fragment>
                            {user.driverId && isChecked ?
                                <React.Fragment>
                                    {!confirmedDriver ?
                                        <React.Fragment>
                                            <h2>Available Trips:</h2>
                                            {!availableTrips.length ?
                                                <p>No available trips</p> :
                                                <FixedSizeList height={500} width={300} itemSize={35} itemCount={availableTrips.length}>
                                                    {this.row}
                                                </FixedSizeList>
                                            }
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <p>You confirmed trip</p>
                                            <Button onClick={this.finishTripConfirmed} className='btn_sign mg_top_20' variant="contained" color="secondary">Finish trip</Button>
                                        </React.Fragment>
                                    }
                                </React.Fragment> :
                                <React.Fragment>
                                    {!statusTrip ?
                                        <React.Fragment>
                                            <Grid xs={12} md={12} container={true} justify="space-around">
                                                <Grid xs={10} md={5} item>
                                                    <div style={{ width: '300px', height: '300px' }}>
                                                        <GoogleMapReact
                                                            bootstrapURLKeys={{ key: 'AIzaSyAE6a4oCqKWrUKFru-dEFDBXMQeF3yPJ9o' }}
                                                            defaultCenter={{ lat: 49.80304, lng: 24.00108 }}
                                                            defaultZoom={15}
                                                        />
                                                    </div>
                                                </Grid>
                                                <Grid xs={10} md={3} item>
                                                    <Trip sendLocation={this.sendLocationHandler} />
                                                </Grid>
                                            </Grid>
                                        </React.Fragment> :
                                        <React.Fragment>
                                            {!confirmedTrip ?
                                                <Button onClick={this.cancelTrip} className='btn_sign mg_top_20' variant="contained" color="secondary">Cancel trip</Button> :
                                                <React.Fragment>
                                                    <p>Your trip confirmed</p>
                                                    <Button onClick={this.cancelTripConfirmed} className='btn_sign mg_top_20' variant="contained" color="secondary">Cancel driver confirmed trip</Button>
                                                </React.Fragment>
                                            }
                                        </React.Fragment>
                                    }
                                </React.Fragment>
                            }
                        </React.Fragment> : null}
                </Paper>
            </Grid >
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userGetWatcher,
        checkerChange,
        tripCreateWatcher
    }, dispatch);
};

const mapStateToProps = ({ userState }) => ({
    user: userState.user,
    isChecked: userState.isChecked
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Teleport));
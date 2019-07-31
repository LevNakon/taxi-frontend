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
import Trip from '../trip';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/**
 * Teleport component.
 * Main component after logination which allow user to create trip and show driver list of available trips.
 */
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

        /**
         * Callback for updating state with new available trips .
         *
         * @callback getAvailableTrpsCallback
         * @param {Array} availableTrips - An trip object.
         */

        /**
         * Take from socket available trips.
         * @param {getAvailableTrpsCallback} callback 
         */
        getAvailableTrps((availableTrips) => {
            this.setState({
                availableTrips
            });
        });

        /**
         * Callback for updating state with new trip status .
         *
         * @callback tripStatusCallback
         * @param {Boolean} statusTrip - An trip status.
         */

        /**
         * Take from socket trip status.
         * @param {tripStatusCallback} callback
         */
        tripStatus((statusTrip) => {
            this.setState({
                statusTrip
            });
        });

        /**
         * Callback for updating state with new driver trip status .
         *
         * @callback tripDriverStatusCallback
         * @param {Boolean} confirmedDriver - An driver trip status.
         * @param {Number} userId - An user id.
         * @param {Object} trip - An trip object.
         */

        /**
         * Take from socket trip driver status.
         * @param {tripDriverStatusCallback} callback
         */
        tripDriverStatus((confirmedDriver, userId, trip) => {
            this.setState({
                confirmedDriver,
                userId,
                trip
            });
        });

        /**
         * Callback for updating state with confirmed trip for user status.
         *
         * @callback confirmedTripForUserCallback
         * @param {Boolean} confirmedTrip - An confirmed trip status.
         * @param {Number} driverId - An driver id.
         */

        /**
         * Take from socket confirmed trip for user.
         * @param {confirmedTripForUserCallback} callback
         */
        confirmedTripForUser((confirmedTrip, driverId) => {
            this.setState({
                confirmedTrip,
                driverId
            })
        });
    }

    componentDidMount() {
        getAvailableTrps((availableTrips) => {
            this.setState({
                availableTrips
            })
        });

    }

    /**
     * Give socket trip information such as start address and end address.
     * @param {String} startAddress
     * @param {String} endAddress
     */
    sendLocationHandler = (startAddress, endAddress) => {
        trip({
            name: this.props.user.firstName,
            id: this.props.user.id,
            startAddress,
            endAddress
        })
    }

    /**
     * Give socket trip information such as canceled trip by user before driver trip confirmation.
     */
    cancelTrip = () => {
        tripCancel({
            id: this.props.user.id
        })
    }

    /**
     * Give socket trip information such as id user to confirm trip by driver.
     * @param {Number} id
     */
    confirmTrip = (id) => (e) => {
        driverConfirm(id);
    }

    /**
     * Give socket trip information such as canceled trip by user after driver trip confirmation.
     */
    cancelTripConfirmed = () => {
        const { driverId } = this.state;
        cancelConfirmedTrip(driverId);
    }

    /**
     * Give socket trip information such as finish trip by driver.
     */
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

    /**
     * Function that return jsx element to create user trip information.
     */
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
        const { availableTrips, statusTrip, confirmedDriver, confirmedTrip } = this.state;
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
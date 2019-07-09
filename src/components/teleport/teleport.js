import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { FixedSizeList } from 'react-window';

import { userGetWatcher, checkerChange } from '../../actions/userAction';
import { trip, userResponse } from '../../services/socket';
import auth from '../../services/auth';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Teleport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            availableTrips: []
        }

        userResponse((availableTrips) => {
            this.setState({
                availableTrips
            })
        });
    }

    componentDidMount() {
        if (auth.isAuthenticated && this.props.user === null) {
            this.props.userGetWatcher();
        }
        
    }

    sendMessageHandler = () => {
        trip({
            name: this.props.user.firstName,
            id: this.props.user.id,
            location: 'Kulikovska'
        })
    }

    render() {
        const { user, isChecked } = this.props;
        const { availableTrips } = this.state;
        return (
            <Grid xs={10} md={10} item className='mg_0_auto'>
                <Paper xs={10} md={10} item className='mg_0_auto user_bg paper_conf'>
                    {user ?
                        <React.Fragment>
                            {user.driverId && isChecked ?
                                <React.Fragment>
                                    <h2>Available Trips:</h2>
                                    {!availableTrips.length ?
                                        <p>No available trips</p> :
                                        <ul>
                                            {
                                                // <h3>kek</h3>
                                                availableTrips.map(elem => (
                                                    <ListItem button key={elem.socketId}>
                                                        <ListItemText primary={elem.name} secondary={elem.location} />
                                                    </ListItem>
                                                ))
                                            }
                                        </ul>
                                    }
                                </React.Fragment> :
                                <Button onClick={this.sendMessageHandler} className='btn_sign mg_top_20' variant="contained" color="secondary">Send message</Button>
                            }
                        </React.Fragment> : null}
                </Paper>
            </Grid>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userGetWatcher,
        checkerChange
    }, dispatch);
};

const mapStateToProps = ({ userState }) => ({
    user: userState.user,
    isChecked: userState.isChecked
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Teleport));
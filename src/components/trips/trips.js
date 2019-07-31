import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { FixedSizeList } from 'react-window';

import { tripGetWatcher, tripNull } from '../../actions/tripAction';
import { userGetWatcher } from '../../actions/userAction';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

/**
 * Trips component.
 * Component which show user his trip history.
 */
class Trips extends Component {

    componentDidMount() {
        if (this.props.success !== null) {
            this.props.tripNull();
        }
        this.props.tripGetWatcher({
            history: this.props.history
        });
    }

    /**
     * Function that return jsx element to create user trip information.
     */
    row = ({ index }) => {
        const { trips } = this.props;
        return (
            <ListItem button key={index}>
                <ListItemText primary={`${trips[index].startAddress} - ${trips[index].endAddress}`} secondary={`Price - ${trips[index].price}`} />
            </ListItem>
        );
    }

    render() {
        const { trips } = this.props;
        return (
            <Grid xs={10} md={10} item className='mg_0_auto'>
                <Paper xs={10} md={10} item className='mg_0_auto user_bg paper_conf'>
                    <h2>Trip History:</h2>
                    {trips ?
                        <React.Fragment>
                            {trips.length > 0 ?
                                <div>
                                    {!trips.length ?
                                        <p>No available trips</p> :
                                        <FixedSizeList height={500} width={300} itemSize={35} itemCount={trips.length}>
                                            {this.row}
                                        </FixedSizeList>
                                    }
                                </div> :
                                <p>No trips</p>
                            }
                        </React.Fragment> : null
                    }
                </Paper>
            </Grid>
        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userGetWatcher,
        tripGetWatcher,
        tripNull
    }, dispatch);
};

const mapStateToProps = ({ tripState }) => ({
    message: tripState.message,
    success: tripState.success,
    trips: tripState.trips,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Trips));
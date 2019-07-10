import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { tripCreateWatcher, tripNull } from '../../actions/tripAction';

class Trip extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.success !== null) {
            this.props.tripNull();
        }
    }

    render() {
        return (
            <Formik
                initialValues={{
                    startAddress: '',
                    endAddress: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const { startAddress, endAddress } = values;
                    const { history, sendLocation } = this.props;
                    sendLocation(startAddress, endAddress);
                }}
            >
                {({ errors, touched }) => {
                    const { message, success } = this.props;
                    return (
                        <Form className='order_form'>
                            <div>
                                <Field fullWidth={false} disabled={false} type="text" name="startAddress" label="Start Point" component={TextField} />
                            </div>
                            <div>
                                <Field fullWidth={false} disabled={false} type="text" name="endAddress" label="End Point" component={TextField} />
                            </div>
                            {!success ? <div style={{ color: '#ff00cf' }}>{message}</div> : null}
                            <Button type="submit" className='btn_sign mg_top_20' variant="contained" color="secondary">Order</Button>
                        </Form>
                    );
                }}
            </Formik>
        );
    }
};

const validationSchema = Yup.object().shape({
    startAddress: Yup.string().required('Start Point is required'),
    endAddress: Yup.string().required('End Point is required')
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        tripCreateWatcher,
        tripNull
    }, dispatch);
};

const mapStateToProps = ({ tripState }) => ({
    message: tripState.message,
    success: tripState.success
});

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
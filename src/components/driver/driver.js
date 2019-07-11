import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Select } from 'formik-material-ui';

import { driverUpdateWatcher, driverCreateNull } from '../../actions/driverAction';
import { userGetWatcher } from '../../actions/userAction';
import { CONDITION } from '../../constants/additional';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Driver extends Component {

    componentDidMount() {
        if (this.props.success !== null) {
            this.props.driverCreateNull();
        }
    }

    render() {
        const { driver } = this.props;
        return (<React.Fragment>
            {driver ? <Formik
                initialValues={{
                    experience: driver.experience || 0,
                    condition: driver.condition || CONDITION.USUAL
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const { experience, condition } = values;
                    const { driverUpdateWatcher, driver, history } = this.props;
                    driverUpdateWatcher({
                        experience,
                        condition,
                        driverId: driver.id,
                        history
                    });
                }}
            >
                {({ values }) => {
                    const { driver, success, message } = this.props;
                    const accessSubmit = Object.keys(values).some((key) => {
                        return values[key] != driver[key]
                    });
                    return (
                        <Grid xs={10} md={10} item className='mg_0_auto'>
                            <Paper xs={10} md={10} item className='mg_0_auto user_bg paper_conf'>
                                <h1 className='user_title'>Driver profile</h1>
                                <Form className='for_update'>
                                    <Grid xs={12} md={12} item container>
                                        <Grid item xs={12} md={6}>
                                            <div className='mg_top_15'>
                                                <Field variant="outlined" disabled={false} type="number" name="experience" label="Experience" component={TextField} />
                                            </div>
                                            <div className='mg_top_15'>
                                                <FormControl>
                                                    <InputLabel htmlFor="age-native-simple">Condition</InputLabel>
                                                    <Field variant="outlined" disabled={false} defaultValue={CONDITION.USUAL} name="condition" label="Condition" component={Select} >
                                                        <option value={CONDITION.USUAL}>{CONDITION.USUAL}</option>
                                                        <option value={CONDITION.COMFORT}>{CONDITION.COMFORT}</option>
                                                        <option value={CONDITION.PREMIUM}>{CONDITION.PREMIUM}</option>
                                                    </Field>
                                                </FormControl>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            {!success ? <div style={{ color: '#ff00cf' }}>{message}</div> : null}
                                            {accessSubmit ? <Button type="submit" className='btn_sign mg_top_20' variant="contained" color="secondary">Save</Button> : null}
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Paper>
                        </Grid>
                    );
                }}
            </Formik> : null}
        </React.Fragment>
        );
    }
};

const validationSchema = Yup.object().shape({
    experience: Yup.number().min(0, 'Experience must be greater than 0').required('Experience is required'),
    condition: Yup.string().required('Condition is required')
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        driverCreateNull,
        driverUpdateWatcher,
        userGetWatcher
    }, dispatch);
};

const mapStateToProps = ({ driverState }) => ({
    message: driverState.message,
    success: driverState.success,
    driver: driverState.driver,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Driver));
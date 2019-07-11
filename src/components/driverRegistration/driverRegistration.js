import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Select } from 'formik-material-ui';

import { CONDITION } from '../../constants/additional';
import { carCreateNull } from '../../actions/carAction';
import { driverCreateNull, driverCarWatcher } from '../../actions/driverAction';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

class DriverRegistration extends Component {

    componentDidMount() {
        if (this.props.successCar !== null) {
            this.props.carCreateNull();
        }
        if (this.props.successDriver !== null) {
            this.props.driverCreateNull();
        }
    }

    render() {
        return (<React.Fragment>
            <Formik
                initialValues={{
                    experience: 0,
                    condition: CONDITION.USUAL,
                    brand: '',
                    model: '',
                    run: 0,
                    year: (new Date()).getFullYear()
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const { experience, condition, brand, model, run, year } = values;
                    const { driverCarWatcher, history } = this.props;
                    driverCarWatcher({
                        experience,
                        condition,
                        brand,
                        model,
                        year,
                        run,
                        history
                    });
                }}
            >
                {() => {
                    const { successCar, messageCar, successDriver, messageDriver } = this.props;
                    return (
                        <Grid xs={10} md={10} item className='mg_0_auto'>
                            <Paper xs={10} md={10} item className='mg_0_auto user_bg paper_conf'>
                                <h1 className='user_title'>Driver Registration</h1>
                                <Form className='for_update'>
                                    <h2 className='user_title'>Driver Form</h2>
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
                                    <h2 className='user_title'>Car Form</h2>
                                    <div className='mg_top_15'>
                                        <Field variant="outlined" disabled={false} type="text" name="brand" label="Brand" component={TextField} />
                                    </div>
                                    <div className='mg_top_15'>
                                        <Field variant="outlined" disabled={false} type="text" name="model" label="Model" component={TextField} />
                                    </div>
                                    <div className='mg_top_15'>
                                        <Field variant="outlined" disabled={false} type="number" name="year" label="Car Year" component={TextField} />
                                    </div>
                                    <div className='mg_top_15'>
                                        <Field variant="outlined" disabled={false} min={0} type="number" name="run" label="Car Run" component={TextField} />
                                    </div>
                                    {!successDriver ? <div style={{ color: '#ff00cf' }}>{messageDriver}</div> : null}
                                    {!successCar ? <div style={{ color: '#ff00cf' }}>{messageCar}</div> : null}
                                    <Button type="submit" className='btn_sign mg_top_20' variant="contained" color="secondary">Submit</Button>
                                </Form>
                            </Paper>
                        </Grid>
                    );
                }}
            </Formik>
        </React.Fragment>
        );
    }
};

const validationSchema = Yup.object().shape({
    experience: Yup.number().min(0, 'Experience must be greater than 0').required('Experience is required'),
    condition: Yup.string().required('Condition is required'),
    brand: Yup.string().required('Brand is required'),
    model: Yup.string().required('Model is required'),
    run: Yup.number().min(0, 'Run must be greater than 0').required('Run is required'),
    year: Yup.number().min(0, 'Year must be greater than 0').required('Year is required')
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        carCreateNull,
        driverCreateNull,
        driverCarWatcher
    }, dispatch);
};

const mapStateToProps = ({ driverState, carState }) => ({
    messageDriver: driverState.message,
    successDriver: driverState.success,
    driver: driverState.driver,
    messageCar: carState.message,
    successCar: carState.success,
    car: carState.car
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DriverRegistration));
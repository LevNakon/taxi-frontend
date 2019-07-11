import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';

import { carUpdateWatcher, carCreateNull } from '../../actions/carAction';
import { userGetWatcher } from '../../actions/userAction';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Car extends Component {

    componentDidMount() {
        if (this.props.success !== null) {
            this.props.carCreateNull();
        }
    }

    render() {
        const { car } = this.props;
        return (<React.Fragment>
            {car ? <Formik
                initialValues={{
                    brand: car.brand || '',
                    model: car.model || '',
                    run: car.run || 0,
                    year: car.year || (new Date()).getFullYear()
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const { brand, model, run, year } = values;
                    const { carUpdateWatcher, car, history } = this.props;
                    carUpdateWatcher({
                        brand,
                        model,
                        year,
                        run,
                        carId: car.id,
                        history
                    });
                }}
            >
                {({ values }) => {
                    const { car, success, message } = this.props;
                    const accessSubmit = Object.keys(values).some((key) => {
                        return values[key] != car[key]
                    });
                    return (
                        <Grid xs={10} md={10} item className='mg_0_auto'>
                            <Paper xs={10} md={10} item className='mg_0_auto user_bg paper_conf'>
                                <h1 className='user_title'>Car profile</h1>
                                <Form className='for_update'>
                                    <Grid xs={12} md={12} item container>
                                        <Grid item xs={12} md={6}>
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
    brand: Yup.string().required('Brand is required'),
    model: Yup.string().required('Model is required'),
    run: Yup.number().min(0, 'Run must be greater than 0').required('Run is required'),
    year: Yup.number().min(0, 'Year must be greater than 0').required('Year is required')
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        carCreateNull,
        carUpdateWatcher,
        userGetWatcher
    }, dispatch);
};

const mapStateToProps = ({ carState }) => ({
    message: carState.message,
    success: carState.success,
    car: carState.car,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Car));
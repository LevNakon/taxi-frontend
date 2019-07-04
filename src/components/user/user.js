import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';

import { userUpdateWatcher, userUpdateNull } from '../../actions/userUpdateAction';
import { userGetWatcher } from '../../actions/userAction';
import { phoneRegExp } from '../../constants/additional';
import auth from '../../services/auth';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class User extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (auth.isAuthenticated && this.props.user === null) {
            this.props.userGetWatcher();
        }
        if (this.props.success !== null) {
            this.props.userUpdateNull();
        }
    }

    render() {
        const { user } = this.props;
        return (<React.Fragment>
            {user ? <Formik
                initialValues={{
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    birthdayDate: user.birthdayDate || '',
                    mobileNumber: user.mobileNumber || '',
                    homeAddress: user.homeAddress || '',
                    workAddress: user.workAddress || ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const { firstName, lastName, email, birthdayDate, mobileNumber, homeAddress, workAddress } = values;
                    const { userUpdateWatcher, history } = this.props;
                    userUpdateWatcher({
                        firstName,
                        lastName,
                        email,
                        birthdayDate,
                        mobileNumber,
                        homeAddress,
                        workAddress,
                        history
                    });
                }}
            >
                {({ errors, touched, values }) => {
                    const { user, success, message } = this.props;
                    const accessSubmit = Object.keys(values).some((key) => {
                        if (user[key] == null) {
                            return values[key] != ''
                        }
                        return values[key] != user[key]
                    });
                    return (
                        <Grid xs={10} md={10} item className='mg_0_auto'>
                            <Paper xs={10} md={10} item className='mg_0_auto user_bg paper_conf'>
                                <h1 className='user_title'>User profile</h1>
                                <Form className='for_update'>
                                    <Grid xs={12} md={12} item container>
                                        <Grid item xs={12} md={6} item>
                                            <div className='mg_top_15'>
                                                <Field variant="outlined" disabled={false} type="text" name="firstName" label="First Name" component={TextField} />
                                            </div>
                                            <div className='mg_top_15'>
                                                <Field variant="outlined" disabled={false} type="text" name="lastName" label="Last Name" component={TextField} />
                                            </div>
                                            <div className='mg_top_15'>
                                                <Field variant="outlined" disabled={false} type="email" name="email" label="E-mail" component={TextField} />
                                            </div>
                                            <div className='mg_top_15'>
                                                <label>
                                                    <p>Birthday Date</p>
                                                    <Field variant="outlined" disabled={false} type="date" name="birthdayDate" component={TextField} />
                                                </label>
                                            </div>
                                            <div className='mg_top_15'>
                                                <Field variant="outlined" disabled={false} type="text" name="mobileNumber" label="Mobile Number" component={TextField} />
                                            </div>
                                            <div className='mg_top_15'>
                                                <Field variant="outlined" disabled={false} type="text" name="homeAddress" label="Home Address" component={TextField} />
                                            </div>
                                            <div className='mg_top_15'>
                                                <Field variant="outlined" disabled={false} type="text" name="workAddress" label="Work Address" component={TextField} />
                                            </div>

                                        </Grid>
                                        <Grid item xs={12} md={4} item>
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
    firstName: Yup.string().min(3, 'First Name must be 3 characters or longer').required('First Name is required'),
    lastName: Yup.string().min(3, 'Last Name must be 3 characters or longer').required('Last Name is required'),
    email: Yup.string().email('Email not valid').required('Email is required'),
    birthdayDate: Yup.string(),
    mobileNumber: Yup.string().matches(phoneRegExp, 'Mobile number is not valid'),
    homeAddress: Yup.string(),
    workAddress: Yup.string()
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userUpdateWatcher,
        userGetWatcher,
        userUpdateNull
    }, dispatch);
};

const mapStateToProps = ({ userState, userUpdateState }) => ({
    message: userUpdateState.message,
    success: userUpdateState.success,
    user: userState.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User));
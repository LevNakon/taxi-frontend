import React, { Component } from 'react';

import SignIn from '../signIn';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import main from '../../static/images/main.png';

/**
 * Main component.
 * Show Sign In form and project information if you didn't logined.
 */
export default class Main extends Component {

    render() {
        return (
            <Grid container={true} justify="space-around">
                <Grid item={true} xs={10} md={5}>
                    <SignIn {...this.props} />
                </Grid>
                <Grid item={true} xs={10} md={5}>
                    <Card className='card_photo'>
                        <CardActionArea>
                            <CardMedia
                                className="main_photo"
                                component="img"
                                alt="Teleport"
                                image={main}
                                title="Teleport"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Teleport
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    App which allow you teleport!
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        );
    };
};
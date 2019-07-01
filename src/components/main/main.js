import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import SignUp from '../signUp';

import main from '../../static/images/main.png';
import './main.scss';

export default class Main extends Component {
    render() {
        return (
            <Grid container={true} justify="space-around" spacing={3}>
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
                <Grid item={true} xs={8} md={5}>
                    <SignUp/>
                </Grid>
            </Grid>
        );
    };
};
import React, { Component } from 'react';

import { sendMessage } from '../../services/socket';

import Button from '@material-ui/core/Button';
export default class Teleport extends Component {
    constructor(props){
        super(props)
    }

    sendMessageHandler(){
        sendMessage('Hi nigga');
    }

    render() {
        return (
            <Button onClick={this.sendMessageHandler} className='btn_sign mg_top_20' variant="contained" color="secondary">Send message</Button>
        );
    }
};
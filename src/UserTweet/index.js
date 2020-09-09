import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import './usertweet.css';
import ShowTweet from '../ShowTweet';

class UserTweet extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    render() {
        var data= this.props.data;

        return (
            <Paper className='paper'>
                <ShowTweet data={data}/>       
            </Paper>
        );
    }
}

export default UserTweet;
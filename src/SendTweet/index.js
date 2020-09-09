import React, { Component } from "react";
import "./sendtweet.css";
import { Grid, TextField, Button } from "@material-ui/core";

class SendTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      singletweet: "",
      time: "",
    };
  }

  handel = (e) => {
    if (e.target.name == "tweet") {
      this.setState({ singletweet: e.target.value });
    } else if (e.target.name == "time") {
      this.setState({ time: e.target.value });
    }


  };
  onSubmit = () => {
    if(this.state.singletweet!=null && this.state.time!=null ){
      var arr=[];
   
      var data = {
        singletweet: this.state.singletweet,
        time: this.state.time,
      };
      this.setState({
        tweets: [...this.state.tweets, data],
      });
      arr.push([...this.state.tweets, data]);
  
      this.props.onSubmitChild(arr);
      this.setState({
        singletweet:'',
        time:''
      });

    }

  };

  render() {
    return (
      <Grid container className="sendtweet" direction="column" style={{alignItems:'center'}}>
        <Grid item xs>
        <TextField
        value={this.state.singletweet}
          label="Write Tweet here"
          name="tweet"
          onChange={this.handel}
          
        />

        </Grid>
        <Grid item xs>
        <TextField
        value={this.state.time}
          id="datetime-local"
          label="Select time here"
          name="time"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handel}
        />

        </Grid>
        


  
        <Button variant="outlined" color="secondary" onClick={this.onSubmit}>
          Send
        </Button>
      </Grid>
    );
  }
}

export default SendTweet;

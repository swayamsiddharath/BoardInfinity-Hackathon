import React, { Component } from "react";
import "./app.css";
import { Grid } from "@material-ui/core";
import UserTweet from "./UserTweet";
import SendTweet from "./SendTweet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[],
    }
  }
  
  logChildValue(value) {
    
    this.setState({data:value})
    
  }
  render() {
    var value= this.state.data;
    return (
      <div className="container">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UserTweet data={value} />
        </Grid>
        <Grid item xs={6}>
          <SendTweet onSubmitChild={this.logChildValue.bind(this)}  />
        </Grid>
      </Grid>
    </div>
    );
  }
}

export default App;



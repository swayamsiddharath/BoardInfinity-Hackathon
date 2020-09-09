import React, { Component } from "react";
import { Grid, Divider } from "@material-ui/core";

class ShowTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var data = this.props.data;
    var arr= data[Object.keys(data)];


    return (
      <div>
        <Grid className="paperone" style={{fontFamily:'monospace', background:'darkgray', color:'aliceblue'}} spacing={2}>
            {arr!=undefined?
                arr.map((data)=>(
                <Grid item style={{textAlign:'center'}} key={Math.random()}>
                <h3>Message: {data.singletweet}</h3>
                <h4>Time : {data.time}</h4>
                <Divider style={{ background:'aliceblue'}}/>
                </Grid>  
                )):<div style={{textAlign:'center'}} ><h5>Tweets are empty</h5></div>
            }
        </Grid>
      </div>
    );
  }
}

export default ShowTweet;

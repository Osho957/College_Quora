import React, { Component } from 'react'
import Followers from './Followers'

export class MyFollowers extends Component {
  state={User:{}}
    async  componentDidMount() {
      await  this.setState({ User: JSON.parse(localStorage.getItem("User")) });
      console.log(this.state.User._id);
    }
  render() {
    return (
      <div>
          <div className="container d-xl-flex align-items-xl-center" style={{"marginTop": "20px"}}>
        <h4 className="text-secondary flex-fill">My Followers</h4>
    </div>
    <hr />
    <div className="container">
        {this.state.User._id?<Followers ProfileID={this.state.User._id} />:<></>}
    </div>


      </div>
    )
  }
}

export default MyFollowers
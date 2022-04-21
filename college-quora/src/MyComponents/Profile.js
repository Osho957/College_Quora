import React, { Component } from 'react'
import { toast } from 'react-toastify';
import Followers from './Followers';
import Followings from './Followings';

export class Profile extends Component {
    url = localStorage.getItem("url");
    state={
        ProfileUser:{Posts:[]
            
    },UserProfileImage:null,
    Followers:[],
    Followings:[]
    
        
};
   

 async componentDidMount()
 {
     
    
    if(localStorage.getItem("User")!=null) await this.setState({User:JSON.parse(localStorage.getItem("User"))});
    else  window.location.href = "/login";
    
    const queryParams = new URLSearchParams(window.location.search);
    var ProfileID =  queryParams.get("ProfileID");
    //console.log(ProfileID);return;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify(data)
    };
    const response = await fetch('http://localhost:5000/users/getUserByID/' + ProfileID, requestOptions);
    var data = await response.json();
    console.log(data);
    this.setState({ProfileUser :data});
    
    this.setState({ UserProfileImage: "http://localhost:5000/Images/Users/" + this.state.ProfileUser._id + ".jpg"});
   await this.GetFollowingList(ProfileID);

  


 }
 async GetFollowerList(ProfileID){
   var requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify(data)
    };
   var response = await fetch(this.url + 'follows/getMyFollowers/'+ProfileID, requestOptions);
    var data = await response.json();
    this.setState({Followers:data});
    console.log(data);
 }
 async GetFollowingList(ProfileID){
    var requestOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
         //body: JSON.stringify(data)
     };
    var response = await fetch('http://localhost:5000/follows/getMyFollowings/'+ProfileID, requestOptions);
     var data = await response.json();
     this.setState({Followings:data});   
     
     console.log(data);
  }

 async ToggleFollow()
 {
     var data={
         FollowerID:this.state.User._id,
         Follower:this.state.User,
         UserID:this.state.ProfileUser._id,
         User:this.state.ProfileUser};
     console.log(data);
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch(this.url + 'follows/ToggleFollowing/', requestOptions);
    var res = await response.text();
    console.log(res);
    toast.success(res, {position: toast.POSITION.BOTTOM_RIGHT,autoClose:1000});

 }



  render() {
    return (
      <>
      <div className="container" style={{"margin-top": "15px"}}>
    <h4 className="mb-0">Profile</h4>
</div>
<hr/>
      <div className="container" style={{"margin-top": "20px"}}>
    <div className="row">
        <div className="col">
            <div className="card shadow-sm" style={{"font-size": "14px"}}>
                <div className="card-body" style={{"padding-top": "12px"}}>
                    <div className="row">
                        <div className="col-auto"><img className="rounded-circle border shadow-sm" src={this.state.UserProfileImage} style={{"max-width": "50px","max-height": "50px","margin-right": "18x"}} /></div>
                        <div className="col">
                            <h6 className="text-danger flex-fill">{this.state.ProfileUser.UserName}</h6>
                            <p>{this.state.ProfileUser.InLineDescription}</p>
                        </div>
                    </div>
                    <hr className='mt-0'/>
                    <p className="card-text"><strong>Course : {this.state.ProfileUser.Course}</strong></p>
                    <p className="card-text"><strong>Email : {this.state.ProfileUser.Email}</strong></p>
                    <p className="card-text"><strong>Mobile : {this.state.ProfileUser.Mobile}</strong></p>
                    <h6 className="card-title">About</h6>
                    <p className="card-text">{this.state.ProfileUser.Description}</p>
                    <button className="btn btn-primary" onClick={()=>{this.ToggleFollow()}} type="button">Toggle Follow</button>
                </div>
            </div>
        </div>
        <div className="col">
        {/* <Followings onChange={this.forceUpdate} ProfileID={this.state.Followings} /> */}
        <h6>Followings</h6>
          {this.state.Followings.map(Following =>
              
          
           <div className="card shadow-sm mt-2" style={{"font-size": "14px"}}>
                <div className="card-body" style={{"padding-top": "12px"}}>
                    <div className="row">
                        <div className="col-auto"><img className="rounded-circle border shadow-sm" src={"http://localhost:5000/Images/Users/"+Following.User._id+".jpg?t="+new Date()} style={{"max-width": "50px","max-height": "50px","margin-right": "18x"}} /></div>
                        <div className="col">
                            <h6 className="text-danger flex-fill">{Following.User.UserName}</h6>
                            <p>{Following.User.InLineDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
           
        </div>
    </div>
</div>
      </>
    )
  }
}

export default Profile
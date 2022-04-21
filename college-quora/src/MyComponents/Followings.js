import React, { Component } from 'react'

export class Followings extends Component {
    url = localStorage.getItem("url");  
state={Followings:[],Followers:[]}

    async componentDidMount()
    {
        const queryParams = new URLSearchParams(window.location.search);
        var ProfileID = this.props.ProfileID;// '625307a5a2cfe5b3ab418657';//  queryParams.get("ProfileID");
        console.log('asdasd',ProfileID);
        var requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },    
            //body: JSON.stringify(data)
        };
        console.log('http://localhost:5000follows/getMyFollowings/'+ProfileID);
       var response = await fetch('http://localhost:5000/follows/getMyFollowings/'+ProfileID, requestOptions);
       
        var data = await response.json();
        this.setState({Followings:data});   
        console.log(data);




    }
  render() {
    return (
      <div>
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
    )
  }
}

export default Followings
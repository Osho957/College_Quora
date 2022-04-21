import React, { Component } from 'react'

export class Followers extends Component {
    url = localStorage.getItem("url");  
state={Followers:[],Followers:[]}

    async componentDidMount()
    {
        const queryParams = new URLSearchParams(window.location.search);
        var ProfileID = this.props.ProfileID;

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
  render() {
    return (
      <div>
          {this.state.Followers.map(Follower =>
              
          
           <div className="card shadow-sm mt-2" style={{"font-size": "14px"}}>
                <div className="card-body" style={{"padding-top": "12px"}}>
                    <div className="row">
                        <div className="col-auto"><img className="rounded-circle border shadow-sm" src={"http://localhost:5000/Images/Users/"+Follower.User._id+".jpg?t="+new Date()} style={{"max-width": "50px","max-height": "50px","margin-right": "18x"}} /></div>
                        <div className="col">
                            <h6 className="text-danger flex-fill">{Follower.User.UserName}</h6>
                            <p>{Follower.User.InLineDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}

      </div>
    )
  }
}

export default Followers
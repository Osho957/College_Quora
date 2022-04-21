import React, { Component } from 'react';

export class SignUp extends Component {
    header={'Accept':'application/json','Content-type':'application/json'};
    state={UserName:"",Mobile:"",Email:"",PWD:"",UserType:"JobSeeker",REPWD:"aa"};
    url = localStorage.getItem("url");
    SetValue(e) {
        this.state[e.target.id]=e.target.value;
    }
   async Save() {
       
        if(this.state.PWD!=this.state.REPWD){alert("Password MisMatch");return;}
        
        
        var data ={
            UserName: this.state.UserName,
            Mobile: this.state.Mobile,
            Email: this.state.Email,
            PWD: this.state.PWD,
            UserType:"User",
            Status:'Pending'
        };
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const response = await fetch(this.url+'users/create', requestOptions);
        if(response.status==409){console.log(await response.text()); }
        else if(response.status==200)
        {
                data = await response.json();
                console.log(data);
                alert("Success");
                localStorage.setItem("User",JSON.stringify(data));
                localStorage.setItem("UserType",data.UserType);
                window.location.href = "/home";
        }
        
        //alert(JSON.stringify(this.state));return;
        
        // let params = encodeURI("UserName="+this.state.UserName+
        // "&Mobile="+this.state.Mobile+
        // "&Email="+this.state.Email+
        // "&PWD="+this.state.PWD+
        // "&UserType="+this.state.UserType);
        // let url = 'https://localhost:44361/users/create?'+params;
        // const response = await fetch(url);
        // let data =await response.json();
        // if(data.id!=0){
        //     alert("Profile Created.. Proceed to login");
        //     window.location.assign("/login");

        // }
        console.log(data);

        
    }


  render() {
    return <>

<div className="container d-xl-flex align-items-xl-center" style={{"marginTop": "20px"}}>
        <h4 className="text-secondary flex-fill">New User ?</h4>
    </div>
    <hr />
    <section style={{"minHeight": "561px"}}>
        <div className="container" style={{"marginTop": "15px","marginBottom": "41px"}}>
            <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-6">
                    <div className="card shadow-sm">
                        <div className="card-header text-white bg-secondary">
                            <h5 className="mb-0">Create Profile</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group"><label>Full Name</label>
                                <input onChange={e=>this.SetValue(e)}  className="form-control" type="text" placeholder="Enter Your Name" name="UserName" id="UserName" required /></div>
                                <div className="form-group"><label>Mobile</label>
                                <input onChange={e=>this.SetValue(e)} className="form-control" type="text" placeholder="Enter 10 Digit Mobile NUmber" id="Mobile" name="Mobile" required="" maxLength="10" pattern="[6789][0-9]{9}" /></div>
                                {/* <div className="form-group"><label>Company Work Profile</label>
                                <select className="form-control" onChange={e => this.SetValue({...this.state, UserType: e.target.value })} id="UserType" >
                                    <optgroup label="Select Profile Type">
                                        <option>JobSeeker</option>
                                        <option>Recruiter</option>
                                        
                                    </optgroup>
                                </select>
                            </div> */}
                                <div className="form-group"><label>Email</label>
                                <input onChange={e=>this.SetValue(e)} className="form-control" type="text" placeholder="Enter Address" id="Email" name="Email" required /></div>
                                <div className="form-group"><label>Password</label>
                                <input onChange={e=>this.SetValue(e)} className="form-control" type="password" id="PWD" name="PWD" placeholder="# # #" required /></div>
                                <div className="form-group"><label>Re-Enter Password</label>
                                <input  onChange={e=>this.SetValue(e)} className="form-control" type="password" id="REPWD" name="REPWD" placeholder="# # #" required /></div>
                                <div className="form-group text-right"><button className="btn btn-primary" onClick={()=>this.Save()} type="button">Save</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>;
  }
}

export default SignUp;

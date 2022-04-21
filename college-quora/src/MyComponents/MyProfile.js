import React, { Component } from 'react'
import { toast } from "react-toastify";
export class MyProfile extends Component {

    state = {
        User: { },
        UserProfileImage:null

    };
    url = localStorage.getItem("url");
    SetValue(e) {

        this.state.User[e.target.id] = e.target.value;
        this.setState({ User: this.state.User });
        console.log(this.state.User);
    }
    async Save() {

       
        //console.log(this.state.User);return;
        var data = this.state.User;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const response = await fetch(this.url + 'users/update', requestOptions);
        if (response.status == 409) { console.log(await response.text()); }
        else if (response.status == 200) {
            data = await response.json();
            console.log(this.state.User);
           
            localStorage.setItem("User",JSON.stringify( this.state.User));
            toast.success('Profile Updated', {position: toast.POSITION.BOTTOM_RIGHT,autoClose:1000});
           // window.location.href = "/home";
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
    async UploadProfileImage(e) {

        var File = e.target.files[0];
        var UserID = this.state.User._id;

        //console.log(UserID,File); return;
        const formData = new FormData();
        formData.append("image", File);
        formData.append("name", UserID);

        var requestOptions = {
            method: 'POST',
            body: formData
        };

        var response = await fetch('http://localhost:5000/files/UploadProfileImage', requestOptions);
        console.log(response);
        this.setState({UserProfileImage:"http://localhost:5000/Images/Users/"+this.state.User._id+".jpg?t="+new Date()})
    }

    Load() {


    }
    componentDidMount() {
        this.setState({ User: JSON.parse(localStorage.getItem("User")) });
    }
    render() {
        this.Load();
        return (
            <><div className="container mt-4">
                <h4 className="mb-0">My Profile</h4>
            </div>
                <hr />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-6 col-sm-9 col-xl-6">
                            <div className="card shadow-sm">
                                <div className="card-header"><span>Update Profile Information</span></div>
                                <div className="card-body">
                                    <div className="form-signin">
                                        <div className="form-group"><label>Name</label><input onChange={e => this.SetValue(e)} defaultValue={this.state.User.UserName} className="form-control" type="text" id="UserName" placeholder="Enter Name" required /></div>
                                        <div className="form-group"><label>Mobile</label><input onChange={e => this.SetValue(e)} defaultValue={this.state.User.Mobile} className="form-control" type="text" required maxlength="10" pattern="[6789]{1}[0-9]{9}" id="Mobile" placeholder="10 Digit Mobile Number" /></div>
                                        <div className="form-group"><label>Email</label><input onChange={e => this.SetValue(e)} defaultValue={this.state.User.Email} className="form-control" type="email" id="Email" required placeholder="Email address" autofocus="" name="Email" /></div>
                                        <div className="form-group"><label>In Line Description</label><input onChange={e => this.SetValue(e)} defaultValue={this.state.User.InLineDescription} className="form-control" type="text" id="InLineDescription" placeholder="Add one line for your persona" /></div>
                                        <div className="form-group"><label>About Me</label><textarea onChange={e => this.SetValue(e)} defaultValue={this.state.User.Description} className="form-control" id="Description"></textarea></div>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="form-group"><label>Course</label>
                                                    <select onChange={e => this.SetValue(e)} value={this.state.User.Course} id="Course" className="form-control">
                                                        <optgroup label="Select Course / Trade">
                                                            <option value={"ConputerScience"} >ConputerScience</option>
                                                            <option value={"InformationTechnology"} >InformationTechnology</option>
                                                            <option value={"Electronics"} >Electronics</option>
                                                            <option value={"Machenical"} >Machenical</option>
                                                            <option value={"Civil"} >Civil</option>
                                                        </optgroup>
                                                    </select></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-group"><label>Year</label>
                                                    <select className="form-control" id="Year" onChange={e => this.SetValue(e)} value={this.state.User.Year}>
                                                        <optgroup label="Select Year">
                                                            <option value={1}>1</option>
                                                            <option  value={2}>2</option>
                                                            <option  value={3}>3</option>
                                                            <option  value={4}>4</option>

                                                        </optgroup>
                                                    </select></div>
                                            </div>
                                        </div>
                                        <div className="form-group"><label>Upload Profile Picture :&nbsp;</label><input  onChange={e => this.UploadProfileImage(e)} type="file" id="ProfileImage" required name="ProfileImage" /></div>

                                        <div className="form-group text-center">
                                            {/* <div className="alert alert-danger mt-4" role="alert"><i className="fa fa-exclamation-triangle"></i><span><strong>&nbsp;</strong>Invalid Id Password</span></div> */}
                                        </div><button onClick={() => { this.Save() }} className="btn btn-success btn-block btn-signin" ><i className="fa fa-check btn-signin"></i>&nbsp;Save Profile</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm" style={{ "font-size": "14px" }}>
                                <div className="card-body pt-3">
                                    <div className="row">
                                        <div className="col-auto">
                                            
                                        <img className="rounded-circle border shadow-sm mr-4" src={"http://localhost:5000/Images/Users/"+this.state.User._id+".jpg?t="+new Date()}
                                         style={{ "max-width": "50px", "max-height": "50px" }} /></div>
                                        <div className="col">
                                            <h6 className="text-danger flex-fill">{this.state.User.UserName}</h6>
                                            <p>{this.state.User.InLineDescription}</p>
                                        </div>
                                    </div>
                                    <p className="card-text"><strong>Course / Year : {this.state.User.Course} / {this.state.User.Year}</strong></p>
                                    <p className="card-text"><strong>Email : {this.state.User.Email}</strong></p>
                                    <p className="card-text"><strong>Mobile : {this.state.User.Mobile}</strong></p>
                                    <h6 className="card-title">About</h6>
                                    <p className="card-text">{this.state.User.Description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MyProfile
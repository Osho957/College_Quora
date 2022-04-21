import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export class Login extends Component {

    state={Email:"",PWD:""};
    url = localStorage.getItem("url");
    
    SetValue(e) {
        this.state[e.target.id]=e.target.value;
        
    }
    componentDidMount(){
        console.log(this.url);
        
    }



    async Login()
    {
        
        var data = {Email: this.state.Email,PWD: this.state.PWD};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        const response = await fetch(this.url +'users/login', requestOptions);
        
        if(response.status==401){

             data = await response.json();
              alert(data.Message);
        }
           
       
        if(response.status==200)
        {
               
            data = await response.json();
                localStorage.setItem("User",JSON.stringify(data));
                localStorage.setItem("UserType",data.UserType);
                console.log(localStorage.getItem("User"));
                window.location.href = "/home";
        }
        
       

        return;


        fetch('http://localhost:5000/users/login', requestOptions)
        .then(response => response.json())
        .then(data => {

            console.log(data.status);
            localStorage.setItem("User",JSON.stringify(data));
         localStorage.setItem("UserType",data.UserType);
        });

return;




        // let url = 'https://localhost:44361/users/login/'+this.state.Email+'/'+this.state.PWD;
        // const response = await fetch(url);
        // let data =await response.json();
        
        // if(!data){alert("Error in Login. Check Credentials");return;}
        
        // localStorage.setItem("User",JSON.stringify(data));
        // localStorage.setItem("UserType",data.UserType);

        // if(data.UserType=='Admin')window.location.assign('/companies');
        // else if(data.UserType=='Recruiter')window.location.assign('/myjobs');
        // else window.location.assign('/search');
        
        // console.log(localStorage.getItem("UserType"));
    }


  render() {
    
    return <div>



<div className="login-card">
    <img alt='' className="bg-white border rounded-circle shadow-sm profile-img-card" src="assets/img/lock.png" />
    <p className="profile-name-card"></p>
    <form className="form-signin" onSubmit={event=>Login(event)}>
        <span className="reauth-email"></span>
        <input onChange={e=>{this.SetValue(e)}} type="email" className="form-control" id="Email" required placeholder="Email address" autofocus />
        <input onChange={e=>{this.SetValue(e)}} type="password" className="form-control" id="PWD" required placeholder="Password" />
        <button className="btn btn-primary btn-block btn-lg btn-sign-in" onClick={()=>this.Login()} type='button'>Sign in</button>
    </form>
</div>

    </div>;
  }
}

export default Login;

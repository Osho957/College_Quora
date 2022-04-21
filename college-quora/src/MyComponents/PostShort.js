import React, { Component } from 'react'

export class PostShort extends Component {
    state={
        Post :{ 
            PostTitle:'',
            Description:'',
            UserID:"",
            Likes:[],
            Comments:[],
            PostDateTime:new Date(),
            User: {_id:"", UserName: "Yogi", InLineDescription: "Senior Manager in Company",Description:'' }
    
    }
};
componentDidMount(){
    //this.setState({User:JSON.parse(localStorage.getItem("User"))});
    this.setState({Post:this.props.Post});
     
     console.log(JSON.parse(localStorage.getItem("User")));
}
      
Load(){
    //if(localStorage.getItem("User")==null) window.location.href = "/login";
   
   // 
}
ToggleLike(){
    
}

        render() {
            this.Load();
    return (
       
      <>
          <div className="card shadow-sm mb-3">
                    <div className="card-body" style={{"paddingTop": "12px"}}>
                        <div className="row">
                            <div className="col-auto"><img className="rounded-circle" src="assets/img/User_New.png" style={{"max-width": "50px","max-height": "50px","margin-right": "18px"}}/></div>
                            <div className="col">
                                <h6 className="text-danger flex-fill">{this.state.Post.User.UserName}</h6>
                                <p>{this.state.Post.User.InLineDescription}</p>
                            </div>
                        </div>
                        <h4 className="card-title">{this.state.Post.PostTitle}</h4>
                        <h6 className="text-muted card-subtitle mb-2">Subtitle</h6>
                        <p className="card-text">{this.state.Post.Description}</p>
                        <a className="card-link" onClick={()=>{this.ToggleLike()}} href="#"><i className="fa fa-thumbs-up"></i>&nbsp;{this.state.Post.Likes.length}</a>
                        <a className="card-link" href="#"><i className="fa fa-comment"></i>&nbsp;{this.state.Post.Comments.length}</a>
                    </div>
                </div>
          
      </>
    )
  }
}

export default PostShort
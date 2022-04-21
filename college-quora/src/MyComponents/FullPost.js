import React, { Component } from 'react'

export class FullPost extends Component {
    

 state = {
        User:null,
        Post: {
            _id: "",//623db49922785b7de53952a1
            PostTitle: "Pretext", Description: "Pretext Pretext Pretext Pretext ", UserID: "623805a9c0f523c8eb50a637",
            Likes: [],
            Comments: [],
            PostDateTime: "2022-03-21T12:20:27.167Z",
            PostUser: {
                _id: "623805a9c0f523c8eb50a637",
                UserName: "Mohit Sharma",
                Mobile: "9044580971",
                InLineDescription: "Senior It Head - Developer"
            }
        },
        CommentText:''
    };




   async  AddComment() {

        var data = {
            CommentText:this.state.CommentText,
            UserID: "623805a9c0f523c8eb50a637",
            PostID: this.state.Post._id,
            User: {
                _id: "623805a9c0f523c8eb50a637",
                UserName: "Trying Sharma",
                InLineDescription: "Sernior It Head"
            }
        }
        console.log(this.state.Post._id);return;
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:5000/comments/create', requestOptions);
        data = await response.json();
        this.state.CommentText='';
        var Post=this.state.Post;
        Post.Comments.push(data);
        this.setState({Post:Post});

    }

   async ToggleLike(){
       ///console.log(this.state.User);return;
       
        var Like = {
            
            UserID: this.state.User._id,
            PostID: this.state.Post._id,
            User: {
                _id: this.state.User._id,
                UserName: this.state.User.UserName,
                InLineDescription: this.state.User.InLineDescription

            }
        }
console.log(Like);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(Like)
        };
        const response = await fetch('http://localhost:5000/likes/togglelike', requestOptions);
        var data = await response.json();
        var Post=this.state.Post;
        if(data.deletedCount==1){
            Post.Likes.splice(Post.Likes.indexOf(Like),1);

        }
        else 
        {
        
        Post.Likes.push(data);
        
    }
    this.setState({Post:Post});

    }

    SetValue(e)
    {
        this.setState({ CommentText :e.target.value });
        
    }
componentDidMount(){
    
  this.setState({Post:this.props.Post})
  console.log(this.state.Post._id);
}
Load(){
  
}

  
    render() {
       this.Load();
        return (
            <>
                <div className="card shadow-sm mb-3" style={{ "font-size": "14px" }}>
                    <div className="card-body pt3">
                        <div className="row">
                            <div className="col-auto">
                                <img className="rounded-circle border shadow-sm" src="assets/img/User_New.png" style={{ "max-width": "50px", "max-height": "50px", "margin-right": "18px;" }} /></div>
                            <div className="col">
                                <h6 className="text-danger flex-fill">{this.props.Post.PostUser.UserName}</h6>
                                
                                <p>{this.props.Post.PostUser.InLineDescription}</p>
                            </div>
                        </div>
                        <h4 className="card-title">{this.state.Post.PostTitle}</h4>
                        <p className="card-text">{this.state.Post.Description}</p>
                        <a onClick={(e)=>{this.ToggleLike()}} className="card-link" href="#"><i className="fa fa-thumbs-up"></i> {this.state.Post.Likes.length}</a>
                        <a className="card-link" href="#"><i className="fa fa-comment"></i> {this.state.Post.Comments.length}</a>
                        
                        <hr />
                        <div><a className="btn btn-primary btn-block" role="button" data-toggle="modal" data-target="#myModal"><i className="fa fa-commenting-o"></i> Comment on this Post</a>
                            <div role="dialog" tabindex="-1" className="modal fade" id="myModal">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4>Add Comment to Post</h4><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                                           
                                            </div>
                                        <div className="modal-body">
                                            <form><textarea onChange={(e)=>this.SetValue(e)} className="form-control" rows="5" cols="5" name="Comment" placeholder="Add your comment / reply here"></textarea></form>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-light" data-dismiss="modal" type="button">Close</button>
                                            <button className="btn btn-primary" data-dismiss="modal"  onClick={(e)=>this.AddComment()} type="button">Add</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="list-group mt-4">

                            {this.state.Post.Comments.map(Comment =>
                                <a className="list-group-item list-group-item-action pb-0 pt-1">
                                    <div className="row">
                                        <div className="col-auto">
                                            <img className="rounded-circle border shadow-sm mr-0" src="assets/img/female_user.png" style={{ "max-width": "40px", "max-height": "40px" }} /></div>
                                        <div className="col">
                                            <h6 className="text-danger flex-fill mb-0">{Comment.User.UserName}</h6>
                                            <small>{new Date(Comment.CommentDateTime).toLocaleDateString()}</small>
                                            <p>{Comment.CommentText}</p>
                                        </div>
                                    </div>
                                </a>
                            )}

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default FullPost
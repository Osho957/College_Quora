import React, { Component } from 'react'
import { toast } from "react-toastify";

export class NewPost extends Component {


    state = {
        User: {
            UserName: "", Mobile: "", Email: "", PWD: "", UserType: "JobSeeker", Course: 'InformationTechnology',
            Year: 3, InLineDescription: "", Description: ''
        },
        Post: { PostTitle: "", Description: "", PostImage: null,Category:'In General' },
        imgSrc: "assets/img/books.png",
        PostImage: null
    };

    setImgSrc(src) {
        this.setState({ imgSrc: src });
    }
    SetValue(e) {

        this.state.Post[e.target.id] = e.target.value;
        this.setState({ Post: this.state.Post });
        console.log(this.state.Post);
    }
    async SetFile(e) {
        var File = e.target.files[0];
        document.getElementById('PostImage').src = window.URL.createObjectURL(File)
        await this.setState({ PostImage: File });
        console.log(this.state.PostImage);

    }


    url = localStorage.getItem("url");
    async componentDidMount() {


        if (localStorage.getItem("User") != null)
            this.setState({ User: JSON.parse(localStorage.getItem("User")) });
        console.log(JSON.parse(localStorage.getItem("User")));





    }

    async SavePost() {
        //console.log(this.state.User._id);return;
        var data = this.state.Post;
        data.UserID = this.state.User._id;
        data.PostUser = {
            _id: this.state.User._id,
            UserName: this.state.User.UserName,
            Mobile: this.state.User.Mobile,
            InLineDescription: this.state.User.InLineDescription
        }
        data.PostDateTime = new Date();
        //console.log(data);return;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };


        const response = await fetch(this.url + 'posts/create', requestOptions);
        if (response.status == 409) { console.log(await response.text()); return; }
        if (response.status != 200) { console.log(response); return; }
        data = await response.json();
        //console.log(data._id);return;
        if (this.state.PostImage != null) {
            await this.UploadPostImage(this.state.PostImage, data._id);
        }

        toast.success('Post Updated', { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 1000 });
        // window.location.href = "/home";

    }


    async UploadPostImage(File, PostID) {

        //console.log(PostID);return;
        const formData = new FormData();
        formData.append("image", File);
        formData.append("name", PostID);

        var requestOptions = {
            method: 'POST',
            body: formData
        };

        var response = await fetch('http://localhost:5000/files/UploadPostImage', requestOptions);
        console.log(response);
    }





    render() {
        return (
            <>
                <div className="container mt-5" >
                    <div className="row">
                        <div className="col-6 col-sm-9 col-xl-6">
                            <h4 className="mb-0">New Post</h4>
                            <div className="card shadow-sm mt-2" >
                                <div className="card-header"><span>Add Information</span></div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group"><label>Post Title</label>
                                            <input onChange={e => this.SetValue(e)} id="PostTitle" defaultValue={this.state.Post.PostTitle} className="form-control" type="text" name="Title" placeholder="Enter Post Main Heading Or Question" /></div>
                                        <div className="form-group"><label>Post Description</label>
                                            <textarea onChange={e => this.SetValue(e)} id="Description" defaultValue={this.state.Post.Description} className="form-control" name="Description" rows="3"></textarea></div>
                                        <div className="form-group"><label>Add Image :&nbsp;</label>
                                            <input type="file"
                                                // onChange={(e)=>this.SetFile(e)} 
                                                onChange={(e) => this.SetFile(e)}
                                            /></div>
                                        <div class="form-group"><label>Post Category</label>
                                            <select class="form-control" id='Category' value={this.state.Post.Category} onChange={e => this.SetValue(e)}>
                                                <optgroup label="Select Type of Post">
                                                    <option selected>In General</option>
                                                    <option >Sports</option>
                                                    <option >Entertainemnt</option>
                                                    <option >Event</option>
                                                    <option >Notification</option>
                                                    
                                                </optgroup>
                                            </select>
                                        </div>
                                    </form><button onClick={() => { this.SavePost() }} className="btn btn-primary btn-block" type="button">Post Now</button></div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-9 col-xl-6">
                            <h4>Preview</h4>
                            <div className="card shadow-sm">
                                <div className="card-body pt-3">
                                    <div className="row">
                                        <div className="col-auto"><img className="rounded-circle" src={"http://localhost:5000/Images/Users/" + this.state.User._id + ".jpg?t=" + new Date()} style={{ "max-width": " 50px", "max-height": " 50px", "margin-right": " 18px " }} /></div>
                                        <div className="col">
                                            <h6 className="text-danger flex-fill">{this.state.User.UserName}</h6>
                                            <p>{this.state.User.InLineDescription}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-center" style={{ "opacity": " 0.28" }}>
                                            <img id="PostImage" onChange={(e) => { this.SaveImage(this.files) }} src={this.state.imgSrc} onError={() => this.setImgSrc("assets/img/add_image.png")}
                                                style={{"maxHeight": "640px","maxWidth": "420px"}}
                                            />
                                            {/* <img def src="assets/img/add_image.png" /> */}
                                        </div>
                                    </div>
                                    <h4 className="card-title">{this.state.Post.PostTitle}</h4>
                                    <h6 className="text-muted card-subtitle mb-2">{this.state.Post.Category}</h6>
                                    <p className="card-text">{this.state.Post.Description}</p><a className="card-link" href="#"><i className="fa fa-thumbs-up"></i> 0</a>
                                    <a className="card-link" href="#"><i className="fa fa-comment"></i> 0</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewPost
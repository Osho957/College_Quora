import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    state = {
        User: {},
        UserProfileImage: "",
        ProfileImageSrc: "assets/img/User_New.png"
    };
    async componentDidMount() {
        if (localStorage.getItem("User")) {
            await this.setState({ User: JSON.parse(localStorage.getItem("User")) });
            this.setState({ UserProfileImage: "http://localhost:5000/Images/Users/" + this.state.User._id + ".jpg?t=" + new Date() });
        }
    }

    setImgSrc(src) {
        this.setState({imgSrc:src});
    }
    Load() {

    }
    Logout() {
        localStorage.removeItem("User");
        localStorage.removeItem("UserType");
        if (window.location.href != "/login") window.location.href = "/login";

    }



    render() {
        this.Load();
        return (
            <>
                <nav className="navbar navbar-light navbar-expand-md bg-white shadow-sm">
                    <div className="container"><Link className="navbar-brand text-danger" to="home"><strong>College Quora</strong></Link><button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div
                            className="collapse navbar-collapse d-xl-flex justify-content-xl-end" id="navcol-1">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active text-danger" to="/signup" style={{ "padding": "4px" }}><i className="fa fa-user-plus" style={{ "margin-right": "20px", "margin-left": "20px", "font-size": "35px" }}></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-danger" to="/login" style={{ "padding": "4px" }}><i className="fa fa-sign-in" style={{ "margin-right": "20px", "margin-left": "20px", "font-size": "35px" }}></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active text-danger" to="/newpost" style={{ "padding": "4px" }}><i className="fa fa-pencil-square" style={{ "margin-right": "20px", "margin-left": "20px", "font-size": "35px" }}></i></Link>
                                </li>
                                <li className="nav-item dropdown"><a data-toggle="dropdown" aria-expanded="false" className="nav-link text-danger" href="#" style={{ "padding": "4px" }}><i className="fa fa-user" style={{ "margin-right": "20px", "margin-left": "20px", "font-size": "35px" }}></i></a>
                                    <div className="dropdown-menu dropdown-menu-right text-center shadow"
                                        style={{ "min-width": "250px", "padding-bottom": "0px" }}>
                                        <img style={{ "max-width": "64px", "max-height": "64px", "margin-bottom": "23px" }}
                                            src={this.state.UserProfileImage}
                                            onError={() => this.setImgSrc("assets/img/User_New.png")}
                                        />
                                        <div className="list-group" style={{ "margin-bottom": "-1px", "margin-right": " -1px", "margin-left": "-1px" }}>
                                            <Link className="list-group-item list-group-item-action text-secondary d-md-flex d-lg-flex d-xl-flex align-items-md-start align-items-lg-start align-items-xl-start" to="/myprofile"><i className="fa fa-user-circle-o" style={{ "font-size": "24px" }}></i><h6 className="text-right text-secondary flex-fill">{this.state.User.UserName}</h6></Link>
                                            <button className="list-group-item list-group-item-action text-warning d-md-flex d-lg-flex d-xl-flex align-items-md-start align-items-lg-start align-items-xl-start"><i className="fa fa-power-off" style={{ "font-size": "24px" }}></i>
                                                <h6 onClick={() => { this.Logout() }} className="text-right text-warning flex-fill">Logout</h6>
                                            </button>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
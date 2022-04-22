import React, { Component } from 'react'
import CategoryNavigations from './CategoryNavigations'
import FullPost from './FullPost';
import FullPostMultiple from './FullPostMultiple';
import PostShort from './PostShort'

export class Home extends Component {


    state = {
        Posts: [
            {
            PostTitle: "This is Rishi and Question",
            Likes: [],
            Comments: [],
            Description: "This is Post Description. This is Post Description. This is Post Description. This is Post Description.",
            PostUser: { _id: 1, UserName: "Rishi", InLineDescription: "Senior Software Developer" }
        }
    ],
    IsDataLoaded:false
    };
    async componentDidMount()
    { 
        const queryParams = new URLSearchParams(window.location.search);
        var Category =  queryParams.get("Category");
        if(localStorage.getItem("User")!=null)this.setState({User:JSON.parse(localStorage.getItem("User"))});
        else {window.location.assign('/login');}
        console.log(Category);

         const requestOptions = {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(data)
        };
        if(Category=='All' || !Category)  var response = await fetch('http://localhost:5000/posts/getAllFullPosts', requestOptions);
        else var response = await fetch('http://localhost:5000/posts/getFullPostsByCategory/'+ Category, requestOptions);
        const data = await response.json();
       
        this.setState({ Posts: data });
        //console.log('Data = ',data);
        this.setState({IsDataLoaded:true});
    }
   async Load(){

             //if(this.IsDataLoaded) console.log(this.state);

      

    }
    



    render() {
        this.Load();
        return (
            <>
                <div className="container" style={{ "marginTop": "20px" }}>
                    <div className="row">
                        <div className="col-3 col-xl-3">
                            <CategoryNavigations />
                        </div>
                        
                        <div className="col-6 col-sm-9 col-xl-6">
                            
                            {this.state.IsDataLoaded?<>
                            <FullPostMultiple Posts={this.state.Posts} />
                            </>:<></>
                            }
                        
                        </div>
                        <div className="col-auto col-xl-3">
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <h5 className="text-danger mb-0">Recommended</h5>
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Cell 1</td>
                                            </tr>
                                            <tr>
                                                <td>Cell 3</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Home
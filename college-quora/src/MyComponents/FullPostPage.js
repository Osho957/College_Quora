import React, { Component } from 'react'
import CategoryNavigations from './CategoryNavigations'
import FullPost from './FullPost';
import PostShort from './PostShort'

export class FullPostPage extends Component {



    state = {
        Posts: [{
            User: { UID: 1, UserName: "Rishi", InLineDescription: "Senior Software Developer" },
            PostTitle: "This is Rishi and Question", Likes: [], Comments: [], Description: "This is Post Description. This is Post Description. This is Post Description. This is Post Description."
        },{
            User: { UID: 1, UserName: "Muni", InLineDescription: "Senior PR Company" },
            PostTitle: "This is Muni and Question", Likes: 22, Comments: 2, Description: "This is Post Description. This is Post Description. This is Post Description. This is Post Description."
        },{
            User: { UID: 1, UserName: "Yogi", InLineDescription: "Senior Manager in Company" },
            PostTitle: "This is Yogi and Question", Likes: 2115, Comments: 1, Description: "This is Post Description. This is Post Description. This is Post Description. This is Post Description."
        }
    
    ]
    };

    



    render() {
        return (
            <>
                <div className="container" style={{ "marginTop": "20px" }}>
                    <div className="row">
                        <div className="col-3 col-xl-3">
                            <CategoryNavigations />
                        </div>
                        <div className="col-6 col-sm-9 col-xl-6">
                           
                        <FullPost />
                           
                        </div>
                       
                    </div>
                </div>

            </>
        )
    }
}

export default FullPostPage
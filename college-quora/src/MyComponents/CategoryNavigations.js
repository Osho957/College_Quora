import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CategoryNavigations extends Component {
  render() {
    return (
      <>
            <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Categories</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td><img className="bg-white border rounded shadow-sm mr-3" src="assets/img/Clipboard list.png" style={{"width": "32px"}}/>
                                <Link onClick={this.forceUpdate} to="/home?Category=All">All Posts</Link>
                                </td>
                            </tr>
                            <tr>
                                <td><img className="bg-white border rounded shadow-sm mr-3" src="assets/img/Basketball.png" style={{"width": "32px"}}/>
                                <Link onClick={this.forceUpdate} to="/home?Category=Sports">Sports</Link>
                                </td>
                            </tr>
                            <tr>
                                <td><img className="bg-white border rounded shadow-sm mr-3"  src="assets/img/books.png" style={{"width": "32px"}}/>
                                <Link onClick={this.forceUpdate} to="/home?Category=Study">Study</Link>
                                </td>
                            </tr>
                            <tr>
                                <td><img className="bg-white border rounded shadow-sm mr-3" src="assets/img/Star.png" style={{"width": "32px"}}/>
                                <Link onClick={this.forceUpdate} to="/home?Category=Notification">Notification</Link>
                                </td>
                            </tr>
                            <tr>
                                <td><img className="bg-white border rounded shadow-sm mr-3"  src="assets/img/chess.png" style={{"width": "32px"}}/>
                                <Link onClick={this.forceUpdate} to="/home?Category=Event">Event</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
      </>
    )
  }
}

export default CategoryNavigations
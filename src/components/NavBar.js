import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class NavBar extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     text : 'text-muted',
  //   }
  // }
  // change_color = ()=>{
  //   this.setState({
  //     text : 'text-info',
  //   })
  // }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-danger" style={{position: 'sticky', top:'0px', zIndex:'1'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{color:'white' , fontWeight:'Bold', letterSpacing:'1.5px'}} to="/">DAILY-NEWS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item-">
                <Link  style={{color:'white' , fontWeight:'600', letterSpacing:'1.5px'}}  className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link  style={{color:'white' , fontWeight:'600', letterSpacing:'1.5px'}}   className="nav-link" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link style={{color:'white' , fontWeight:'600', letterSpacing:'1.5px'}}  className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link  style={{color:'white' , fontWeight:'600', letterSpacing:'1.5px'}} className="nav-link" aria-current="page" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link  style={{color:'white' , fontWeight:'600', letterSpacing:'1.5px'}}   className="nav-link" aria-current="page" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link  style={{color:'white' , fontWeight:'600', letterSpacing:'1.5px'}}  className="nav-link" aria-current="page" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link  style={{color:'white' , fontWeight:'600', letterSpacing:'1.5px'}}  className="nav-link" aria-current="page" to="/Science">Science</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

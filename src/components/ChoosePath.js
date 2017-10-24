import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class ChoosePath extends Component{
  render(){
    return(
      <div className="path_box">
        <div className="path_content">
          <div className="customer">
            <h1 className='custText'>CAN I GET</h1>
            <NavLink className="custButt" to='/userlogin'><button style={{border:"0px", backgroundColor: "orange"}} >CUSTOMERS WELCOME</button></NavLink>
          </div>
          <div className="bar">
            <h1 className="barText">UHHH...?</h1>
            <NavLink className="barButt" to='/barlogin'><button style={{border:"0px", backgroundColor: "#eb6cab"}} >EMPLOYEES ONLY</button></NavLink>

          </div>
        </div>
      </div>
        )
      }
    }

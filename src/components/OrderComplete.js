import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class OrderComplete extends Component{
  render(){
    return(
      <div className="notify_box">
        <div className="notify_content">

        <h1> Your order is complete </h1>
        <NavLink to='drinkmenu'><button>Back</button></NavLink>

        </div>
      </div>
    )
  }
}

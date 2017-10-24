import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class DrinkCart extends Component{
  render(){
    return(

      <div className="cart_box">
        <div className="nav_bar">
          <h2>
            <NavLink className="main_nav" activeClassName="selected" to='/drinkmenu'>Drink List</NavLink>
            <NavLink className="main_nav" activeClassName="selected" to='/drinkcart'>View Cart</NavLink>
            <NavLink className="main_nav" activeClassName="selected" to='/'>Log Out</NavLink>
          </h2>
        </div>
        <div className="cart_content">
          <h1> Drink Cart </h1>
          <h1> Drink Cart </h1>
          <h1> Drink Cart </h1>
          <h1> Drink Cart </h1>
          <h1> Drink Cart </h1>
          <h1> Drink Cart </h1>
          <h1> Drink Cart </h1>
        </div>
      </div>





    )
  }
}

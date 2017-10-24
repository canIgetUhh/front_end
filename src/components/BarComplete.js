import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BarComplete extends Component{
  render(){
    return(
      <div className="complete_box">
          <div className="nav_bar_bar">
          <h2>
            <NavLink className="main_nav" activeClassName="selected" to='/barallorders'>All Drink Orders</NavLink>
            <NavLink className="main_nav" activeClassName="selected" to='/barcomplete'>Completed Orders</NavLink>
            <NavLink className="main_nav" activeClassName="selected" to='/'>Log Out</NavLink>
          </h2>
          </div>
        <div className="complete_content">
          <h1> All Completed Bar Orders !!!!!!!!!!!!!!!!!!!!!</h1>
          <h1> All Completed Bar Orders !!!!!!!!!!!!!!!!!!!!!</h1>
          <h1> All Completed Bar Orders !!!!!!!!!!!!!!!!!!!!!</h1>
          <h1> All Completed Bar Orders !!!!!!!!!!!!!!!!!!!!!</h1>
          <h1> All Completed Bar Orders !!!!!!!!!!!!!!!!!!!!!</h1>
          <h1> All Completed Bar Orders !!!!!!!!!!!!!!!!!!!!!</h1>
          <h1> All Completed Bar Orders !!!!!!!!!!!!!!!!!!!!!</h1>
          <h1> All Completed Bar Orders !!!!!!!!!!!!!!!!!!!!!</h1>

        </div>
      </div>
    )
  }
}

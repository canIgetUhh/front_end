import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import orders from '../data/order2';

export default class BarAllOrders extends Component{
  constructor(props){
    super();
    this.state={
      data: [],
      drinks: []
    }
  }



  componentDidMount(){
    fetch('https://can-i-get-uhh.herokuapp.com/api/bar/current_orders').then(drinks =>{
      return drinks.json();
    }).then(drinks => {
      this.setState({drinks: drinks});
      console.log(this.state.drinks, 'this is order drinks in bar orders');
    })
  }


  render(){


    let allOrders = this.state.drinks.map((order) => {
      console.log(order, "this is list");
      console.log(order, 'this is the customer username');
    return(
            <div className='bars_orders'key={order.orderId} >
                <h5>Order # {order.orderId}</h5>
                <h5>Customer Username: {order.customer.username}</h5>
                <h5 style={{textAlign: 'left'}}>Order Details:</h5>
                {order.drinkEntries.map((item, idx) => (
                <ul><h4 style={{textAlign: 'left', marginBottom: '0'}} key={idx}>{item.drink.strDrink} 1</h4>
                  <h6 style={{textAlign: 'left',margin: '0'}}>Ingredients:</h6>
                  <li className='list_items'>{item.drink.strIngredient1}</li>
                  <li className='list_items'>{item.drink.strIngredient2}</li>
                  <li className='list_items'>{item.drink.strIngredient3}</li>
                  <li className='list_items'>{item.drink.strIngredient4}</li>
                  </ul>
                ))}
            </div>
              )
            })


    return(
      <div className="all_orders_box">
          <div className="nav_bar_bar">
          <h2>
            <NavLink className="main_nav" activeClassName="selected" to='/barallorders'>All Drink Orders</NavLink>

            <NavLink className="main_nav" activeClassName="selected" to='/'>Log Out</NavLink>
            <h1 style={{color: 'white', marginLeft: '2vw'}} > All Bar Orders: </h1>
          </h2>
          </div>
        <div className="all_orders_content">
          {allOrders}
        </div>
      </div>
    )
  }
}

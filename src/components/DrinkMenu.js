import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import drinks from '../data/drink';


export default class DrinkMenu extends Component{
  constructor(props){
    super(props);
    this.updateSearch=this.updateSearch.bind(this);
    this.addDrinkOrder=this.addDrinkOrder.bind(this);
    this.addDrink=this.addDrink.bind(this);
    this.removeDrinks=this.removeDrinks.bind(this);
    this.state={
      data: [],
      search: '',
      drinks: [],

    }
  }
  removeDrinks(event) {
    let array = this.state.drinks;
    let index = array.indexOf(event.target.dataset.id)
    console.log(event.target.dataset.id, 'this is dataset');
    array.splice(index, 1);
    this.setState({drinks: array });
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0, 20)});
  }

  addDrink(event){
    let arr = this.state.drinks;

    arr.push({
      strDrink:event.target.dataset.name,
      idDrink: event.target.dataset.id,
      strDrinkThumb: event.target.dataset.pic,
      strIngredient1: event.target.dataset.ing1,
      strIngredient2: event.target.dataset.ing2,
      strIngredient3: event.target.dataset.ing3,
      strIngredient4: event.target.dataset.ing4,
      sessionId: 0,

    });

    this.setState({ drinks: arr });

    console.log(event, 'this is event');
    console.log(this.state.drinks, 'this is state drinks');
    console.log(this.state.data, 'this is state data');
  }


  addDrinkOrder = (event) => {
    event.preventDefault();
    let listItem = {
      drinks: this.state.drinks
      // get session id from cookies and add it to listItem as sessionId
    }

    console.log(this.state.drinks, "this is state.drinks!!!!!!!!!!!!!!");
    fetch("https://can-i-get-uhh.herokuapp.com/api/customer/drink_order", {
      method: "POST",
      body: JSON.stringify(listItem),
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

  ).then((response) => {
    return response.json()
  })

  .then(json => {
    console.log(json);
    this.setState({drinks: [] })

  })

  .catch(err => {
    console.log(err, "Error");

  })
}


  componentDidMount(){
    fetch('https://can-i-get-uhh.herokuapp.com/api/customer/drink_menu').then(drinks =>{
      return drinks.json();
    }).then(data => {
      this.setState({data: data.drinks});
    })
  }


  render(){
    let filterDrinks = data.filter((drink) =>{
      return drink.strDrink.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })
      // console.log(this.state, "this is state*******************");
      // let match = this.props.match
      let listdrinks = filterDrinks.map((drink) =>{
        return(
          <div id="each"className='each_drink' key={drink.idDrink}>
            <div className='each_content'>
              <button data-ing4={drink.strIngredient4} data-ing3={drink.strIngredien3} data-ing2={drink.strIngredient2} data-ing1={drink.strIngredient1} data-pic={drink.strDrinkThumb} data-id={drink.idDrink} data-name={drink.strDrink} type='submit' onClick={this.addDrink} style={{border:'none', backgroundColor:"#c71558", marginLeft: '2vw',marginTop: '1vw'}}>Click to add </button>
              <h4 className="drink" >{drink.strDrink}</h4>
              <h4 style={{marginLeft: '2vw'}}> Ingredients:</h4>
              <p>{drink.strIngredient1}</p>
              <p>{drink.strIngredient2}</p>
              <p>{drink.strIngredient3}</p>
              <p>{drink.strIngredient4}</p>
            </div>
            <div className="pic_div">
              <img alt='' className="pic_box" src={drink.strDrinkThumb}/>
            </div>
          </div>
            )
          })

          let orderDrinks = this.state.drinks.map((order) =>{
            console.log(order, 'this is state drinks!!!!!!!!!!!!!');

            return(
              <div id="order_drinks" key={order.idDrink}>
                <div className= 'order_content'>
                  <p className='order_name' >-{order.strDrink}</p>

                </div>
              </div>
            )
          })
            // < button data-id={order.strDrink}  onClick={this.removeDrinks} style={{borderRadius: '50%', fontSize: '9pt', backgroundColor: 'red' }} >X</button>






    return(
      <div className="drink_box">
        <div className="nav_bar">
          <div className='bar_buttons'>
              <h2>
                <NavLink className="main_nav" activeClassName="selected" to='/drinkmenu'>Drink List</NavLink>
                <NavLink className="main_nav" activeClassName="selected" to='/'>Log Out</NavLink>
                <input style={{marginLeft: '6vw'}} id="searchbar" onChange={this.updateSearch} type="text" value={this.state.search} placeholder='filter results'/>
              </h2>
          </div>

          <div className='bar_orders'>
              <h5 style={{textAlign: 'center'}} >Drinks In Cart -{this.state.drinks.length}-</h5>
              <button className='drink_submit' onClick={this.addDrinkOrder} >Submit Drink Order</button>
              <button className='drink_delete' onClick={this.removeDrinks} >remove last selection</button>
          </div>
              <div className='order_drinks'>

                  {orderDrinks}
              </div>
        </div>
            <div className="drink_content">
                {listdrinks}
            </div>
      </div>



    )
  }
}

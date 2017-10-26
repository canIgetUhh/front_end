import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BarLogin extends Component{
  constructor(props){
    super(props);
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);

    this.state={
      username:'',
      password: ''
    }
  }
  handleUsernameChange(event){
    this.setState({username:event.target.value})
  }
  handlePasswordChange(event){
    this.setState({password:event.target.value})
  }




  logIn = (event) => {
  event.preventDefault();
  let listItem = JSON.stringify(this.state);

    console.log(this.state, "this is state!!!!!!!!!!!!!!");
    fetch("https://can-i-get-uhh.herokuapp.com/api/bar/login", {
      method: "POST",
      body: listItem,
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
  })
  .catch(err => {
    console.log(err, "No Good");
  })
  .then(() =>{
    this.props.history.push('/barallorders');
  })


  };





  render(){
    return(
      <div className="bar_login_box">
      <div className="bar_login_content">
        <h1 style={{marginTop: '7vw', fontWeight: 'bold'}} > Employee Login </h1>
        <form onSubmit={this.logIn}>
          <input onChange={this.handleUsernameChange} value={this.state.username} className="input" type="text" placeholder='User Name'/>
          <br/>
          <input onChange={this.handlePasswordChange} value={this.state.password} className="input" type="password" placeholder='Password'/>
          <br/>
          <input style={{border:"0px", width: "10vw", backgroundColor: "violet"}} type="submit" value="submit"/>
          <br/>
          <NavLink style={{textDecoration: "none"}} to="/barsignup"> <input  style={{border:"0px", backgroundColor: "violet" }}  type="submit" value="Sign Up"/></NavLink>
          <NavLink style={{textDecoration: "none"}} to="/"> <input style={{border:"0px", backgroundColor: "violet" }} type="submit" value="Back"/></NavLink>
        </form>
      </div>
      </div>
        )
      }
    }

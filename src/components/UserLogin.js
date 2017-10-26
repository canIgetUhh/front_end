import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class UserLogin extends Component{
constructor(props){
  super(props);
  this.handleUsernameChange=this.handleUsernameChange.bind(this);
  this.handlePasswordChange=this.handlePasswordChange.bind(this);

  this.state={
    username:'',
    password: '',


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

  // console.log(this.state, "this is state!!!!!!!!!!!!!!");
  fetch("https://can-i-get-uhh.herokuapp.com/api/customer/login", {
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
  // this.props.bringInState(json)
  // this.setState({sessionId: json})
  //
  // /*
  //   This json variable should be a number for the session id
  //   Once it does, Save it to a cookie for later use
  // */
  console.log("THIS SHOULD BE THE SESSION ID:", json);
  // console.log(this.props.sessionId, 'session id?');
})
.catch(err => {
  console.log(err, "No Good");
})
.then(() =>{
  this.props.history.push('/drinkmenu');
})


};
  render(){
    return(
      <div className="login_box">
        <div className="login_content">
          <h1> Customer Login </h1>
          <form onSubmit={this.logIn}>
            <input onChange={this.handleUsernameChange} value={this.state.username} className="input" type="text" placeholder='User Name'/>
            <br/>
            <input onChange={this.handlePasswordChange} value={this.state.password} className="input" type="password" placeholder='Password'/>
            <br/>
            <input  style={{border:"0px", width: "10vw", backgroundColor: "orange"}} type="submit" value="submit"/>
            <br/>
            <NavLink style={{textDecoration: "none"}} to="/usersignup"> <input style={{border:"0px", backgroundColor: "orange" }} type="submit" value="Sign Up"/></NavLink>
            <NavLink style={{textDecoration: "none"}} to="/"> <input style={{border:"0px", backgroundColor: "orange" }}  type="submit" value="Back"/></NavLink>
          </form>
        </div>
      </div>
          )
        }
      }

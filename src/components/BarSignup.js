import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BarSignup extends Component{
  constructor(props){
    super(props);
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    // this.addToList=this.addToList.bind(this);
    this.state={
      username: '',
      password: ''
    }
  }
  handleNameChange(event){
    this.setState({username:event.target.value})
  }
  handlePasswordChange(event){
    this.setState({password:event.target.value})
  }
  addToList = (event) => {
  event.preventDefault();
  let listItem = JSON.stringify(this.state);

  console.log(this.state, "this is state!!!!!!!!!!!!!!");
  fetch("https://can-i-get-uhh.herokuapp.com/api/bar/signup", {
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
  this.props.history.push('/barlogin');
})


};

  render(){
    return(
      <div className="bar_sign_box">
        <div className="bar_sign_content">
          <h1> Create A Profile For Your Establishment </h1>
            <br/>
            <form onSubmit={this.addToList} >
            <input className='inputS' onChange={this.handleNameChange} value={this.state.username} type="text" placeholder="Establishment Name"/>
            <br/>
            <input className='inputS' onChange={this.handlePasswordChange} value={this.state.password} type="text" placeholder="Password"/>
            <br/>
            <input style={{marginTop: '1vw', marginLeft: '2vw', border:"0px", width: "10vw", backgroundColor: "#ff1d8e"}} type="submit" placeholder="Submit"/>
            <NavLink style={{textDecoration: "none"}} to="/"> <input style={{border:"0px", width: "10vw", backgroundColor: "#ff1d8e"}} type="submit" value="Back"/></NavLink>
            </form>
        </div>
      </div>
    )
  }
}

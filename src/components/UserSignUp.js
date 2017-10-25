import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class UserSignUp extends Component{
  constructor(props){
    super(props);
    this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
    this.handleLastNameChange=this.handleLastNameChange.bind(this);
    this.handleEmailChange=this.handleEmailChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handleDobChange=this.handleDobChange.bind(this);
    // this.addToList=this.addToList.bind(this);
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      username: '',
      dob: ''
    }

  }
  handleFirstNameChange(event){
    this.setState({firstName: event.target.value});
  }
  handleLastNameChange(event){
    this.setState({lastName: event.target.value})
  }
  handleEmailChange(event){
    this.setState({email: event.target.value})
  }
  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }
  handleUsernameChange(event){
    this.setState({username: event.target.value})
  }
  handleDobChange(event){
    this.setState({dob: event.target.value})
  }
  addToList = (event) => {
    // let data;
    event.preventDefault();
    console.log("SUBMITED");
    let listItem = JSON.stringify(this.state);
    console.log(listItem, "this is state!!!!!!!!!!!!!!!!!!!");
    let options =  {
      method: "POST",
      body: listItem,
      mode:'cors',
      headers: {
        'Accept': 'application/json',
        // 'Cache-Control': 'no-cache',
        'Content-Type': 'application/json'
      }
    }
    console.log("The options!: ", options);
    fetch("https://can-i-get-uhh.herokuapp.com/api/customer/signup", options)
    .then(response => {
      console.log("RESPONSE: ", response);
      return response.json()
    })

    .then(json => {
      console.log("JSON: ", json);
      // data = json;
    })


    .catch(err => {
      console.log("ERROR: ", err);
    })
    .then(() =>{
      this.props.history.push('/userlogin');
    })



  }


  render(){
    return(
      <div className="sign_box">
      <div className="sign_content">
      <h1 style={{color: '#ffb733'}} > Create Customer Profile </h1>
      <br/>
      <form onSubmit={this.addToList}>
      <input onChange={this.handleFirstNameChange} value={this.state.firstName} className='inputS' type="text" placeholder="First Name"/>
      <br/>
      <input onChange={this.handleLastNameChange} value={this.state.lastName} className='inputS' type="text" placeholder="Last Name"/>
      <br/>
      <input onChange={this.handleEmailChange} value={this.state.email} className='inputS' type="text" placeholder="Email Address"/>
      <br/>
      <input onChange={this.handlePasswordChange} value={this.state.password} className='inputS' type="text" placeholder="Create Password"/>
      <br/>
      <input onChange={this.handleUsernameChange} value={this.state.username} className='inputS' type="text" placeholder="Create Username"/>
      <br/>
      <input onChange={this.handleDobChange} value={this.state.dob} className='inputS' type="text" placeholder="D.O.B."/>
      <br/>
      <input  style={{border:'none', backgroundColor: "#ffb733", marginTop:"2vw", marginLeft:"4vw", marginRight: '3vw' }} type="submit" placeholder="Submit"/>
      <NavLink style={{textDecoration: "none"}} to="/"> <input style={{border:'none', marginTop:"2vw", backgroundColor: "#ffb733"}} type="submit" value="Back"/></NavLink>

      </form>

      </div>
      </div>
    )
  }
}

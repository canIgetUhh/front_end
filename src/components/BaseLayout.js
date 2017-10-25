import React, {Component} from 'react';

export default class BaseLayout extends Component{
  constructor(props){
    super(props);
    this.state={
      sessionId: ''
    }
    // this.bringInState=this.bringInState.bind(this);
    console.log(this.state.sessionId, "this is the state of sessionId");
}

  //
  // bringInState = (json) => {
  //   console.log(json, 'this is session in baselayout bringstatefunction');
  //   this.setState({sessionId: json})
  //   console.log(this.state.sessionId, 'this is state of session Id in Baselayout');
  //
  // }

  render(){
    // let isLoginDisplay =
    //   this.state.sessionId ? (
    //     ''
    //   ) : (
    //     <UserLogin sessionId={this.state.sessionId} bringInState={(json) => this.bringInState(json)}/>
    //   ) ;
    return(
      <div className='base_box'>

        {this.props.children}
      </div>
    )
  }
}

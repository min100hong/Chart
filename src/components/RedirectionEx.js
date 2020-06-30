import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class RedirectionEx extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       redirect: false,
    }
  }
  
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/chart' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
      </div>
    )
  }
}

export default RedirectionEx;

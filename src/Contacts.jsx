import React, { Component } from 'react'

export default class Contacts extends Component {
    state={
        prodactName:'karim'
    }
  render() {
    return (
        
      <div className='bg-info'>
        Conntacts
        <i className="fab fa-facebook"></i>
        <h1> {this.state.prodactName}</h1>
        </div>
    )
  }
}

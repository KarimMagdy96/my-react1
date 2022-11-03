import React, { Component } from "react";
import Child from "./child";

export default class Parent extends Component {
  state = {
    prodacts: [
      { id: 1, name: "toshiba", price: 2500, count: 1, sale: false },
      { id: 2, name: "apple", price: 25700, count: 5, sale: false },
      { id: 3, name: "samsung", price: 1700, count: 3, sale: true },
      { id: 4, name: "nasr", price: 1200, count: 8, sale: false },
      { id: 5, name: "valvu", price: 3000, count: 9, sale: true },
    ],
  };
  deleteprodacts= (id) =>{
    console.log(id)
    //deep copy
let newProdacts = [...this.state.prodacts];
console.log(newProdacts)
    //action
    newProdacts= newProdacts.filter((prodact)=> prodact.id !== id)
    //setstate
    this.setState({prodacts:newProdacts})
  }
  render() {
    return (
      <div className=" container  bg-secondary">
        <div className="row">

        {this.state.prodacts.map((prodact,i)=>{
            return  <Child delete={this.deleteprodacts} key={i} parentPro={prodact} />
        })}
        </div>
      </div>
    );
  }
}

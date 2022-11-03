import React, { Component } from "react";
import Child from "./child";

export default class Parent extends Component {
  state = {
    prodacts: [
      { id: 1, name: "toshiba", price: 2500, count: 1, sale: false },
      { id: 1, name: "apple", price: 25700, count: 5, sale: false },
      { id: 1, name: "samsung", price: 1700, count: 3, sale: true },
      { id: 1, name: "nasr", price: 1200, count: 8, sale: false },
      { id: 1, name: "valvu", price: 3000, count: 9, sale: true },
    ],
  };
  deleteprodacts(){
    console.log('hello')
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

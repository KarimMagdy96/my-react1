import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { name, price, count, sale,id } = this.props.parentPro;
    return (
      <div className=" position-relative  bg-dark text-white p-4 col-3  m-2">
        <h6>{name}</h6>
        <h6>{price}</h6>
        <h6>{count}</h6>
        {sale==true? <div className=" bg-danger p-2 top-0 end-0 position-absolute">sale</div>:''}
        <button onClick={()=>this.props.delete(id)} className="btn btn-outline-danger text-white w-100">delete</button>
      </div>
    );
  }
}

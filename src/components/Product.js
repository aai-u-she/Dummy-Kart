import React from 'react';

export default function Product(props) {

  return (
    <div className='row mt-3'>
        <div className='col-5'>
            <h2>{props.product.name} <span className="badge bg-primary">₹{props.product.price}</span></h2>
        </div>
        <div className="col-3">
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick = {() => {props.decreamentQuantity(props.index)}}>-</button>
            <button type="button" className="btn btn-outline-primary">{props.product.quantity}</button>
            <button type="button" className="btn btn-outline-primary" onClick = {() => {props.increamentQuantity(props.index)}}>+</button>
        </div>
        </div>
        <div className="col-2">
            {props.product.quantity * props.product.price}
        </div>
        <button className="col-2 btn btn-info" onClick = {() => {props.removeItem(props.index)}}>REMOVE</button>
      
    </div>
  );
}

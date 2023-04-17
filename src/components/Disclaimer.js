import React from 'react';

export default function Disclaimer(props) {
  return (
    <div className='row fixed-bottom'>
      <button className='btn btn-danger col-2' onClick = {() =>{
        props.resetFunction()}}>RESET</button>
      <div className='col-4 bg-dark text-white text-center'>
        TOTAL ITEMS:- {props.numberOfItems}
      </div>
      <div className='col-4 bg-dark text-white text-center'>
        TOTAL AMOUNT TO BE PAID:- ₹{props.totalAmount}
      </div>
      <button className='btn btn-primary col-2'>PAY NOW</button>
    </div>
  );
}


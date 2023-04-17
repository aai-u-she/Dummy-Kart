import React from 'react';
import Product from './Product.js';

// either use props as an argument or direct property, the props will include all the properties
// export default function OurProducts({product}) {
    // console.log(product);
    
export default function OurProducts(props) {
    // console.log(props);
  return (
    props.productList.length > 0 ?
    props.productList.map((product, index) =>{
        return <Product product = {product} key = {index} increamentQuantity = {props.increamentQuantity} decreamentQuantity = {props.decreamentQuantity} removeItem = {props.removeItem} index = {index}/>
    })
    : <h1>OOPS! NO PRODUCT EXIST IN THE CART</h1>
  )
}

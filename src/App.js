// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import OurProducts from './components/OurProducts';
import Disclaimer from './components/Disclaimer';
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price: 69999,
      name: "IPhone 10S Max",
      quantity: 1,
    },
    {
      price: 9999,
      name: "Redme Note 7 Pro",
      quantity: 1,
    }
  ]

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(79998);
  let [numberOfItems, setNumberOfItems] = useState(2);

//  if we use normal function here then you have to implement binding to this function so to avoid manual binding we use arrow function bcoz it already has binding to this.
  const increamentQuantity = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount +=  newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    numberOfItems++;
    setNumberOfItems(numberOfItems);
  }

  const decreamentQuantity = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
    numberOfItems--;
    setNumberOfItems(numberOfItems);
  }

  const addItem =(name, price) =>{
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 1
    });
    setProductList(newProductList);
    numberOfItems++;
    setNumberOfItems(numberOfItems);
  }

  const removeItem = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    numberOfItems = numberOfItems - newProductList[index].quantity;
    newProductList.splice(index, 1);
    setNumberOfItems(numberOfItems);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount); 
  }

  const resetFunction = () =>{
     let newProductList = [...productList];
     newProductList.map((products) => {
      products.quantity = 0;
     });
     setNumberOfItems(0);
     setProductList(newProductList);
     setTotalAmount(0); 
  }

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <AddItem addItem = {addItem}/>
    <OurProducts 
    productList = {productList} increamentQuantity = {increamentQuantity} decreamentQuantity = {decreamentQuantity} removeItem = {removeItem}
    />
    </main>
    <Disclaimer totalAmount = {totalAmount} numberOfItems = {numberOfItems} resetFunction = {resetFunction}/>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';
import {Route} from 'react-router-dom';

import './App.css';

function App() {
  const [signin, setSignIn] = useState(false);
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      );
       } else {
        setCartItems([...cartItems, {...product, qty: 1}]);
        
      }
    };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty -  1 } : x
        )
        );
    }

  };
  
  return (
    <div className="App container-fluid">

      <Header cartItems={cartItems.length}/>
      
        <Route path="/" exact>
        <Main products={products} onAdd = {onAdd}/>
        </Route>
        <Route path="/cart">
          <Basket cartItems={cartItems} onAdd = {onAdd}  onRemove={onRemove} signin={signin}/>
          </Route>
        
       
    </div>
  );
}

export default App;

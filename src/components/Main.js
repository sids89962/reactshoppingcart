import React from 'react';
import Product from './Product';
// import {Scrollbars} from 'react-custom-scrollbars-2';


const Main = (props) => {
    const {products, onAdd} = props;
    return(
        <div className="container">
        <main className="col-md-12">
            <h1>Products</h1>
            <div className="row cart-items-container">
           
                {
                    products.map(product => (
                        <Product key={product.id} product={product} onAdd={onAdd}/>
                    ))
                }
              
            </div>
        </main>
        </div>
    )
} 

export default Main;
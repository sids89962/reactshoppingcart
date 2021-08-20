import React from 'react'

 const Product = (props) =>  {
     const {product, onAdd} = props;
    return (
        <div  className="col-md-3">
            <img className="small" src={product.image} alt={product.name}></img>
            <h2 className="fw-bold">{product.name}</h2>
            <div>${product.price}</div>
            <div>
                <button  onClick={() => onAdd(product)} className="btn">Add to cart</button>
            </div>
        </div>

    )
}
export default Product;
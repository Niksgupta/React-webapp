import React, {useState} from 'react';
// import Data from "./data.json" ;
import "./Collection.css"
// import { Link } from 'react-router-dom';
import './Button.css'

function Colelctions() {

    const [cart, setCart] = useState([]);
    const [products] = useState ([
        {
    
                "id": 1,
                "prod_name": "Smart Watch1",
                "prod_desc": "blahh blahhhhhhhh blahhhh",
                "price": 999,
                "image" : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80"
                
        },
        {
    
            "id": 2,
            "prod_name": "Smart Watch2",
            "prod_desc": "blahh blahhhhhhhh blahhhh",
            "price": 999,
            "image" : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80"
            
    }, {
    
        "id": 4,
        "prod_name": "Smart Watch4",
        "prod_desc": "blahh blahhhhhhhh blahhhh",
        "price": 999,
        "image" : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80"
        
},
{
    
    "id": 5,
    "prod_name": "Smart Watch5",
    "prod_desc": "blahh blahhhhhhhh blahhhh",
    "price": 999,
    "image" : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80"
    
},
{
    
    "id": 6,
    "prod_name": "Smart Watch6",
    "prod_desc": "blahh blahhhhhhhh blahhhh",
    "price": 999,
    "image" : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80"
    
},{
    
    "id": 7,
    "prod_name": "Smart Watch7",
    "prod_desc": "blahh blahhhhhhhh blahhhh",
    "price": 999,
    "image" : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80"
    
},
{
    
    "id": 8,
    "prod_name": "Smart Watch8",
    "prod_desc": "blahh blahhhhhhhh blahhhh",
    "price": 999,
    "image" : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80"
    
},
{
    
    "id": 9,
    "prod_name": "Smart Watch9",
    "prod_desc": "blahh blahhhhhhhh blahhhh",
    "price": 999,
    "image" : "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=363&q=80" 
},
    ]);

    const addToCart = (product)=>{
        console.log("We are in add to cart");
        setCart([...cart, product]);
    }

    return (
        <div className="posts">
            
            <div className="cart-display">
            <h1>Products</h1>
               <h5>Go to Cart ({cart.length})</h5> <img src="https://celestialthings.netlify.app/static/media/shopping-cart.0b8fa688.svg"  alt="cart" />
            </div>
            <div className="products">
            {products.map((product) => (
                <div className="product">
                    <h3>{product.prod_name}</h3>
                    <h4>{product.prod_desc}</h4>
                    <h5>{product.price}</h5>
                    <div className="product_img">
                    <img src= {product.image} alt={product.name} className="prod_img" />
                    </div>
                    <button className="button-add-to-cart"
                    onClick = {()=> addToCart(product)}>
                    
                   Add to cart
                   </button>
                </div>
            ))}
            </div>
    
    </div>
    )
}

export default Colelctions; 

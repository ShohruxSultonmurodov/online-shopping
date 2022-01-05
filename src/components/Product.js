import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {addToCart} from '../store/cartproduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product({product, cartProducts, addToCart}) {
    function addProduct(item) {
        let cartProducts1 = [...cartProducts];
        cartProducts1.push(item);
        addToCart(cartProducts1);
        localStorage.setItem('cartproducts', JSON.stringify(cartProducts1));
        toast.success("Mahsulot savatchaga qo'shildi");
    }
    return <div>
            <Link to={'/:'+product.id}>
                <img src={product.imgUrl} />
                <h2 className="title" >{product.title}</h2>
            </Link>
            <h3 className="price">{product.price} so'm </h3>
            <button onClick={()=>addProduct({...product, quantity:1})} className="add-cart">Savatchaga qo'shish</button>
            
        </div>
}
export default connect(({cartproduct:{cartProducts}})=>({cartProducts}),{addToCart} )(Product);
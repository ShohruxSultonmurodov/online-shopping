import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import deleteIcon from '../image/bin.png';
import {deleteToCart} from '../store/cartproduct';
import {setIsOpen} from '../store/cart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import empty from '../image/empty.png';
function Cart({isOpen, cartProducts, deleteToCart, setIsOpen}) {
    const [amount, setAmount] = useState(0);
    useEffect(()=>{
        setAmount(0);
        for( let k of cartProducts) {
            setAmount(p=>p+k.price);
        }
    }, [cartProducts]);
    function deleteProduct(i) {
        let cartProducts1 = [...cartProducts];
        cartProducts1.splice(i,1);
        deleteToCart(cartProducts1);
        localStorage.setItem('cartproducts', JSON.stringify(cartProducts1));
    }
    function deleteAll() {
        let cartProducts1 = [...cartProducts];
        cartProducts1=[];
        deleteToCart(cartProducts1);
        localStorage.setItem('cartproducts', JSON.stringify(cartProducts1));
    }
    function send(){
        toast.success('Buyurtmangiz qabul qilindi xaridingiz uchun raxmat!')
        setIsOpen(!isOpen);
    }
    return <div className={`cart ${isOpen?'show-cart':''}`}>
        <h1 className='cart-title'>Sizning savatchangiz</h1>
        {
            cartProducts.length
            ?
            <div className='cart-content'>
            {
                cartProducts.map((product, i)=>{
                    return <div className='cart-products' key={i}>
                        <div className='img-content'>
                            <img src={product.imgUrl} />
                        </div>
                        <div className='text-content'>
                            <h3> {product.title}</h3>
                            <div className='price-delete'>
                                <h4> Narxi: {product.price} UZS </h4>
                                <button onClick={()=>deleteProduct(i)} > <img src={deleteIcon} /> o'chirish</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        :
        <div className='empty'>
            <img className='empty-img' src={empty} />
        </div>
        }
        {
            cartProducts.length
            ?
            <div className='cart-footer'>
                <h4 className='amount'>Jami hisob: {amount.toFixed(2)} UZS</h4>
                <div className='footer-btns'>
                    <button onClick={deleteAll} className='clean-btn'>Hammasini o'chirish</button>
                    <button onClick={send} className='send-btn'>Buyurtma berish</button>
                </div>
            </div>
            :
            null
        }
    </div>
}
export default connect(({cart:{isOpen}, cartproduct:{cartProducts}})=>({isOpen, cartProducts}), {deleteToCart, setIsOpen})(Cart);
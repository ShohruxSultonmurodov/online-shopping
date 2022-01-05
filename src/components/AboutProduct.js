import React from "react";
import {connect} from 'react-redux';
import {addToCart} from '../store/cartproduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AboutProduct({productInfo, cartProducts, addToCart}) {
    function addProduct(item) {
        let cartProducts1 = [...cartProducts];
        cartProducts1.push(item);
        addToCart(cartProducts1);
        localStorage.setItem('cartproducts', JSON.stringify(cartProducts1));
        toast.success("Mahsulot savatchaga qo'shildi");
    }
    const {features, imgUrl, price, title, brandImgUrl} = productInfo;
    return <div className="info-container">
        <div className="product-info">
            <img className="product-img" src={imgUrl} />
            <h1>{title}</h1>
            <h2><span>Narxi:</span> {price} UZS</h2>
            <img className="brand-img" src={brandImgUrl} />
        </div>
        <div className="product-features">
            <h1>Mahsulotning xususiyatlari</h1>
            {
                features.map(faeture=><div key={faeture.id} className="faeture">
                        <span className="faeture-name">{faeture.featureName} </span>
                        .................................
                        <span className="faeture-val"> {faeture.featureVal}</span>
                    </div>
                )
            }
            <button onClick={()=>addProduct(productInfo)} className="add-cart">Savatchaga qo'shish</button>
        </div>
    </div>
}
export default connect(({productInfo:{productInfo},cartproduct:{cartProducts}})=>({productInfo, cartProducts}), {addToCart})(AboutProduct);
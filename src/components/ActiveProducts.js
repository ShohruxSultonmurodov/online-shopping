import React from "react";
import Product from "./Product";
import {connect} from 'react-redux';
import {editinfo} from '../store/aboutproduct';
function ActiveProduct({activeProducts, editinfo}) {
    return <div className="active-products">
        {
           activeProducts.length
           ? 
           activeProducts.map((product)=>{
                return <div onClick={()=>editinfo(product)}  className="product-card" key={product.id}>
                    <Product product={product} />
                </div> 
            })
            :
            '' 
        }
    </div>
}

export default connect(({productInfo:{productInfo}})=>({productInfo}), {editinfo})(ActiveProduct);
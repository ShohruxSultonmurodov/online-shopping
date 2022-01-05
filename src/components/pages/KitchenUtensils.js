import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getKitchenutensils} from '../../store/kitchenutensil';
import ActiveProduct from '../ActiveProducts';
function KitchenUtensils({kitchenutensils ,getKitchenutensils}) {
    const [activeProducts, setActiveProducts] = useState('');
    useEffect(()=>{
        getKitchenutensils();
    }, []);
    useEffect(()=>{
        setActiveProducts(kitchenutensils.cooker ? kitchenutensils.cooker:'');
    }, [kitchenutensils]);
    return <div>
        <div className='directions'>
            <button onClick={()=>setActiveProducts(kitchenutensils.cooker)}>Plitalar</button>
            <button onClick={()=>setActiveProducts(kitchenutensils.fridges)}>Muzlatgichlar</button>
        </div>
        <ActiveProduct activeProducts={activeProducts} />
    </div>
}

export default connect(({kitchenutensils:{kitchenutensils}})=>({kitchenutensils}), {getKitchenutensils})(KitchenUtensils);
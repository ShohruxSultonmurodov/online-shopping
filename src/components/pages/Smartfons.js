import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmartfons} from '../../store/smartfons';
import ActiveProduct from '../ActiveProducts';
function Smartfons({smartfons ,getSmartfons}) {
    const [activeProducts, setActiveProducts] = useState('');
    useEffect(()=>{
        getSmartfons();
    }, []);
    useEffect(()=>{
        setActiveProducts(smartfons.smartfons ? smartfons.smartfons:'');
    }, [smartfons]);
    return <div className='smartfons'>
        <div className='directions'>
            <button onClick={()=>setActiveProducts(smartfons.smartfons)}>Smartfonlar</button>
            <button onClick={()=>setActiveProducts(smartfons.tablets)}>Planshetlar</button>
            <button onClick={()=>setActiveProducts(smartfons.earphones)}>Quloqchinlar</button>
            <button onClick={()=>setActiveProducts(smartfons.smartwatchs)}>Aqlli soatlar</button>
        </div>
        <ActiveProduct activeProducts={activeProducts} />
    </div>
}

export default connect(({smartfons:{smartfons}})=>({smartfons}), {getSmartfons})(Smartfons);
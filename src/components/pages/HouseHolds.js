import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getHouseholds} from '../../store/household';
import ActiveProduct from '../ActiveProducts';
function HouseHolds({households ,getHouseholds}) {
    const [activeProducts, setActiveProducts] = useState('');
    useEffect(()=>{
        getHouseholds();
    }, []);
    useEffect(()=>{
        setActiveProducts(households.exhausters ? households.exhausters:'');
    }, [households]);
    console.log(households);
    return <div>
       <div className='directions'>
            <button onClick={()=>setActiveProducts(households.exhausters)}>Changyutgichlar</button>
            <button onClick={()=>setActiveProducts(households.washingcars)}>Kir yuvish mashinalari</button>
            
        </div>
        <ActiveProduct activeProducts={activeProducts} />
    </div>
}

export default connect(({households:{households}})=>({households}), {getHouseholds})(HouseHolds);
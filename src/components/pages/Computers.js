import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getComputers} from '../../store/computer';
import ActiveProduct from '../ActiveProducts';
function Computers({computers ,getComputers}) {
    const [activeProducts, setActiveProducts] = useState('');
    useEffect(()=>{
        getComputers();
    }, []);
    useEffect(()=>{
        setActiveProducts(computers.laptops ? computers.laptops:'');
    }, [computers]);
    // console.log(computers);
    return <div>
        <div className='directions'>
            <button onClick={()=>setActiveProducts(computers.laptops)}>Noutbuklar</button>
            <button onClick={()=>setActiveProducts(computers.monoblocks)}>Monoblokar</button>
        </div>
        <ActiveProduct activeProducts={activeProducts} />
    </div>
}

export default connect(({computers:{computers}})=>({computers}), {getComputers})(Computers);
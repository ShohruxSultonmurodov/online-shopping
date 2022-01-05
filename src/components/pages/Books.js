import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../store/book'
import ActiveProduct from '../ActiveProducts';
function Books({books ,getBooks}) {
    const [activeProducts, setActiveProducts] = useState('');
    useEffect(()=>{
        getBooks();
    }, []);
    useEffect(()=>{
        setActiveProducts(books.business ? books.business:'');
    }, [books]);
    return <div className='books'>
        <div className='directions'>
            <button onClick={()=>setActiveProducts(books.business)}>Biznes kitoblar</button>
            <button onClick={()=>setActiveProducts(books.literature)}>Adabiyotlar</button>
            <button onClick={()=>setActiveProducts(books.personal)}>Shaxsiy rivojlanishga oid kitoblar</button>
            <button onClick={()=>setActiveProducts(books.science)}>Ilm fanga oid kitoblar</button>
        </div>
        <ActiveProduct activeProducts={activeProducts} />
    </div>
}

export default connect(({books:{books}})=>({books}), {getBooks})(Books);
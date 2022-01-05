import {configureStore} from '@reduxjs/toolkit';
import getData from './getData';
import books from './book';
import computers from './computer';
import households from './household';
import kitchenutensils from './kitchenutensil';
import smartfons from './smartfons';
import productInfo from './aboutproduct';
import cart from './cart';
import cartproduct from './cartproduct';

export default configureStore({
    reducer:{
        books,
        computers,
        households,
        kitchenutensils,
        smartfons,
        productInfo,
        cart,
        cartproduct
    },
    middleware:[
        getData
    ]
});
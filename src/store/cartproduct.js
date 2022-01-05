import {createSlice} from '@reduxjs/toolkit';
const cartproduct = createSlice({
    name:'smartfon',
    initialState:{
        cartProducts:JSON.parse(localStorage.getItem('cartproducts'))?JSON.parse(localStorage.getItem('cartproducts')):[],
    },
    reducers:{
        addToCart:(state, action)=>{
            state.cartProducts=action.payload
        },
        deleteToCart:(state, action)=>{
            state.cartProducts=action.payload
        }
    }
});

export const {addToCart, deleteToCart} = cartproduct.actions;
export default cartproduct.reducer;
import {createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
    name:'cart',
    initialState:{
        isOpen:false
    },
    reducers:{
        setIsOpen:(state, action)=>{
            state.isOpen=action.payload
        }
    }
});
export const {setIsOpen} = cart.actions;
export default cart.reducer;
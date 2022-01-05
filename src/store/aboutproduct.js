import {createSlice} from '@reduxjs/toolkit';

const info = createSlice({
    name:'aboutproduct',
    initialState:{
        productInfo:''
    },
    reducers:{
        editinfo:(state, action)=>{
            state.productInfo=action.payload
        }
    }
});
export const {editinfo} = info.actions;
export default info.reducer;
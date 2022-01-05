import {createSlice} from '@reduxjs/toolkit';
import { apiCall } from './api';

const computer = createSlice({
    name:'computer',
    initialState:{
        computers:[]
    },
    reducers:{
        getFromFirebase:(state, action)=>{
            state.computers=action.payload
        }
    }
});

export const getComputers=()=>apiCall({
    collectionType:'computers',
    onSuccess:computer.actions.getFromFirebase.type
});
export default computer.reducer;
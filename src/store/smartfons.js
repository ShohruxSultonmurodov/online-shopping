import {createSlice} from '@reduxjs/toolkit';
import { apiCall } from './api';

const smartfon = createSlice({
    name:'smartfon',
    initialState:{
        smartfons:[]
    },
    reducers:{
        getFromFirebase:(state, action)=>{
            state.smartfons=action.payload
        }
    }
});

export const getSmartfons=()=>apiCall({
    collectionType:'smartfons',
    onSuccess:smartfon.actions.getFromFirebase.type
});
export default smartfon.reducer;
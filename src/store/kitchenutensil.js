import {createSlice} from '@reduxjs/toolkit';
import { apiCall } from './api';

const kitchenutensil = createSlice({
    name:'kitchenutensil',
    initialState:{
        kitchenutensils:[]
    },
    reducers:{
        getFromFirebase:(state, action)=>{
            state.kitchenutensils=action.payload
        }
    }
});

export const getKitchenutensils=()=>apiCall({
    collectionType:'kitchenutensils',
    onSuccess:kitchenutensil.actions.getFromFirebase.type
});
export default kitchenutensil.reducer;
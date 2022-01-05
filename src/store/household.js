import {createSlice} from '@reduxjs/toolkit';
import { apiCall } from './api';

const household = createSlice({
    name:'household',
    initialState:{
        households:[]
    },
    reducers:{
        getFromFirebase:(state, action)=>{
            state.households=action.payload
        }
    }
});

export const getHouseholds=()=>apiCall({
    collectionType:'households',
    onSuccess:household.actions.getFromFirebase.type
});
export default household.reducer;
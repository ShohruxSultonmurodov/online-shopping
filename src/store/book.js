import {createSlice} from '@reduxjs/toolkit';
import { apiCall } from './api';

const book = createSlice({
    name:'book',
    initialState:{
        books:[]
    },
    reducers:{
        getFromFirebase:(state, action)=>{
            state.books=action.payload
        }
    }
});

export const getBooks=()=>apiCall({
    collectionType:'books',
    onSuccess:book.actions.getFromFirebase.type
});
export default book.reducer;
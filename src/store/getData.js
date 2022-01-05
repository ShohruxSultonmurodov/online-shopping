import { db } from '../data/firebase';
import {collection, getDocs} from 'firebase/firestore';

const getData=({dispatch})=>(next)=>(action)=>{
    if(action.type!=='api/apiCall'){
        next(action);
        return
    }
    next(action);
    const {collectionType, onSuccess} = action.payload;
    let productRef = collection(db, collectionType);
    const getProducts = async ()=>{
        const data = await getDocs(productRef);
        let result =  data.docs.map((doc)=> ({...doc.data()}));
        dispatch({
            type:onSuccess,
            payload:result[0]
        })
    }
    getProducts();
}
export default getData;
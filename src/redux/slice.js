import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[]
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
 
        additem:(state,action) => {
            //state.value += 1;
            console.log(action);
            state.ites.push(action.payload)
        },
        
        removeitem:(state) => {
           state.value>0? state.value -= 1:null;
        },
        
        clearallitem:(state) => {
            state.value = 0;
        }

    }

})
export const {additem,removeitem,clearallitem} = cart.actions
export default cart.reducer
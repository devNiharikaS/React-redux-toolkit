import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        additem: (state) => {
            state.value += 1;
        },
        
        removeitem: (state) => {
           state.value>0? state.value -= 1:null;
        },
        
        clearallitem: (state) => {
            state.value = 0;
        }

    }

})
export const {additem,removeitem,clearallitem} = cart.actions
export default cart.reducer
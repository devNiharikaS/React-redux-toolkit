import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
 
        additem:(state,action) => {
            //state.value += 1;
            console.log(action.payload);
            state.items.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        
        removeItem:(state,action) => {
         const cartData= state.items.filter(item=> item.id!=action.payload.id);
         state.items=cartData;
         localStorage.setItem('cart',JSON.stringify(cartData));
        },
        
        clearallitem:(state) => {
            state.items =[];
        }

    }

})
export const {additem,removeItem,clearallitem} = cart.actions

export default cart.reducer
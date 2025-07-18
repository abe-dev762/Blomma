import { createSlice } from '@reduxjs/toolkit'
import { products } from '../product';

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity, price} = action.payload;
            const existingItem = state.items.find(products => products.id === productId);
            if (existingItem) {
                existingItem.quantity ++;
            } else {
                state.items.push({productId, price, quantity: 1});
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = (state.items).filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state) {
            if(state.statusTab === false){
                state.statusTab = true;
            } else {
                state.statusTab = false;
            }
        }
    }
})

export const { addToCart, changeQuantity, toggleStatusTab } = CartSlice.actions;
export default CartSlice.reducer;

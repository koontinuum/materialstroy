import { createSlice } from "@reduxjs/toolkit"



const initialState = {
	cartItems : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
}

export const CartSlice = createSlice({
	name: 'cart',
	initialState,

	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id ===action.payload.id
			);
			if (itemIndex >= 0){
				state.cartItems[itemIndex].cartQuantity += 1;
			}else{
				const tempProduct ={...action.payload, cartQuantity: 1}
				state.cartItems.push(tempProduct)
			}
		},
		//removeItem: (state, action) => {
		//	const index = state.findIndex(item => item.id === action.payload);
		//	if (index !== -1) {
		//		state.splice(index, 1);
		//	}
		//},
		//updateQuantity: (state, action) => {
		//	const { id, quantity } = action.payload;
		//	const item = state.find(item => item.id === id);
		//	if (item) {
		//		item.quantity = quantity;
		//	}
		//},
	},
})

export const { addToCart } = CartSlice.actions

export default CartSlice.reducer
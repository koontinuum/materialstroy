import { createSlice } from "@reduxjs/toolkit"



const initialState = {
	cartItems: [
		{id: 1,
		img: '',
		category: "Пиломатериалы, ОСП, ДСП, Фанера",
		type: "ДВП",
		discription: "ДВП 2,5х1700х2745 тверд. марка Т гр Б — это строительный материал в плитах, получаемый путем горячего прессования из измельченныхдревесных волокон с добовлением воды, синтетических полимеров и специальных связующих добавок.Материал марки «Т» — это твердые плиты, которые отличаются повышенной прочностью.Данный универсальный материал широко используется как в профессиональном, так и в частном строительстве: для обшивки стен и потолков, установки перегородок.",
		title: "ДВП 2,5х1700х2745 тверд. марка Т гр Б",
		value: "сом/м3",
		price: 370
	}],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
}

export const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id ===action.payload.id);
			if (itemIndex >= 0){
				state.cartItems[itemIndex].cartQuantity += 1;
			}else{
				const tempProduct ={...action.payload, cartQuantity: 1}
				state.cartItems.push(tempProduct)}
			state.cartTotalQuantity += 1;
			state.cartTotalAmount += action.payload.price},
		removeCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			if (itemIndex >= 0) {
				if (state.cartItems[itemIndex].cartQuantity > 0) {
					state.cartItems[itemIndex].cartQuantity -= 1;
					if (state.cartItems[itemIndex].cartQuantity === 0) {
						state.cartItems.splice(itemIndex, 1);
					}
				}
			}
			if (state.cartItems.length === 0) {
				state.cartTotalQuantity = 0;
				state.cartTotalAmount = 0;
			} else {
				if (state.cartTotalQuantity > 0) {
					state.cartTotalQuantity -= 1;
				}
				if (state.cartTotalAmount > 0) {
					state.cartTotalAmount -= action.payload.price;
				}
			}
		}	
	},
})

export const { addToCart, removeCart } = CartSlice.actions

export default CartSlice.reducer
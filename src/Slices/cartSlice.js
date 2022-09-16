import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import data from '../cartItems';
import axios from 'axios';

const initialState = {
	cartItems: data,
	selectedQuantity: 2,
	total: 0,
	isLoading: false,
};

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
	'cart/getCartItems',
	async (name, thunkAPI) => {
		try {
			console.log(name);
			// console.log(thunkAPI);
			// console.log(thunkAPI.getState());
			// thunkAPI.dispatch(openModal());
			const resp = await axios(url);

			return resp.data;
		} catch (error) {
			return thunkAPI.rejectWithValue('something went wrong');
		}
	}
);
const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
			// state.selectedQuantity = 0;
			// return {
			// 	...initialState,
			// 	cartItems: [],
			// };
		},
		removeItem: (state, action) => {
			const filteredItem = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
			state.cartItems = filteredItem;
		},
		increaseQuantity: (state, action) => {
			const filteredItem = state.cartItems.find(
				(item) => item.id === action.payload
			);

			filteredItem.quantity = filteredItem.quantity + 1;
		},
		decreaseQuantity: (state, action) => {
			const filteredItem = state.cartItems.find(
				(item) => item.id === action.payload
			);

			filteredItem.quantity =
				filteredItem.quantity > 0 ? filteredItem.quantity - 1 : 0;
		},

		calculateTotals: (state) => {
			let amount = 0;
			let total = 0;
			state.cartItems.forEach((item) => {
				amount += item.quantity;
				total += item.quantity * item.price;
			});
			state.selectedQuantity = amount;
			state.total = total;
		},
	},
});
//console.log(cartSlice);
export const {
	clearCart,
	removeItem,
	increaseQuantity,
	decreaseQuantity,
	calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;

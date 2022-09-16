import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	cartItems: [],
	selectedQuantity: 2,
	total: 0,
	isLoading: false,
};

const url = 'https://dummyjson.com/carts/1';

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
	extraReducers: {
		[getCartItems.pending]: (state) => {
			state.isLoading = true;
		},
		[getCartItems.fulfilled]: (state, action) => {
			console.log('action', action);
			state.isLoading = false;
			state.cartItems = action.payload.products;
		},
		[getCartItems.rejected]: (state) => {
			state.isLoading = false;
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

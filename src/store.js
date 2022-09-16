import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slices/cartSlice';
import modalSlice from './Slices/modalSlice';

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		modal: modalSlice,
	},
});

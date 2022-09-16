import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	clearCartModal: false,
	removeDeviceModal: false,
	deviceId: null,
};

export const modalSlice = createSlice({
	name: 'modalSlice',
	initialState,
	reducers: {
		closeClearCartModal: (state) => {
			state.clearCartModal = false;
		},
		openClearCartModal: (state) => {
			state.clearCartModal = true;
		},
		closeRemoveDeviceModal: (state) => {
			state.removeDeviceModal = false;
		},
		openRemoveDeviceModal: (state, action) => {
			console.log(action);
			state.deviceId = action.payload;
			state.removeDeviceModal = true;
		},
	},
});

export const {
	closeClearCartModal,
	openClearCartModal,
	closeRemoveDeviceModal,
	openRemoveDeviceModal,
} = modalSlice.actions;

export default modalSlice.reducer;

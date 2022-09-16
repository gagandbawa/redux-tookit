import { createSelector } from 'reselect';

const selectState = (state) => {
	console.log('state', state);
	return state || {};
};

const selectCart = createSelector(selectState, (state) =>
	console.log('ssss, state', state)
);

export const selectAmount = createSelector(
	selectCart,
	(cart) => cart?.amount || 50
);

export const selectTotal = createSelector(
	selectCart,
	(cart) => cart?.total || 20
);

export const selectTotalAmount = createSelector(
	selectAmount,
	selectTotal,
	(amount, total) => amount + total
);

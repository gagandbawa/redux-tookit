import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import CartItem from './CartItem';
import { openClearCartModal } from '../Slices/modalSlice';
import ClearCartModal from './ClearCartModal';
import RemoveDeviceModal from './RemoveDeviceModal';

export default function CartItems() {
	const dispatch = useDispatch();
	const { clearCartModal } = useSelector((state) => state.modal);
	const { removeDeviceModal } = useSelector((state) => state.modal);
	const { cartItems, total, selectedQuantity } = useSelector(
		(store) => store.cart
	);

	if (selectedQuantity < 1) {
		return (
			<section className='cart'>
				<header>
					<h2>your bag</h2>
					<h4 className='empty-cart'>is currently empty</h4>
				</header>
			</section>
		);
	}

	return (
		<>
			{clearCartModal && <ClearCartModal />}
			{removeDeviceModal && <RemoveDeviceModal cartItems={cartItems} />}
			<section className='cart'>
				<header>
					<h2>your bag</h2>
				</header>
				<div>
					{cartItems?.map((cartItem) => (
						<CartItem {...cartItem} key={cartItem.id} />
					))}
				</div>
				<footer>
					<hr />
					<div className='cart-total'>
						<h4>
							total <span>${total.toFixed(2)}</span>
						</h4>
					</div>
					<button
						className='btn clear-btn'
						onClick={() => {
							dispatch(openClearCartModal());
						}}
					>
						clear cart
					</button>
				</footer>
			</section>
		</>
	);
}

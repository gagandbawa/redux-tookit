import { useDispatch } from 'react-redux';
import { DownArrow, UpArrow } from '../icons';

import { increaseQuantity, decreaseQuantity } from '../Slices/cartSlice';

import { openRemoveDeviceModal } from '../Slices/modalSlice';
const CartItem = ({ id, img, title, price, quantity }) => {
	const dispatch = useDispatch();

	return (
		<>
			<article className='cart-item'>
				<img src={img} alt={title} />
				<div>
					<h4>{title}</h4>
					<h4 className='item-price'>${price}</h4>
					<button
						className='remove-btn'
						onClick={() => dispatch(openRemoveDeviceModal(id))}
					>
						remove
					</button>
				</div>
				<div>
					<button
						className='amount-btn'
						onClick={() => dispatch(increaseQuantity(id))}
					>
						<UpArrow />
					</button>
					<p className='amount'>{quantity}</p>
					<button
						className='amount-btn'
						onClick={() => dispatch(decreaseQuantity(id))}
					>
						<DownArrow />
					</button>
				</div>
			</article>
		</>
	);
};
export default CartItem;

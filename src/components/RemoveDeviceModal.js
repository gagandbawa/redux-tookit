import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../Slices/cartSlice';
import { closeRemoveDeviceModal } from '../Slices/modalSlice';

const Modal = (props) => {
	const dispatch = useDispatch();
	const { deviceId } = useSelector((state) => state.modal);
	const device = props.cartItems.find((item) => item.id === deviceId);

	return (
		<aside className='modal-container'>
			<div className='modal'>
				<h4>remove {device.title} from your shopping cart?</h4>
				<div className='btn-container'>
					<button
						type='button'
						className='btn confirm-btn'
						onClick={() => {
							dispatch(removeItem(device.id));
							dispatch(closeRemoveDeviceModal());
						}}
					>
						confirm
					</button>
					<button
						type='button'
						className='btn clear-btn'
						onClick={() => {
							dispatch(closeRemoveDeviceModal());
						}}
					>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
};
export default Modal;

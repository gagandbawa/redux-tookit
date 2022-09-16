import CartItems from './CartItems';
import Navbar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from '../Slices/cartSlice';

function App() {
	const { cartItems = [] } = useSelector((state) => state?.cart || {});

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);

	return (
		<div>
			<Navbar />
			<CartItems />
		</div>
	);
}
export default App;

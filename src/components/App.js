import CartItems from './CartItems';
import Navbar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals, getCartItems } from '../Slices/cartSlice';

function App() {
	const { cartItems = [], isLoading } = useSelector(
		(state) => state?.cart || {}
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);

	useEffect(() => {
		dispatch(getCartItems());
	}, []);
	if (isLoading) {
		return <div>Loading.....</div>;
	}
	return (
		<div>
			<Navbar />
			<CartItems />
		</div>
	);
}
export default App;

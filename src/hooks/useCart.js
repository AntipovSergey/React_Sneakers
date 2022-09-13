import { useContext } from 'react';
import { AppContext } from '../App';

export const useCart = () => {
	const { cartItems, setCartItems } = useContext(AppContext);
	const totalPrice = cartItems.reduce((acc, obj) => acc + obj.price, 0);

	return { cartItems, setCartItems, totalPrice };
};

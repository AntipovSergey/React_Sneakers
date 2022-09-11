import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		axios
			.get('https://631c45691b470e0e12fdff37.mockapi.io/items')
			.then(({ data: items }) => setItems(items));

		axios
			.get('https://631c45691b470e0e12fdff37.mockapi.io/cart')
			.then(({ data: items }) => setCartItems(items));

		axios
			.get('https://631c45691b470e0e12fdff37.mockapi.io/favorites')
			.then(({ data: items }) => setFavorites(items));
	}, []);

	const handleCart = () => {
		setCartOpened(!cartOpened);
		if (cartOpened) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	};

	const onAddToCart = obj => {
		axios.post('https://631c45691b470e0e12fdff37.mockapi.io/cart', obj);
		setCartItems(prev => [...prev, obj]);
	};

	const onRemoveItem = id => {
		axios.delete(`https://631c45691b470e0e12fdff37.mockapi.io/cart/${id}`);
		setCartItems(prev => prev.filter(item => item.id !== id));
	};

	const onAddToFavorite = async obj => {
		try {
			if (favorites.find(favObj => favObj.id === obj.id)) {
				axios.delete(
					`https://631c45691b470e0e12fdff37.mockapi.io/favorites/${obj.id}`
				);
				setFavorites(prev => prev.filter(item => item.id !== obj.id));
			} else {
				const { data } = await axios.post(
					'https://631c45691b470e0e12fdff37.mockapi.io/favorites',
					obj
				);
				setFavorites(prev => [...prev, data]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onChangeSearchInput = event => {
		setSearchValue(event.target.value);
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Drawer
					handleCart={handleCart}
					items={cartItems}
					onRemoveItem={onRemoveItem}
				/>
			)}
			<Header handleCart={handleCart} />
			<Routes>
				<Route
					path='/'
					exact
					element={
						<Home
							items={items}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onAddToCart={onAddToCart}
						/>
					}
				/>
				<Route
					path='/favorites'
					exact
					element={
						<Favorites
							favorites={favorites}
							onAddToFavorite={onAddToFavorite}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;

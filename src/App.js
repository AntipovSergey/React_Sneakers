import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

export const AppContext = createContext({});

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);

			const cartResponse = await axios.get(
				'https://631c45691b470e0e12fdff37.mockapi.io/cart'
			);

			const favoritesResponse = await axios.get(
				'https://631c45691b470e0e12fdff37.mockapi.io/favorites'
			);

			const itemsResponse = await axios.get(
				'https://631c45691b470e0e12fdff37.mockapi.io/items'
			);

			setIsLoading(false);

			setCartItems(cartResponse.data);
			setFavorites(favoritesResponse.data);
			setItems(itemsResponse.data);
		}

		fetchData();
	}, []);

	const handleCart = () => {
		setCartOpened(!cartOpened);
		if (cartOpened) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	};

	const onAddToCart = async obj => {
		try {
			console.log(obj);
			if (cartItems.find(cartObj => Number(cartObj.id) === Number(obj.id))) {
				axios.delete(
					`https://631c45691b470e0e12fdff37.mockapi.io/cart/${obj.id}`
				);
				setCartItems(prev =>
					prev.filter(item => Number(item.id) !== Number(obj.id))
				);
			} else {
				const { data } = await axios.post(
					'https://631c45691b470e0e12fdff37.mockapi.io/cart',
					obj
				);
				setCartItems(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в корзину', error);
		}
	};

	const onRemoveItem = id => {
		axios.delete(`https://631c45691b470e0e12fdff37.mockapi.io/cart/${id}`);
		setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
	};

	const onAddToFavorite = async obj => {
		try {
			if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
				axios.delete(
					`https://631c45691b470e0e12fdff37.mockapi.io/favorites/${obj.id}`
				);
				setFavorites(prev =>
					prev.filter(item => Number(item.id) !== Number(obj.id))
				);
			} else {
				const { data } = await axios.post(
					'https://631c45691b470e0e12fdff37.mockapi.io/favorites',
					obj
				);
				setFavorites(prev => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в избранное', error);
		}
	};

	const onChangeSearchInput = event => {
		setSearchValue(event.target.value);
	};

	const isItemAdded = id => {
		return cartItems.some(obj => Number(obj.id) === Number(id));
	};
	return (
		<AppContext.Provider
			value={{
				cartItems,
				favorites,
				items,
				isItemAdded,
				onAddToFavorite,
				handleCart,
				setCartItems,
			}}
		>
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
								cartItems={cartItems}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onChangeSearchInput={onChangeSearchInput}
								onAddToFavorite={onAddToFavorite}
								onAddToCart={onAddToCart}
								isLoading={isLoading}
							/>
						}
					/>
					<Route path='/favorites' exact element={<Favorites />} />
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;

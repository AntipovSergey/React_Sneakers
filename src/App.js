import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		axios
			.get('https://631c45691b470e0e12fdff37.mockapi.io/items')
			.then(({ data: items }) => setItems(items));

		axios
			.get('https://631c45691b470e0e12fdff37.mockapi.io/cart')
			.then(({ data: items }) => setCartItems(items));
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
		// setCartItems(prev => [...prev, obj]);
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
			<div className='content p-40'>
				<div className='d-flex justify-between align-center mb-40'>
					<h1>
						{searchValue ? `Поиск по: "${searchValue}"` : 'Все кроссовки'}
					</h1>
					<div className='search-block d-flex align-center'>
						<img src='img/search.svg' alt='search' width={14} height={14} />
						{searchValue && (
							<img
								className='clear cu-p'
								src='img/close.svg'
								alt='close'
								width={22}
								height={22}
								onClick={() => setSearchValue('')}
							/>
						)}
						<input
							type='text'
							placeholder='Поиск...'
							onChange={onChangeSearchInput}
							value={searchValue}
						/>
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					{items
						.filter(({ title }) =>
							title.toLowerCase().includes(searchValue.toLowerCase())
						)
						.map(item => (
							<Card
								key={item.imageUrl}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								onFavorite={() => console.log('Добавили в закладки')}
								onPlus={item => onAddToCart(item)}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;

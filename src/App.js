import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		axios
			.get('https://631c45691b470e0e12fdff37.mockapi.io/items')
			.then(({ data: items }) => setItems(items));
	}, []);

	const handleCart = () => {
		setCartOpened(!cartOpened);
	};

	const onAddToCart = obj => {
		setCartItems(prev => [...prev, obj]);
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && <Drawer handleCart={handleCart} items={cartItems} />}
			<Header handleCart={handleCart} />
			<div className='content p-40'>
				<div className='d-flex justify-between align-center mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex align-center'>
						<img src='img/search.svg' alt='search' width={14} height={14} />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					{items.map((item, index) => (
						<Card
							key={index}
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

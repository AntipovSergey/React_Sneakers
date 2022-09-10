import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		axios
			.get('https://631c45691b470e0e12fdff37.mockapi.io/items')
			.then(({ data }) => setItems(data));
	}, []);

	const handleCart = () => {
		setCartOpened(!cartOpened);
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && <Drawer handleCart={handleCart} />}
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
					{items.map((obj, index) => (
						<Card
							key={index}
							title={obj.title}
							price={obj.price}
							imageUrl={obj.imageUrl}
							onFavorite={() => console.log('Добавили в закладки')}
							onPlus={() => console.log('Добавили в корзину')}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

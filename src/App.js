import { useState } from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	const arr = [
		{
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			price: 12999,
			imageUrl: '/img/sneakers/1.jpg',
		},
		{
			title: 'Мужские Кроссовки Nike Air Max 270',
			price: 12999,
			imageUrl: '/img/sneakers/2.jpg',
		},
		{
			title: 'Мужские Кроссовки Nike Blazer Mid',
			price: 8490,
			imageUrl: '/img/sneakers/3.jpg',
		},
		{
			title: 'Кроссовки Puma X Aka Boku Future Rider',
			price: 8999,
			imageUrl: '/img/sneakers/4.jpg',
		},
	];

	const [cartOpened, setCartOpened] = useState(false);

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
					{arr.map((obj, index) => (
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

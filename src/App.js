import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<div className='content p-40'>
				<div className='d-flex justify-between align-center mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex align-center'>
						<img src='img/search.svg' alt='search' width={14} height={14} />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					<Card
						title={'Мужские Кроссовки Nike Blazer Mid Suede'}
						price={12999}
						imageUrl={'/img/sneakers/1.jpg'}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

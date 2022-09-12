import React from 'react';
import Card from '../components/Card';

function Home({
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	items,
	onAddToFavorite,
	onAddToCart,
	isLoading,
}) {
	const renderItems = () => {
		return (
			isLoading
				? [...Array(8)]
				: items.filter(({ title }) =>
						title.toLowerCase().includes(searchValue.toLowerCase())
				  )
		).map((item, index) => (
			<Card
				key={index}
				onFavorite={item => onAddToFavorite(item)}
				onPlus={item => onAddToCart(item)}
				loading={isLoading}
				{...item}
			/>
		));
	};

	return (
		<div className='content p-40'>
			<div className='d-flex justify-between align-center mb-40'>
				<h1>{searchValue ? `Поиск по: "${searchValue}"` : 'Все кроссовки'}</h1>
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
			<div className='d-flex flex-wrap'>{renderItems()}</div>
		</div>
	);
}

export default Home;

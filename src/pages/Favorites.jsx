import React, { useContext } from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';

function Favorites() {
	const { favorites, onAddToFavorite } = useContext(AppContext);

	return (
		<div className='content p-40'>
			<div className='d-flex justify-between align-center mb-40'>
				<h1>Мои закладки</h1>
			</div>
			<div className='d-flex flex-wrap'>
				{favorites.map(item => (
					<Card
						key={item.imageUrl}
						favorited={true}
						onFavorite={item => onAddToFavorite(item)}
						{...item}
					/>
				))}
			</div>
		</div>
	);
}

export default Favorites;

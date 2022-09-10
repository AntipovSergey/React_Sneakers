import React, { useState } from 'react';
import styles from './Card.module.scss';

const { card, favorite } = styles;

function Card({ title, price, imageUrl, onPlus, onFavorite }) {
	const [isAdded, setIsAdded] = useState(false);

	const onClickPlus = () => {
		onPlus({ title, price, imageUrl });
		setIsAdded(!isAdded);
	};

	return (
		<div className={card}>
			<div className={favorite}>
				<img
					src='/img/not-favorited-item.svg'
					alt='add to favorites'
					width={30}
					height={30}
					onClick={onFavorite}
				/>
			</div>
			<img src={imageUrl} alt='sneakers' width={133} height={112} />
			<h5>{title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img
					className='button'
					src={isAdded ? 'img/added-item.svg' : 'img/not-added-item.svg'}
					alt='plus'
					width={32}
					height={32}
					onClick={onClickPlus}
				/>
			</div>
		</div>
	);
}

export default Card;

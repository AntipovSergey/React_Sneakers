import React from 'react';
import styles from './Card.module.scss';

const { card, favorite } = styles;

function Card({ title, price, imageUrl, onClickPlus }) {
	return (
		<div className={card}>
			<div className={favorite}>
				<img
					src='/img/not-favorited-item.svg'
					alt='add to favorites'
					width={30}
					height={30}
				/>
			</div>
			<img src={imageUrl} alt='sneakers' width={133} height={112} />
			<h5>{title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<button className='button' onClick={onClickPlus}>
					<img src='img/not-added-item.svg' alt='plus' width={32} height={32} />
				</button>
			</div>
		</div>
	);
}

export default Card;

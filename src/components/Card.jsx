import React from 'react';

function Card({ title, price, imageUrl }) {
	return (
		<div className='card mb-50 mr-30'>
			<div className='favorite'>
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
				<button className='button'>
					<img src='img/not-added-item.svg' alt='plus' width={32} height={32} />
				</button>
			</div>
		</div>
	);
}

export default Card;

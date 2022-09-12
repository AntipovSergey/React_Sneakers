import React, { useContext } from 'react';
import { AppContext } from '../App';

function Info({ image, title, description }) {
	const { handleCart } = useContext(AppContext);
	return (
		<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
			<img
				className='mb-20'
				width={120}
				height={120}
				src={image}
				alt='empty cart'
			/>
			<h2>{title}</h2>
			<p className='opacity-6'>{description}</p>
			<button onClick={handleCart} className='greenButton button'>
				<img src='/img/arrow.svg' alt='arrow' />
				Вернуться назад
			</button>
		</div>
	);
}

export default Info;

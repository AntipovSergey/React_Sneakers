import React, { useContext, useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App';

const { card, favorite } = styles;

function Card({
	id,
	title,
	price,
	imageUrl,
	onPlus,
	onFavorite,
	favorited = false,
	loading = false,
}) {
	const { isItemAdded } = useContext(AppContext);

	const [isFavorite, setIsFavorite] = useState(favorited);

	const onClickPlus = () => {
		onPlus({ id, title, price, imageUrl });
	};

	const onClickFavorite = () => {
		onFavorite({ id, title, price, imageUrl });
		setIsFavorite(!isFavorite);
	};

	return (
		<div className={card}>
			{loading ? (
				<ContentLoader
					speed={2}
					width={155}
					height={250}
					viewBox='0 0 155 265'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
				>
					<rect x='1' y='0' rx='10' ry='10' width='155' height='155' />
					<rect x='0' y='167' rx='5' ry='5' width='155' height='15' />
					<rect x='0' y='187' rx='5' ry='5' width='100' height='15' />
					<rect x='1' y='234' rx='5' ry='5' width='80' height='25' />
					<rect x='124' y='230' rx='10' ry='10' width='32' height='32' />
				</ContentLoader>
			) : (
				<>
					<div className={favorite}>
						{onFavorite && (
							<img
								src={
									isFavorite
										? '/img/favorited-item.svg'
										: '/img/not-favorited-item.svg'
								}
								alt='add to favorites'
								width={30}
								height={30}
								onClick={onClickFavorite}
							/>
						)}
					</div>
					<img src={imageUrl} alt='sneakers' width={133} height={112} />
					<h5>{title}</h5>
					<div className='d-flex justify-between align-center'>
						<div className='d-flex flex-column'>
							<span>Цена:</span>
							<b>{price} руб.</b>
						</div>
						{onPlus && (
							<img
								className='button'
								src={
									isItemAdded(id)
										? 'img/added-item.svg'
										: 'img/not-added-item.svg'
								}
								alt='plus'
								width={32}
								height={32}
								onClick={onClickPlus}
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
}

export default Card;

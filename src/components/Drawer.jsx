import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import Info from './Info';
import axios from 'axios';

const delay = () =>
	new Promise((resolve, reject) => {
		setTimeout(resolve, 1000);
	});

function Drawer({ handleCart, items = [], onRemoveItem }) {
	const { setCartItems, cartItems } = useContext(AppContext);
	const [isOrderCompleted, setIsOrderCompleted] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const totalPrice = cartItems.reduce((acc, obj) => acc + obj.price, 0);

	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post(
				'https://631c45691b470e0e12fdff37.mockapi.io/orders',
				{ items: cartItems }
			);

			setOrderId(data.id);
			setIsOrderCompleted(true);
			setCartItems([]);

			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await axios.delete(
					`https://631c45691b470e0e12fdff37.mockapi.io/cart/${item.id}`
				);
				await delay();
			}
		} catch (error) {
			alert('Ошибка при создании заказа', error);
		}
		setIsLoading(false);
	};

	return (
		<div className='overlay'>
			<div className='drawer'>
				<div className='d-flex justify-between'>
					<h2 className='mb-30'>Корзина</h2>
					<img
						className='cu-p'
						src='/img/close.svg'
						alt='close'
						width={32}
						height={32}
						onClick={handleCart}
					/>
				</div>
				{items.length > 0 ? (
					<div className='itemsWrapper flex d-flex flex-column'>
						<div className='items flex'>
							{items.map(obj => (
								<div
									className='cartItem d-flex align-center mb-20'
									key={obj.title}
								>
									<div
										style={{ backgroundImage: `url(${obj.imageUrl})` }}
										className='cartItemImg'
									></div>
									<div className='mr-20 flex'>
										<p className='mb-5'>{obj.title}</p>
										<b>{obj.price} руб.</b>
									</div>
									<button className='button removeBtn'>
										<img
											onClick={() => onRemoveItem(obj.id)}
											src='/img/close.svg'
											alt='close'
											width={32}
											height={32}
										/>
									</button>
								</div>
							))}
						</div>
						<div className='cartTotalBlock'>
							<ul>
								<li>
									<span>Итого:</span>
									<div></div>
									<b>{totalPrice} руб. </b>
								</li>
								<li>
									<span>Налог 5%: </span>
									<div></div>
									<b>{Math.round((totalPrice / 100) * 5)} руб. </b>
								</li>
							</ul>
							<button
								disabled={isLoading}
								className='greenButton button'
								onClick={onClickOrder}
							>
								Оформить заказ
								<img
									src='/img/arrow.svg'
									alt='arrow'
									width={14}
									height={12}
								></img>
							</button>
						</div>
					</div>
				) : (
					<Info
						image={
							isOrderCompleted
								? '/img/success-order.jpg'
								: '/img/empty-cart.jpg'
						}
						title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
						description={
							isOrderCompleted
								? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
								: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
						}
					/>
				)}
			</div>
		</div>
	);
}

export default Drawer;

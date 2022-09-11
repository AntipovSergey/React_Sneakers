import React from 'react';

function Drawer({ handleCart, items = [], onRemoveItem }) {
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
					<div className='flex d-flex flex-column'>
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
									<b>21 498 руб. </b>
								</li>
								<li>
									<span>Налог 5%: </span>
									<div></div>
									<b>1074 руб. </b>
								</li>
							</ul>
							<button className='greenButton button'>
								Оформить заказ{' '}
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
					<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
						<img
							className='mb-20'
							width={120}
							height={120}
							src='/img/empty-cart.jpg'
							alt='empty cart'
						/>
						<p className='opacity-6'>
							Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ
						</p>
						<button onClick={handleCart} className='greenButton button'>
							<img src='/img/arrow.svg' alt='arrow' />
							Вернуться назад
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Drawer;

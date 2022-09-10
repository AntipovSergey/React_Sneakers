import React from 'react';

function Drawer({ handleCart, items = [] }) {
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
				<div className='items'>
					{items.map(({ imageUrl, title, price }) => (
						<div className='cartItem d-flex align-center mb-20'>
							<div
								style={{ backgroundImage: `url(${imageUrl})` }}
								className='cartItemImg'
							></div>
							<div className='mr-20 flex'>
								<p className='mb-5'>{title}</p>
								<b>{price} руб.</b>
							</div>
							<button className='button removeBtn'>
								<img src='/img/close.svg' alt='close' width={32} height={32} />
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
						<img src='/img/arrow.svg' alt='arrow' width={14} height={12}></img>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;

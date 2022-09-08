import React from 'react';

function Drawer() {
	return (
		<div style={{ display: 'none' }} className='overlay'>
			<div className='drawer'>
				<div className='d-flex justify-between'>
					<h2 className='mb-30'>Корзина</h2>
					<img
						className='cu-p'
						src='/img/close.svg'
						alt='close'
						width={32}
						height={32}
					/>
				</div>
				<div className='items'>
					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
							className='cartItemImg'
						></div>
						<div className='mr-20 flex'>
							<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<button className='button removeBtn'>
							<img src='/img/close.svg' alt='close' width={32} height={32} />
						</button>
					</div>
					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
							className='cartItemImg'
						></div>
						<div className='mr-20 flex'>
							<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<button className='button removeBtn'>
							<img src='/img/close.svg' alt='close' width={32} height={32} />
						</button>
					</div>
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

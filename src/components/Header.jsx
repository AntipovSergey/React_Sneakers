import React from 'react';

function Header() {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className='d-flex align-center cu-p'>
				<img
					className='mr-15'
					src='/img/logo.png'
					alt='logo'
					width={40}
					height={40}
				/>
				<div>
					<h3 className='text-uppercase'>React Sneakers</h3>
					<p className='opacity-5'>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className='headerRight d-flex align-center'>
				<li className='mr-30'>
					<img
						className='mr-10 cu-p'
						src='img/cart.svg'
						alt='cart'
						width={18}
						height={17}
					/>
					<span>1205 руб.</span>
				</li>
				<li className='mr-30'>
					<img
						className='cu-p'
						src='img/favorite.svg'
						alt='favorite'
						width={21}
						height={19}
					/>
				</li>
				<li>
					<img
						className='cu-p'
						src='img/profile.svg'
						alt='profile'
						width={20}
						height={20}
					/>
				</li>
			</ul>
		</header>
	);
}

export default Header;

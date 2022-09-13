import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import { useCart } from '../hooks/useCart';

function Header() {
	const { handleCart } = useContext(AppContext);
	const { totalPrice } = useCart();

	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to={'/'}>
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
			</Link>
			<ul className='headerRight d-flex align-center'>
				<li className='mr-30 cu-p' onClick={handleCart}>
					<img
						className='mr-10'
						src='img/cart.svg'
						alt='cart'
						width={18}
						height={17}
					/>
					<span>{totalPrice} руб.</span>
				</li>
				<Link to={'favorites'}>
					<li className='mr-30'>
						<img
							className='cu-p'
							src='img/favorite.svg'
							alt='favorite'
							width={21}
							height={19}
						/>
					</li>
				</Link>
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

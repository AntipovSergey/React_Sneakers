function App() {
	return (
		<div className='wrapper clear'>
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
							<img
								src='/img/arrow.svg'
								alt='arrow'
								width={14}
								height={12}
							></img>
						</button>
					</div>
				</div>
			</div>

			<header className='d-flex justify-between align-center p-40'>
				<div className='d-flex align-center'>
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
							className='mr-10'
							src='img/cart.svg'
							alt='cart'
							width={18}
							height={17}
						/>
						<span>1205 руб.</span>
					</li>
					<li className='mr-30'>
						<img src='img/favorite.svg' alt='favorite' width={21} height={19} />
					</li>
					<li>
						<img src='img/profile.svg' alt='profile' width={20} height={20} />
					</li>
				</ul>
			</header>
			<div className='content p-40'>
				<div className='d-flex justify-between align-center mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex align-center'>
						<img src='img/search.svg' alt='search' width={14} height={14} />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					<div className='card mb-50 mr-30'>
						<div className='favorite'>
							<img
								src='/img/not-favorited-item.svg'
								alt='add to favorites'
								width={30}
								height={30}
							/>
						</div>
						<img
							src='img/sneakers/1.jpg'
							alt='sneakers'
							width={133}
							height={112}
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img
									src='img/not-added-item.svg'
									alt='plus'
									width={32}
									height={32}
								/>
							</button>
						</div>
					</div>
					<div className='card mb-50 mr-30'>
						<div className='favorite'>
							<img
								src='/img/not-favorited-item.svg'
								alt='add to favorites'
								width={30}
								height={30}
							/>
						</div>
						<img
							src='img/sneakers/2.jpg'
							alt='sneakers'
							width={133}
							height={112}
						/>
						<h5>Мужские Кроссовки Nike Air Max 270</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img
									src='img/not-added-item.svg'
									alt='plus'
									width={32}
									height={32}
								/>
							</button>
						</div>
					</div>
					<div className='card mb-50 mr-30'>
						<div className='favorite'>
							<img
								src='/img/not-favorited-item.svg'
								alt='add to favorites'
								width={30}
								height={30}
							/>
						</div>
						<img
							src='img/sneakers/3.jpg'
							alt='sneakers'
							width={133}
							height={112}
						/>
						<h5>Мужские Кроссовки Nike Blazer Mid</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>8 499 руб.</b>
							</div>
							<button className='button'>
								<img
									src='img/not-added-item.svg'
									alt='plus'
									width={32}
									height={32}
								/>
							</button>
						</div>
					</div>
					<div className='card mb-50 mr-30'>
						<div className='favorite'>
							<img
								src='/img/not-favorited-item.svg'
								alt='add to favorites'
								width={30}
								height={30}
							/>
						</div>
						<img
							src='img/sneakers/4.jpg'
							alt='sneakers'
							width={133}
							height={112}
						/>
						<h5>Кроссовки Puma X Aka Boku Future Rider</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>8 999 руб.</b>
							</div>
							<button className='button'>
								<img
									src='img/not-added-item.svg'
									alt='plus'
									width={32}
									height={32}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

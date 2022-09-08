function App() {
	return (
		<div className='wrapper clear'>
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
							<button>
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
							<button>
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
							<button>
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
							<button>
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

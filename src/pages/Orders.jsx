import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

function Orders() {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);

				const { data } = await axios.get(
					'https://631c45691b470e0e12fdff37.mockapi.io/orders'
				);
				setOrders(data.reduce((acc, obj) => [...acc, ...obj.items], []));

				setIsLoading(false);
			} catch (error) {
				alert('Не удалось добавить в заказы', error);
			}
		})();
	}, []);
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>Мои заказы</h1>
			</div>

			<div className='d-flex flex-wrap'>
				{(isLoading ? [...Array(8)] : orders).map((item, index) => (
					<Card key={index} loading={isLoading} {...item} />
				))}
			</div>
		</div>
	);
}

export default Orders;

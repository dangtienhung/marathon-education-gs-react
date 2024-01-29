import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
	// useState: quản lý state của component
	const [number, setNumber] = useState(0);
	// useEffect: chạy 1 lần sau khi render
	// có 3 trường hợp
	// 1. không có tham số thứ 2: chạy sau khi render
	// useEffect(() => {
	// 	setInterval(() => {
	// 		console.log('interval');
	// 	}, 1000);
	// });
	// 2. có tham số thứ 2 là 1 mảng rỗng: chạy sau khi render
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await axios.get(' http://localhost:3000/products');
	// 		const data = response.data;
	// 		console.log('🚀 ~ fetchData ~ data:', data);
	// 	};
	// 	fetchData();
	// }, []);
	// 3. có tham số thứ 2 là 1 mảng có giá trị: chạy sau khi render
	const [productsList, setProductsList] = useState([]);
	console.log('🚀 ~ App ~ productsList:', productsList);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(' http://localhost:3000/products');
			const data = response.data;
			setProductsList(data);
		};
		fetchData();
	}, [number]);

	return (
		<div>
			{/* {data.map((value) => {
					return <div key={value.id}>{value.name}</div>;
				})} */}
			<div>number của tôi: {number}</div>
			<div>
				<Button variant="primary" onClick={() => setNumber(number + 1)}>
					Number
				</Button>
			</div>
			<Button as="a" variant="danger">
				Button as link aahihiih
			</Button>

			<div>
				{productsList.map((productItem) => {
					console.log(
						'🚀 ~ <div>{productsList.map ~ productItem:',
						productItem
					);
					return (
						<div key={Math.random()}>
							<p>{productItem.name}</p>
							<p>{productItem.price}</p>
							<img src={productItem.image} alt="" />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(0);
	// useState, useEffect

	function caculate() {
		console.log('caculate');
	}

	const [isShow, setIsShow] = useState(false);
	// useState: quản lý state của component
	const [number, setNumber] = useState();
	/*
	[
		{
			id
		}
	]
	*/
	// map
	// {}: object
	// key: value
	// []: array
	// ban đầu: number = 10
	// ấn button: number = 11 -> trạng thái mới
	const [data, setDate] = useState([
		{
			id: 1,
			name: 'Nguyen Van A',
		},
		{
			id: 2,
			name: 'Nguyen Van B',
		},
	]);
	return (
		<>
			<div>
				{data.map((value) => {
					console.log('🚀 ~ {data.map ~ value:', value);
					return <div key={value.id}>{value.name}</div>;
				})}
				<div>number của tôi: {number}</div>
				<div>
					{/* <Button variant="primary" onClick={() => setNumber(number + 1)}>
						Number
					</Button> */}
				</div>
				<Button as="a" variant="danger" onClick={() => setIsShow(true)}>
					Button as link aahihiih
				</Button>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			{isShow && (
				<img
					src="https://media.istockphoto.com/id/1585613131/vi/anh/l%C3%A1-m%C3%B9a-thu-tr%C3%AAn-n%E1%BB%81n-m%E1%BB%9D-m%C3%B9a-thu.jpg?s=1024x1024&w=is&k=20&c=VIdPb5IpUpBRKtAgUb5AuxBbUi-XZSEBn__FN8O9tsE="
					alt=""
					className="h-[200px] w-[200px]"
					style={{ height: '200px', width: '200px' }}
				/>
			)}
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;

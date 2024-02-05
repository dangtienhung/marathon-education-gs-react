import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const ListProduct = () => {
	const [proudcts, setProducts] = useState([]);
	console.log('🚀 ~ App ~ proudcts:', proudcts);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('http://localhost:3000/products');
			const data = response.data;
			setProducts(data);
		};
		fetchData();
	}, []);

	const handleDeleteProduct = async (id) => {
		console.log(id);
	};

	return (
		<div
			style={{
				padding: '40px',
			}}
		>
			<Button variant="primary">Add</Button>
			<Table
				striped
				bordered
				hover
				width={900}
				className="px-5"
				style={{
					padding: '40px',
				}}
			>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Pirce</th>
						<th>Image</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{proudcts &&
						proudcts.length > 0 &&
						proudcts.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>
									<img
										src={product.image}
										style={{
											height: '160px',
											width: '160px',
											objectFit: 'cover',
										}}
									/>
								</td>
								<td>
									<Button variant="primary">Edit</Button>
									<Button
										variant="danger"
										onClick={() => handleDeleteProduct(product.id)}
									>
										Delete
									</Button>
								</td>
							</tr>
						))}
				</tbody>
			</Table>
		</div>
	);
};

export default ListProduct;

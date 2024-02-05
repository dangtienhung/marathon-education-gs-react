import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { toast } from 'react-toastify';

const ListProduct = () => {
	const [proudcts, setProducts] = useState([]);
	console.log('🚀 ~ App ~ proudcts:', proudcts);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await axios.get('http://localhost:3000/products');
			const data = response.data;
			setProducts(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	const handleDeleteProduct = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/products/${id}`);

			const response = await axios.get('http://localhost:3000/products');
			const data = response.data;
			setProducts(data);

			toast.success('Product deleted successfully');
		} catch (error) {
			toast.error('Something went wrong');
		}
	};

	return (
		<div
			style={{
				padding: '40px',
			}}
		>
			<Link to={'/add-product'}>
				<Button variant="primary">Add</Button>
			</Link>
			{loading === true && <p>Loading...</p>}
			{loading !== true && (
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
			)}
		</div>
	);
};

export default ListProduct;

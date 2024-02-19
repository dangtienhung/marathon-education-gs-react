import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// props, children

const EditProduct = () => {
	const navigate = useNavigate();

	const param = useParams();
	const id = param.id;

	const [productName, setProductName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');

	const handleChangePrice = (event) => {
		const value = event.target.value;
		setPrice(value);
	};

	useEffect(() => {
		const fetchData = async () => {
			// get data product by id
			try {
				// khi mà lấy dữ liệu thành cong
				const response = await axios.get(
					`http://localhost:3000/products/${id}`
				);
				const data = response.data;
				setProductName(data.name);
				setPrice(data.price);
				setImage(data.image);
			} catch (error) {
				console.log('🚀 ~ fetchData ~ error:', error);
				// khi mà lấy dữ liệu thất bại
			}
		};
		fetchData();
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault(); // ngăn chặn sự kiện mặc định của form
		try {
			const data = {
				name: productName,
				price: price,
				image: image,
			};

			// update product
			const response = await axios.put(
				`http://localhost:3000/products/${id}`,
				data
			);
			console.log('🚀 ~ handleSubmit ~ response:', response);

			toast.success('Product updated successfully');

			navigate('/');
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
			<Form onSubmit={(event) => handleSubmit(event)}>
				<Form.Group className="mb-3">
					<Form.Label>Product Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter product name"
						value={productName}
						onChange={(event) => setProductName(event.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter price"
						value={price}
						onChange={(event) => handleChangePrice(event)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Image</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter image"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default EditProduct;

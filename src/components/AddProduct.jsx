import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddProduct = () => {
	const navigate = useNavigate();

	const [productName, setProductName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = {
				name: productName,
				price: price,
				image: image,
			};
			const response = await axios.post('http://localhost:3000/products', data);
			toast.success('Product added successfully');
			navigate('/');
		} catch (error) {
			console.log('🚀 ~ handleSubmit ~ error:', error);
			toast.error('Something went wrong');
		}
	};

	const handleChangePrice = (event) => {
		setPrice(event.target.value);
	};

	return (
		<div
			style={{
				padding: '40px',
			}}
		>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Product Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter product name"
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
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

export default AddProduct;

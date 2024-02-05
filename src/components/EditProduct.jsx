import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditProduct = () => {
	const navigate = useNavigate();

	const [productName, setProductName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');

	const handleChangePrice = (event) => {
		setPrice(event.target.value);
	};

	return (
		<div
			style={{
				padding: '40px',
			}}
		>
			<Form>
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

export default EditProduct;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddProduct = () => {
	const navigate = useNavigate();

	const PRESET_NAME = 'gs-001';
	const FOLDER_NAME = 'gs-001';
	const CLOUD_NAME = 'dcwdrvxdg';
	const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
	console.log('🚀 ~ AddProduct ~ api:', api);

	const [productName, setProductName] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState([]);

	const handleUpdateImage = async (event) => {
		const files = event.target.files;
		/* upload image to cloudinary */
		const formData = new FormData();

		formData.append('upload_preset', PRESET_NAME);
		formData.append('folder', FOLDER_NAME);

		for (const file of files) {
			formData.append('file', file);
			const response = await axios.post(api, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			const data = response.data;
			// setImage(data.url);
			setImage((prev) => [...prev, data.url]);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			if (image) {
				const data = {
					name: productName,
					price: price,
					image: image,
				};
				const response = await axios.post(
					'http://localhost:3000/products',
					data
				);
				toast.success('Product added successfully');
				navigate('/');
			}
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
			<h2 className="">Thêm sản phẩm</h2>
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
						type="file"
						placeholder="Enter image"
						// multiple
						onChange={(e) => handleUpdateImage(e)}
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

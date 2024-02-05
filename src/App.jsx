import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProduct';
import { ToastContainer } from 'react-toastify';

function App() {
	const routers = createBrowserRouter([
		{
			path: '/',
			element: <ListProduct />,
		},
		{
			path: '/add-product',
			element: <AddProduct />,
		},
	]);
	return (
		<>
			<RouterProvider router={routers} />
			<ToastContainer />
		</>
	);
}

export default App;

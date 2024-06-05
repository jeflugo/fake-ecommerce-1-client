import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Store from './pages/Store'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'
import ShoppingCart from './components/ShoppingCart'
import ProductDetails from './pages/ProductDetails'
import { useEffect, useState } from 'react'
import { client } from './lib/client'

function App() {
	const [products, setProducts] = useState()
	useEffect(() => {
		const productsQuery = `*[_type=="product"]{_id}`

		client.fetch(productsQuery).then(data => setProducts(data))
	}, [])
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					{products &&
						products.map(({ _id: id }, index) => (
							<Route
								key={index}
								path={`/store/${id}`}
								element={<ProductDetails id={id} />}
							/>
						))}

					{/* 404 */}
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</main>
			<Footer />
			<ShoppingCart />
		</>
	)
}

export default App

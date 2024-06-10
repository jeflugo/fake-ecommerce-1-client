import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Store from './pages/Store'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'
import Cart from './components/Cart'
import ProductDetails from './pages/ProductDetails'
import { useEffect, useState } from 'react'
import { client } from './lib/client'
import CartButton from './components/CartButton'
import { Toaster } from 'react-hot-toast'
import Success from './components/Success'

function App() {
	const [products, setProducts] = useState()
	useEffect(() => {
		const productsQuery = `*[_type=="product"]{_id}`

		client.fetch(productsQuery).then(data => setProducts(data))
	}, [])
	return (
		<>
			<Toaster position='top-center' />
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/successful-purchase' element={<Success />} />
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

			<CartButton />
			<Cart />
		</>
	)
}

export default App

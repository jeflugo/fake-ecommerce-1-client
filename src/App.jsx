import { Route, Routes } from 'react-router-dom'
import { lazy, useEffect, useState } from 'react'

import MainContainer from './components/MainContainer'
import { client } from './lib/client'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Home = lazy(() => import('./pages/Home'))
const Store = lazy(() => import('./pages/Store'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Success = lazy(() => import('./components/Success'))
const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))

const PageNotFound = lazy(() => import('./pages/PageNotFound'))

function App() {
	const [productsInfo, setProductsInfo] = useState()

	useEffect(() => {
		const infoQuery = '*[_type=="product"]{_id, slug}'
		client.fetch(infoQuery).then(data => setProductsInfo(data))
	}, [])

	return (
		<Routes>
			<Route path='/' element={<MainContainer />}>
				<Route path='/' element={<Home />} />
				<Route path='/store' element={<Store />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/successful-purchase' element={<Success />} />
				{productsInfo &&
					productsInfo.map(({ slug, _id }, index) => (
						<Route
							key={index}
							path={`/store/${slug.current}`}
							element={<ProductDetails slug={slug} _id={_id} />}
						/>
					))}

				{/* 404 */}
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	)
}

export default App

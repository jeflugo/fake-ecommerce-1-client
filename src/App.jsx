import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

import MainContainer from './components/MainContainer'
import useFetching from './hooks/useFetching'

const Home = lazy(() => import('./pages/Home'))
const Store = lazy(() => import('./pages/Store'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const Success = lazy(() => import('./components/Success'))
const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))

function App() {
	const [productsIds, error, isError, isLoading, isSuccess] = useFetching(
		'*[_type=="product"]{_id}',
	)
	return (
		<Routes>
			<Route path='/' element={<MainContainer />}>
				<Route path='/' element={<Home />} />
				<Route path='/store' element={<Store />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/successful-purchase' element={<Success />} />
				{isSuccess &&
					productsIds.map(({ _id: id }, index) => (
						<Route
							key={index}
							path={`/store/${id}`}
							element={<ProductDetails id={id} />}
						/>
					))}

				{/* 404 */}
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	)
}

export default App

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Store from './pages/Store'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/store' element={<Store />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App

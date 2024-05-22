import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'
const initialFormData = {
	user: '',
	password: '',
}
function Login() {
	const [formData, setFormData] = useState(initialFormData)
	const { user, password } = formData

	const handleChange = e => {
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}
	return (
		<>
			<Helmet>
				<title>glu - Login</title>
			</Helmet>
			<div className='py-6'>
				<Container cName='max-w-2xl'>
					<h2 className='mb-6 text-center text-3xl'>Login</h2>
					<form className='mb-6 flex flex-col gap-4'>
						<input
							type='text'
							name='user'
							value={user}
							placeholder='Username or email'
							onChange={handleChange}
							className='rounded border border-black p-2 outline-blue-gray-700'
						/>
						<input
							type='password'
							name='password'
							value={password}
							placeholder='Password'
							onChange={handleChange}
							className='rounded border border-black p-2 outline-blue-gray-700'
						/>
						<Button type='submit' className='self-start'>
							Sign in
						</Button>
					</form>
					<p>
						You dont have an account?{' '}
						<Link
							to='/register'
							className='text-center text-blue-600 underline'
						>
							Sign up
						</Link>
					</p>
				</Container>
			</div>
		</>
	)
}

export default Login

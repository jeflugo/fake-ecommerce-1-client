import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Container from '../../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { client } from '../../lib/client'
import toast from 'react-hot-toast'
import { useStateContext } from '../../context/StateContext'
// import { client } from '../../lib/client'

const initialFormData = {
	email: '',
	password: '',
}
function Login() {
	const [formData, setFormData] = useState(initialFormData)
	const { email, password } = formData
	const navigate = useNavigate()
	const { setUser } = useStateContext()

	const handleChange = e => {
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = e => {
		e.preventDefault()

		const userQuery = `*[_type=="user" && email match '${email}' && password match '${password}'][0]`

		client.fetch(userQuery).then(data => {
			if (!data) return toast.error('Invalid credentials.')

			setUser({ email: data.email, userName: data.userName })
			navigate(`/dashboard`)
		})
	}

	return (
		<>
			<Helmet>
				<title>glu - Login</title>
			</Helmet>
			<div className='py-6'>
				<Container cName='max-w-2xl'>
					<h2 className='mb-6 text-center text-3xl'>Login</h2>
					<form className='mb-6 flex flex-col gap-4' onSubmit={handleSubmit}>
						<input
							type='email'
							name='email'
							value={email}
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

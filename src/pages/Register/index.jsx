import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Container from '../../components/Container'
import { Link, useNavigate } from 'react-router-dom'
import { client } from '../../lib/client'
import { v4 } from 'uuid'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../../context/StateContext'

const initialFormData = {
	name: '',
	email: '',
	password: '',
	password2: '',
}

function Register() {
	const [formData, setFormData] = useState(initialFormData)
	const { name, email, password, password2 } = formData

	const { register } = useStateContext()

	const handleChange = e =>
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

	const handleSubmit = e => {
		e.preventDefault()

		register(name, email, password, password2)
	}

	return (
		<>
			<Helmet>
				<title>glu - Register</title>
			</Helmet>
			<div className='py-6'>
				<Container cName='max-w-2xl'>
					<h2 className='mb-6 text-center text-3xl'>Register</h2>
					<form className='mb-6 flex flex-col gap-4' onSubmit={handleSubmit}>
						<input
							type='text'
							name='name'
							value={name}
							placeholder='Name'
							onChange={handleChange}
							className='rounded border border-black p-2 outline-blue-gray-700'
						/>
						<input
							type='email'
							name='email'
							value={email}
							placeholder='Email'
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
						<input
							type='password'
							name='password2'
							value={password2}
							placeholder='Repeat your password'
							onChange={handleChange}
							className='rounded border border-black p-2 outline-blue-gray-700'
						/>
						<Button type='submit' className='self-start'>
							Sign up
						</Button>
					</form>
					<p>
						You already have an account?{' '}
						<Link to='/login' className='text-center text-blue-600 underline'>
							Sign in
						</Link>
					</p>
				</Container>
			</div>
		</>
	)
}

export default Register

import { useEffect } from 'react'
import { useStateContext } from '../context/StateContext'
import { Link } from 'react-router-dom'
import { COMPANY_EMAIL } from '../constants'
import Container from './Container'
import { Button } from '@material-tailwind/react'

function Success() {
	const { resetStore } = useStateContext()

	useEffect(() => {
		resetStore()
	}, [])

	return (
		<div className='py-6 lg:py-12'>
			<Container>
				<div className='text-center'>
					<h2 className='mb-4 text-3xl'>Thank you for your order!</h2>
					<p className='mb-1'>Check your email inbox for the receipt.</p>
					<p className='mb-6'>
						If you have any questions please email{' '}
						<a
							className='text-blue-800 underline'
							href={`mailto:${COMPANY_EMAIL}`}
						>
							{COMPANY_EMAIL}
						</a>
					</p>
					<Link to={'/store'}>
						<Button>Continue Shopping</Button>
					</Link>
				</div>
			</Container>
		</div>
	)
}

export default Success

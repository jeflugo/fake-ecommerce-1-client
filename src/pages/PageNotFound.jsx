import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function PageNotFound() {
	return (
		<div className='mx-auto h-[550px] max-w-lg py-10 text-center'>
			<h1 className='mb-6 text-4xl font-medium'>Page not found</h1>
			<p className='mb-3'>
				Seems like the page you looked for doesnt exist, why dont you go buy
				something instead? C:
			</p>
			<Link to='/store'>
				<Button size='lg'>Go shoping now</Button>
			</Link>
		</div>
	)
}

export default PageNotFound

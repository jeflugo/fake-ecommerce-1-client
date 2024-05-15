import { Link } from 'react-router-dom'
import Container from './Container'
import { FOOTER_LINKS } from '../constants'

function Footer() {
	return (
		<div className='bg-black text-gray-50'>
			<Container>
				<div className='flex flex-wrap gap-5 py-5'>
					{FOOTER_LINKS.map(({ name, values }, index) => (
						<div key={index}>
							<h4 className='mb-1 font-medium '>{name}</h4>
							<ul className='text-sm text-gray-600'>
								{values.map(({ name, url }, index) => (
									<li key={index}>
										<Link to={url}>{name}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</div>
	)
}

export default Footer

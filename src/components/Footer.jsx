import { Link } from 'react-router-dom'
import Container from './Container'
import { FOOTER_INFO_LINKS, FOOTER_LINKS, SOCIAL_LINKS } from '../constants'

function Footer() {
	return (
		<div className='bg-black py-7 text-gray-50'>
			<Container>
				<div className='mb-5 flex flex-wrap gap-5'>
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
				<div className='py mb-5 flex gap-2'>
					{SOCIAL_LINKS.map(({ name, SocialIcon, url }, index) => (
						<a key={index} href={url} target='_blank' rel='noopener noreferrer'>
							<SocialIcon
								title={name}
								className='h-8 w-8 rounded-full bg-gray-900 p-2'
							/>
						</a>
					))}
				</div>
				<div className='mb-10 flex flex-wrap justify-between gap-2'>
					{FOOTER_INFO_LINKS.map(({ name, url }, index) => (
						<Link key={index} to={url} className='text-sm text-gray-600'>
							{name}
						</Link>
					))}
				</div>
				<div>
					<h5 className='text-center text-xs text-gray-600'>
						@ 2024 glu, inc. All Rights Reserved
					</h5>
				</div>
			</Container>
		</div>
	)
}

export default Footer

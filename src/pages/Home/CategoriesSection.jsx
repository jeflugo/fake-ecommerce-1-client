import Container from '../../components/Container'
import { CATEGORIES_PHOTOS } from '../../constants'
import { Link } from 'react-router-dom'

function CategoriesSection() {
	return (
		<div>
			<div className='py-4'>
				<Container>
					<div>
						<div className='mb-3'>
							<h2 className='text-3xl font-medium'>YOUR BEST CHOICE</h2>
							<p className='text-lg'>The N°1 Shoes store by times magazine</p>
						</div>
						<button className='rounded-md bg-black px-3 py-2 text-lg text-gray-50'>
							Shop now
						</button>
					</div>
				</Container>
			</div>
			<div className='flex-wrap md:flex'>
				{CATEGORIES_PHOTOS.map(({ mainText, subText, img, url }, index) => (
					<div key={index} className='relative mb-0 md:w-1/2'>
						<img src={img} className='w-full' />
						<div className='absolute left-0 top-0 h-full w-full bg-black opacity-50' />
						<div className='absolute bottom-16 z-10 w-full'>
							<Container>
								<div className='mb-3 text-white'>
									<h3 className='text-3xl font-medium'>{mainText}</h3>
									<p>{subText}</p>
								</div>
								<Link to={url}>
									<button className='rounded bg-white px-2 py-1 font-medium'>
										Explore
									</button>
								</Link>
							</Container>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CategoriesSection

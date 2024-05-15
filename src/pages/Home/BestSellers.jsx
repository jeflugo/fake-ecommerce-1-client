import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { BEST_SELLERS } from '../../constants'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

function BestSellers() {
	return (
		<div>
			<div className='py-4'>
				<Container>
					<div className='mb-3'>
						<h2 className='text-4xl font-bold'>BEST SELLERS OF ALL TIME</h2>
					</div>
				</Container>
			</div>
			<div className='relative'>
				<div>
					{BEST_SELLERS.map(({ img, name, url }, index) => (
						<div key={index} className='relative'>
							<Link to={url}>
								<img src={img} className='w-full' />
							</Link>
							<h3 className='absolute bottom-6 w-full text-center text-xl font-medium'>
								{name}
							</h3>
						</div>
					))}
				</div>
				<div className='absolute bottom-60 w-full'>
					<div className='mx-auto flex w-11/12 justify-between'>
						<BiChevronLeft className='h-9 w-9 rounded-full bg-gray-500 opacity-70' />
						<BiChevronRight className='h-9 w-9 rounded-full bg-gray-500 opacity-70' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BestSellers

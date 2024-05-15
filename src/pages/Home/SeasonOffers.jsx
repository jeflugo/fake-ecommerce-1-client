import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { SEASON_OFFERS, SEASON_OFFERS_IMGS } from '../../constants'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

function SeasonOffers() {
	return (
		<div>
			<div className='py-4'>
				<Container>
					<div>
						<div className='mb-3'>
							<h2 className='text-3xl font-medium'>CHECK THE SEASON OFFERS</h2>
							<p className='text-lg'>The N°1 Shoes store by times magazine</p>
						</div>
						<div className='flex flex-col gap-2'>
							{SEASON_OFFERS.map(({ buttonText, url }, index) => (
								<Link key={index} to={url}>
									<button className='rounded-md bg-black px-2 py-1 text-gray-50'>
										{buttonText}
									</button>
								</Link>
							))}
						</div>
					</div>
				</Container>
			</div>
			<div className='relative'>
				<div>
					{SEASON_OFFERS_IMGS.map((img, index) => (
						<img key={index} src={img} className='w-full'></img>
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

export default SeasonOffers

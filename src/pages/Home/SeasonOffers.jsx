import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { SEASON_OFFERS, SEASON_OFFERS_IMGS } from '../../constants'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useState } from 'react'

import { motion } from 'framer-motion'

function SeasonOffers() {
	const [active, setActive] = useState(1)

	const backCarousel = () => setActive(prev => prev - 1)

	const fowardCarousel = () => setActive(prev => prev + 1)

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
				<div className='md:hidden'>
					{SEASON_OFFERS_IMGS.map((img, index) => {
						if (index === 1)
							return <img key={index} src={img} className='w-full' />
					})}
				</div>
				<div className='hidden w-full justify-center py-4 md:flex'>
					<div className='flex items-center'>
						{SEASON_OFFERS_IMGS.map((img, index) => {
							if (index === active)
								if (active - 1 < 0) {
									return (
										<div
											key={index}
											className='scale flex items-center transition-all'
										>
											<div className='h-[200px] w-[150px]' />
											<motion.img
												src={img}
												className='h-[400px] w-[300px] rounded shadow-lg shadow-white'
											/>
										</div>
									)
								} else if (active + 1 === SEASON_OFFERS_IMGS.length) {
									return (
										<div key={index} className='flex items-center'>
											<motion.img
												src={img}
												className='h-[400px] w-[300px] shadow-lg shadow-white'
											/>
											<div className='h-[200px] w-[150px] rounded' />
										</div>
									)
								} else
									return (
										<motion.img
											key={index}
											src={img}
											className='h-[400px] w-[300px] rounded shadow-2xl shadow-white'
										/>
									)
							if ((index === active - 1) | (index === active + 1))
								return (
									<motion.img
										key={index}
										src={img}
										className='h-[200px] w-[150px] rounded'
									/>
								)
						})}
					</div>
				</div>
				<img
					src={SEASON_OFFERS_IMGS[active]}
					className='absolute top-0 -z-10 h-full w-full blur-lg'
				/>
				<div className='absolute top-0 flex h-full w-full items-center'>
					<div className='mx-auto flex w-11/12 justify-between'>
						<button
							disabled={active === 0 ? true : false}
							className='disabled:opacity-30'
						>
							<BiChevronLeft
								onClick={backCarousel}
								className={`h-9 w-9 rounded-full bg-gray-500 opacity-70`}
							/>
						</button>
						<button
							disabled={active === SEASON_OFFERS_IMGS.length - 1 ? true : false}
							className='disabled:opacity-30'
						>
							<BiChevronRight
								onClick={fowardCarousel}
								className={`h-9 w-9 rounded-full bg-gray-500 opacity-70`}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SeasonOffers

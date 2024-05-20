import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { SEASON_OFFERS, SEASON_OFFERS_IMGS } from '../../constants'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useEffect, useState } from 'react'

import { AnimatePresence, motion, useAnimate } from 'framer-motion'

function SeasonOffers() {
	const [active, setActive] = useState(1)
	const [scope, animate] = useAnimate()

	const [imgs, setImgs] = useState()

	useEffect(() => {
		setImgs({
			prev: SEASON_OFFERS_IMGS[active - 1],
			curr: SEASON_OFFERS_IMGS[active],
			next: SEASON_OFFERS_IMGS[active + 1],
		})
	}, [active])

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
					<div className='flex items-center' ref={scope}>
						{imgs && (
							<>
								{imgs.prev ? (
									<motion.img
										src={imgs.prev}
										className='box h-[200px] w-[150px] rounded '
									/>
								) : (
									<motion.img className='box invisible h-[200px] w-[150px]' />
								)}
								<motion.img
									src={imgs.curr}
									className='box h-[400px] w-[300px] rounded '
								/>
								{imgs.next ? (
									<motion.img
										src={imgs.next}
										className='box h-[200px] w-[150px] rounded '
									/>
								) : (
									<motion.img className='box invisible h-[200px] w-[150px]' />
								)}
							</>
						)}
					</div>
				</div>
				<img
					src={imgs?.curr}
					className='absolute top-0 -z-10 h-full w-full blur-lg'
				/>
				<div className='absolute top-0 ml-6 flex h-full items-center'>
					<button
						disabled={active === 0 ? true : false}
						className='disabled:opacity-30'
					>
						<BiChevronLeft
							onClick={() => {
								animate('.box', {
									opacity: [0, 1],
									scale: [0.3, 1],
								})
								backCarousel()
							}}
							className={`h-9 w-9 rounded-full bg-gray-500 opacity-70`}
						/>
					</button>
				</div>
				<div className='absolute right-0 top-0 mr-6 flex h-full items-center'>
					<button
						disabled={active === SEASON_OFFERS_IMGS.length - 1 ? true : false}
						className='disabled:opacity-30'
					>
						<BiChevronRight
							onClick={() => {
								animate('.box', {
									opacity: [0, 1],
									scale: [0.3, 1],
								})
								fowardCarousel()
							}}
							className={`h-9 w-9 rounded-full bg-gray-500 opacity-70`}
						/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SeasonOffers

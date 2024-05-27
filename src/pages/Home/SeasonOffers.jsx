import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { SEASON_OFFERS, SEASON_OFFERS_IMGS } from '../../constants'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useEffect, useState } from 'react'

import { motion, useAnimate } from 'framer-motion'
import { Button, Carousel } from '@material-tailwind/react'
import { useStateContext } from '../../context/StateContext'

function SeasonOffers() {
	const [active, setActive] = useState(1)
	const [scope, animate] = useAnimate()

	const [imgs, setImgs] = useState()

	const { width, md } = useStateContext()

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
		<div className='md:mb-6'>
			<div className='py-4'>
				<Container>
					<div>
						<div className='mb-3'>
							<h2 className='text-3xl font-medium'>CHECK THE SEASON OFFERS</h2>
						</div>
						<div className='flex flex-col flex-wrap gap-2 md:flex-row'>
							{SEASON_OFFERS.map(({ buttonText, url }, index) => (
								<Link key={index} to={url}>
									<Button size='sm'>{buttonText}</Button>
								</Link>
							))}
						</div>
					</div>
				</Container>
			</div>
			<div className='relative'>
				{width < md && (
					<Carousel
						prevArrow={({ handlePrev, activeIndex }) => (
							<button
								disabled={activeIndex === 0 ? true : false}
								className='absolute top-0 ml-6 flex h-full items-center disabled:opacity-30'
							>
								<BiChevronLeft
									className='h-9 w-9 rounded-full bg-gray-500 opacity-70'
									onClick={handlePrev}
								/>
							</button>
						)}
						nextArrow={({ handleNext, activeIndex }) => (
							<button
								disabled={
									activeIndex === SEASON_OFFERS_IMGS.length - 1 ? true : false
								}
								className='absolute right-0 top-0 mr-6 flex h-full items-center disabled:opacity-30'
							>
								<BiChevronRight
									className='h-9 w-9 rounded-full bg-gray-500 opacity-70'
									onClick={handleNext}
								/>
							</button>
						)}
					>
						{SEASON_OFFERS_IMGS.map((img, index) => (
							<img key={index} src={img} className='h-[550px] w-full' />
						))}
					</Carousel>
				)}
				{width > md && (
					<>
						<div className='flex w-full justify-center py-4'>
							<div className='flex items-center' ref={scope}>
								{imgs && (
									<>
										{imgs.prev ? (
											<motion.img
												src={imgs.prev}
												className='box h-[200px] w-[150px] rounded xl:h-[350px] xl:w-[270px]'
												onClick={() => {
													animate('.box', {
														opacity: [0, 1],
														scale: [0.3, 1],
													})
													backCarousel()
												}}
											/>
										) : (
											<motion.img className='box invisible h-[200px] w-[150px] xl:h-[350px] xl:w-[270px]' />
										)}
										<motion.img
											src={imgs.curr}
											className='box h-[400px] w-[300px] rounded xl:h-[680px] xl:w-[480px]'
										/>
										{imgs.next ? (
											<motion.img
												src={imgs.next}
												className='box h-[200px] w-[150px] rounded xl:h-[350px] xl:w-[270px]'
												onClick={() => {
													animate('.box', {
														opacity: [0, 1],
														scale: [0.3, 1],
													})
													fowardCarousel()
												}}
											/>
										) : (
											<motion.img className='box invisible h-[200px] w-[150px] xl:h-[350px] xl:w-[270px]' />
										)}
									</>
								)}
							</div>
						</div>
						<img
							src={imgs?.curr}
							className='absolute top-0 -z-10 h-full w-full blur-lg'
						/>
						<div className='absolute top-0 ml-6 flex h-full items-center lg:ml-16'>
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
									className={`h-9 w-9 rounded-full bg-gray-500 opacity-70 lg:h-12 lg:w-12`}
								/>
							</button>
						</div>
						<div className='absolute right-0 top-0 mr-6 flex h-full items-center lg:mr-16'>
							<button
								disabled={
									active === SEASON_OFFERS_IMGS.length - 1 ? true : false
								}
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
									className={`h-9 w-9 rounded-full bg-gray-500 opacity-70 lg:h-12 lg:w-12`}
								/>
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default SeasonOffers

import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { BiChevronLeft, BiChevronRight, BiHeart, BiPlus } from 'react-icons/bi'
import { useStateContext } from '../../context/StateContext'
import { useState, useEffect } from 'react'
import { urlFor } from '../../lib/client'
import { Carousel } from '@material-tailwind/react'

import { motion } from 'framer-motion'

function BestSellers() {
	const [bestSellers, setBestSellers] = useState()
	const [visibleOverlay, setVisibleOverlay] = useState()
	const { md, width, products } = useStateContext()

	useEffect(() => {
		if (products) setBestSellers(products)
	}, [products])

	const seeOverlay = index => setVisibleOverlay(index)

	return (
		<div>
			<div className='py-4'>
				<Container>
					<div className='mb-3'>
						<h2 className='text-4xl font-bold'>BEST SELLERS OF ALL TIME</h2>
					</div>
				</Container>
			</div>
			{bestSellers && width < md && (
				<Carousel
					prevArrow={({ handlePrev, firstIndex }) => (
						<button
							disabled={firstIndex}
							className='absolute top-0 ml-6 flex h-full items-center disabled:opacity-30'
						>
							<BiChevronLeft
								className='h-9 w-9 rounded-full bg-gray-500 opacity-70'
								onClick={handlePrev}
							/>
						</button>
					)}
					nextArrow={({ handleNext, lastIndex }) => (
						<button
							disabled={lastIndex}
							className='absolute right-0 top-0 mr-6 flex h-full items-center disabled:opacity-30'
						>
							<BiChevronRight
								className='h-9 w-9 rounded-full bg-gray-500 opacity-70'
								onClick={handleNext}
							/>
						</button>
					)}
				>
					{bestSellers.map(({ images, name, slug }, index) => (
						<div key={index} className='relative'>
							<Link to={`/store/${slug.current}`}>
								<img src={urlFor(images[0])} className='w-full' />
							</Link>
							<h3 className='absolute bottom-9 w-full text-center text-2xl font-medium'>
								{name}
							</h3>
						</div>
					))}
				</Carousel>
			)}
			{bestSellers && width > md && (
				<div className='relative flex h-[400px] justify-end'>
					<div className='absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-500' />
					<div className='absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-500' />
					<div className='hide-scrollbar h-[100vw] w-[400px] origin-top-right translate-y-[400px] rotate-90 overflow-y-scroll scroll-smooth'>
						{bestSellers.map(({ images, name, slug, price }, index) => (
							<Link
								key={index}
								className='relative block h-[400px] w-[400px] -rotate-90'
								to={`/store/${slug.current}`}
								onMouseOver={() => seeOverlay(index)}
							>
								{visibleOverlay === index && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 0.5 }}
										className='absolute left-0 top-0 z-10 flex h-full w-full select-none bg-black p-6 text-left text-white'
									>
										<div className='absolute right-0 top-0 z-30 flex self-end pr-6 pt-6'>
											<div className='flex gap-2'>
												<BiHeart
													size={30}
													className='transition-all hover:scale-125 hover:fill-red-600 active:scale-100'
												/>
												<BiPlus
													size={30}
													className='transition-all hover:scale-125 active:scale-100'
												/>
											</div>
										</div>
										<div className='flex w-full items-center justify-between self-end text-2xl font-medium'>
											<p>{name}</p>
											<p>${price}</p>
										</div>
									</motion.div>
								)}
								<img
									key={index}
									src={urlFor(images[0])}
									className='h-full w-full'
								/>
								{visibleOverlay !== index && (
									<h3 className='absolute bottom-6 z-10 w-full text-center text-xl font-medium'>
										{name}
									</h3>
								)}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default BestSellers

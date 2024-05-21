import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useStateContext } from '../../context/StateContext'
import { useState, useEffect } from 'react'
import { urlFor } from '../../lib/client'
import { Carousel } from '@material-tailwind/react'

function BestSellers() {
	const [bestSellers, setBestSellers] = useState()
	const { products } = useStateContext()

	useEffect(() => {
		if (products) setBestSellers(products)
	}, [products])

	return (
		<div>
			<div className='py-4'>
				<Container>
					<div className='mb-3'>
						<h2 className='text-4xl font-bold'>BEST SELLERS OF ALL TIME</h2>
					</div>
				</Container>
			</div>
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
						disabled={activeIndex === bestSellers.length - 1 ? true : false}
						className='absolute right-0 top-0 mr-6 flex h-full items-center disabled:opacity-30'
					>
						<BiChevronRight
							className='h-9 w-9 rounded-full bg-gray-500 opacity-70'
							onClick={handleNext}
						/>
					</button>
				)}
			>
				{bestSellers &&
					bestSellers.map(({ images, name, slug }, index) => (
						<div key={index} className='relative'>
							<Link to={slug}>
								<img src={urlFor(images[0])} className='w-full' />
							</Link>
							<h3 className='absolute bottom-6 w-full text-center text-xl font-medium'>
								{name}
							</h3>
						</div>
					))}
			</Carousel>
		</div>
	)
}

export default BestSellers

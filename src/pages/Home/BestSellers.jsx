import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useStateContext } from '../../context/StateContext'
import { useState, useEffect } from 'react'
import { client, urlFor } from '../../lib/client'
import { Carousel } from '@material-tailwind/react'
import ProductOverlay from '../../components/ProductOverlay'

function BestSellers() {
	const [bestSellers, setBestSellers] = useState()
	const { md, width } = useStateContext()
	const [visibleOverlay, setVisibleOverlay] = useState()
	const seeOverlay = index => setVisibleOverlay(index)

	useEffect(() => {
		const productsQuery = `*[_type=="product"] | order(totalSales desc)[0...10] {images[0], name, _id, slug, price, discount, seasonDiscount, sizes}`

		client.fetch(productsQuery).then(data => setBestSellers(data))
	}, [])

	useEffect(() => {
		if (bestSellers && width > md) {
			const hSlider = document.querySelector('.horizontal-slider')
			hSlider.scrollTo(0, 9999999)
		}
	}, [bestSellers, width, md])

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
					{bestSellers.map(({ images: img, name, slug }, index) => (
						<div key={index} className='relative'>
							<Link to={`/store/${slug.current}`}>
								<img src={urlFor(img)} className='w-full' />
							</Link>
							<h3 className='absolute bottom-9 w-full text-center text-2xl font-medium'>
								{name}
							</h3>
						</div>
					))}
				</Carousel>
			)}
			{bestSellers && width > md && (
				<div className={`relative flex h-[400px] justify-end`}>
					<div className='absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-500' />
					<div className='absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-500' />
					<div
						className={`horizontal-slider hide-scrollbar h-[100vw] w-[400px] origin-top-right translate-y-[400px] rotate-90 overflow-y-scroll scroll-smooth`}
					>
						{bestSellers.map(
							(
								{
									images: img,
									name,
									_id,
									slug,
									price,
									discount,
									seasonDiscount,
									sizes,
								},
								index,
							) => (
								<div
									key={index}
									className={`relative block h-[400px] w-[400px] -rotate-90`}
									onMouseOver={() => seeOverlay(index)}
								>
									{visibleOverlay === index ? (
										<ProductOverlay
											discount={discount}
											seasonDiscount={seasonDiscount}
											price={price}
											name={name}
											_id={_id}
											slug={slug}
											img={img}
											sizes={sizes}
										/>
									) : (
										<h3 className='absolute bottom-6 z-10 w-full text-center text-xl font-medium'>
											{name}
										</h3>
									)}
									<img src={urlFor(img)} className='h-full w-full' />
								</div>
							),
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default BestSellers

import { useEffect, useState } from 'react'
import { client, urlFor } from '../../lib/client'
import ProductOverlay from '../../components/ProductOverlay'

function RalatedProducts({ currentId }) {
	const [visibleOverlay, setVisibleOverlay] = useState()
	const seeOverlay = index => setVisibleOverlay(index)
	const [products, setProducts] = useState()

	useEffect(() => {
		const productsQuery = `*[_type=="product"][0...7]{ images[0], name, price, _id, discount, seasonDiscount, sizes }`

		client.fetch(productsQuery).then(data => setProducts(data))
	}, [])

	useEffect(() => {
		if (products) {
			const hSlider = document.querySelector('.horizontal-slider')
			hSlider.scrollTo(0, 9999999)
		}
	}, [products])

	return (
		<>
			{products && (
				<div>
					<h3 className='mb-4 ml-2 text-xl font-medium'>Ralated products</h3>
					<div className={`relative flex h-[300px] justify-end`}>
						<div className='absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r  from-gray-500 md:w-16' />
						<div className='absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l  from-gray-500 md:w-16' />
						<div
							className={`horizontal-slider hide-scrollbar h-[100vw] w-[300px] origin-top-right translate-y-[300px] rotate-90 overflow-y-scroll scroll-smooth`}
						>
							{products.map(
								(
									{
										images: img,
										name,
										price,
										_id,
										discount,
										seasonDiscount,
										sizes,
									},
									index,
								) => {
									if (_id !== currentId) {
										return (
											<div
												key={index}
												className={`relative block h-[300px] w-[300px] -rotate-90`}
												onMouseOver={() => seeOverlay(index)}
											>
												{visibleOverlay === index ? (
													<ProductOverlay
														discount={discount}
														seasonDiscount={seasonDiscount}
														price={price}
														name={name}
														_id={_id}
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
										)
									}
								},
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default RalatedProducts

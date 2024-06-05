import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client, urlFor } from '../../lib/client'
import { BiHeart, BiPlus } from 'react-icons/bi'

function RalatedProducts({ currentId }) {
	const [visibleOverlay, setVisibleOverlay] = useState()
	const seeOverlay = index => setVisibleOverlay(index)
	const [products, setProducts] = useState()

	useEffect(() => {
		const productsQuery = `*[_type=="product"][0...7]{ images[0], name, price, _id }`

		client.fetch(productsQuery).then(data => setProducts(data))
	}, [])

	return (
		<div>
			{products && (
				<>
					<h3 className='mb-4 ml-2 text-xl font-medium'>Ralated products</h3>
					<div className='relative flex h-[300px] justify-end'>
						<div className='absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r  from-gray-500 md:w-16' />
						<div className='absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l  from-gray-500 md:w-16' />
						<div className='hide-scrollbar h-[100vw] w-[300px] origin-top-right translate-y-[300px] rotate-90 overflow-y-scroll scroll-smooth'>
							{products.map(({ images: img, name, price, _id }, index) => {
								if (_id !== currentId) {
									return (
										<Link
											key={index}
											className='relative block h-[300px] w-[300px] -rotate-90'
											to={`/store/${_id}`}
											onMouseEnter={() => seeOverlay(index)}
											onMouseLeave={() => seeOverlay(undefined)}
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
												src={urlFor(img)}
												className='h-full w-full'
											/>
											{visibleOverlay !== index && (
												<h3 className='absolute bottom-6 z-10 w-full text-center text-xl font-medium'>
													{name}
												</h3>
											)}
										</Link>
									)
								}
							})}
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default RalatedProducts

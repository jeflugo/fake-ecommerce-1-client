import { AiOutlineClose } from 'react-icons/ai'
import Container from './Container'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import { BiChevronDown, BiChevronUp, BiTrash } from 'react-icons/bi'
import { Tooltip } from '@material-tailwind/react'

function Cart() {
	const {
		cartProducts,
		toggleCart,
		showCart,
		addOne,
		removeOne,
		removeFromCart,
	} = useStateContext()

	return (
		<>
			{showCart && (
				<div
					className={`fixed right-0 top-0 z-20 h-screen w-[100vw] bg-white md:w-[50vw] lg:w-[35vw]`}
				>
					<div className='py-8'>
						<Container>
							<div className='flex items-center justify-between '>
								<h2 className='text-2xl'>Cart products</h2>
								<button className='text-lg font-bold' onClick={toggleCart}>
									<AiOutlineClose />
								</button>
							</div>
							{cartProducts.length !== 0 ? (
								<div className='hide-scrollbar mt-6 h-[75vh] overflow-y-auto'>
									{cartProducts.map(
										({ name, img, size, stock, qty, totalPrice, _id }) => (
											<div
												key={`${_id}:${size}`}
												className='mb-4 flex h-[90px] overflow-hidden rounded-md shadow-md'
											>
												<img
													src={urlFor(img)}
													alt={name}
													className='h-full w-[25%]'
												/>
												<div className='flex w-[75%] items-center justify-between py-4 pl-4 pr-6'>
													<div>
														<h2 className='flex flex-wrap items-center gap-1 text-lg font-medium'>
															<span>
																{name} (#{size}){' '}
															</span>
															<button
																className='hover:text-red-500'
																onClick={() => {
																	removeFromCart(_id, size)
																}}
															>
																<BiTrash />
															</button>
														</h2>
														<p>
															Total:{' '}
															<span className='font-medium text-green-600'>
																${totalPrice}
															</span>
														</p>
													</div>
													<div className='flex flex-col items-center'>
														<Tooltip
															content={
																qty === stock ? 'No more in stock' : 'Add one'
															}
															placement='top-end'
														>
															<button
																className='text-3xl disabled:cursor-not-allowed disabled:text-gray-500'
																disabled={qty === stock ? true : false}
																onClick={() => {
																	addOne(_id, size)
																}}
															>
																<BiChevronUp />
															</button>
														</Tooltip>
														<p className='font-bold'>{qty}</p>
														<Tooltip
															content={
																qty === 1 ? "Can't go lower" : 'Remove one'
															}
															placement='bottom-end'
														>
															<button
																className='text-3xl disabled:cursor-not-allowed disabled:text-gray-500'
																disabled={qty === 1 ? true : false}
																onClick={() => {
																	removeOne(_id, size)
																}}
															>
																<BiChevronDown />
															</button>
														</Tooltip>
													</div>
												</div>
											</div>
										),
									)}
								</div>
							) : (
								<div className='mt-20 text-center text-lg'>
									There&apos;s nothing in the cart
								</div>
							)}
						</Container>
					</div>
				</div>
			)}
		</>
	)
}

export default Cart

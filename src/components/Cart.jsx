import { AiOutlineClose } from 'react-icons/ai'
import Container from './Container'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { useEffect } from 'react'

function Cart() {
	const { cartProducts, toggleCart, showCart } = useStateContext()

	useEffect(() => {
		if (showCart) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [showCart])
	return (
		<>
			{showCart && (
				<div
					className={`absolute right-0 top-0 h-screen w-[100vw] bg-white md:w-[50vw] lg:w-[35vw]`}
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
										({ name, img, size, qty, totalPrice, _id }) => (
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
														<h2 className='font-bold'>
															{name} (#{size})
														</h2>
														<p>
															Total:{' '}
															<span className='font-medium text-green-600'>
																${totalPrice}
															</span>
														</p>
													</div>
													<div className='flex flex-col items-center'>
														<button className='text-3xl'>
															<BiChevronUp />
														</button>
														<p className='font-bold'>{qty}</p>
														<button className='text-3xl'>
															<BiChevronDown />
														</button>
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

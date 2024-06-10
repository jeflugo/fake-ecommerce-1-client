import { AiOutlineClose } from 'react-icons/ai'
import Container from './Container'
import { useStateContext } from '../context/StateContext'
import CartProduct from './CartPorduct'
import { Button } from '@material-tailwind/react'

function Cart() {
	const { cartProducts, toggleCart, showCart, handleCheckout } =
		useStateContext()

	return (
		<>
			{showCart && (
				<>
					<div
						className='fixed left-0 top-0 h-screen w-full bg-black/50'
						onClick={toggleCart}
					/>
					<div
						className={`fixed right-0 top-0 z-20 h-screen w-[100vw] bg-white md:w-[50vw] lg:w-[35vw]`}
					>
						<div className='h-full py-8'>
							<Container cName='relative h-full'>
								<div className='flex items-center justify-between '>
									<h2 className='text-2xl'>Cart products</h2>
									<button className='text-lg font-bold' onClick={toggleCart}>
										<AiOutlineClose />
									</button>
								</div>
								{cartProducts.length !== 0 ? (
									<div>
										<div className='hide-scrollbar mt-6 h-[65vh] overflow-y-auto'>
											{cartProducts.map(product => (
												<CartProduct
													key={`${product._id}:${product.size}`}
													{...product}
												/>
											))}
										</div>
										<div className='absolute bottom-0 left-0 w-full text-center'>
											<Button
												size='lg'
												onClick={() => {
													handleCheckout()
												}}
											>
												Go to checkout
											</Button>
										</div>
									</div>
								) : (
									<div className='mt-20 text-center text-lg'>
										There&apos;s nothing in the cart
									</div>
								)}
							</Container>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Cart

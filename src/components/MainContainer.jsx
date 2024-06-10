import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Cart from './Cart'
import CartButton from './CartButton'
import { Toaster } from 'react-hot-toast'
import Header from './Header'
import { Spinner } from '@material-tailwind/react'

function MainContainer() {
	return (
		<>
			<Toaster position='top-center' />
			<Header />
			<main>
				<Suspense
					fallback={
						<div className='flex h-[60vh] items-center justify-center'>
							<Spinner />
						</div>
					}
				>
					<Outlet />
				</Suspense>
			</main>
			<Footer />

			<CartButton />
			<Cart />
		</>
	)
}

export default MainContainer

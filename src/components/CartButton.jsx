import { Badge, Tooltip } from '@material-tailwind/react'
import { BiCart } from 'react-icons/bi'
import { useStateContext } from '../context/StateContext'

export default function CartButton() {
	const { showCart, toggleCart, cartProducts } = useStateContext()
	return (
		<div
			className={`fixed right-0 top-[20%] z-20 translate-x-1 cursor-pointer transition-all hover:translate-x-0 ${showCart && 'hidden'}`}
			onClick={toggleCart}
		>
			<Badge
				content={cartProducts.length}
				placement='top-start'
				overlap='circular'
				className={`${cartProducts.length === 0 && 'hidden'}`}
			>
				<Tooltip
					content='CheckCart'
					placement='top-start'
					className={showCart ? 'hidden' : 'asd'}
				>
					<div className='rounded-bl-full rounded-tl-full bg-black px-2 py-1 text-3xl text-white shadow-xl'>
						<BiCart />
					</div>
				</Tooltip>
			</Badge>
		</div>
	)
}

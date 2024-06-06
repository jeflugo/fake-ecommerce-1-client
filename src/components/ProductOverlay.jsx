import { motion } from 'framer-motion'
import AddToFavs from './AddToFavs'
import AddToCart from './AddToCart'

export default function ProductOverlay({
	discount,
	seasonDiscount,
	price,
	name,
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.5 }}
			className='absolute left-0 top-0 z-10 flex h-full w-full select-none bg-black p-6 text-left text-white'
		>
			<div className='absolute right-0 top-0 z-30 flex self-end pr-6 pt-6'>
				<div className='flex gap-2'>
					<AddToFavs />
					<AddToCart />
				</div>
			</div>
			<div className='flex w-full items-center justify-between self-end text-xl font-medium'>
				<p>{name}</p>
				<div>
					{!discount && !seasonDiscount && <span>${price}</span>}
					{discount && (
						<span>
							${price - price * (discount / 100)}(-%{discount})
						</span>
					)}
					{seasonDiscount && (
						<span>
							${price - price * (seasonDiscount / 100)}(-%
							{seasonDiscount})
						</span>
					)}
				</div>
			</div>
		</motion.div>
	)
}

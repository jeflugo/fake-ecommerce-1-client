import { motion } from 'framer-motion'
import AddToFavs from './AddToFavs'
import AddToCart from './AddToCart'
import { Link } from 'react-router-dom'

export default function ProductOverlay({
	discount,
	seasonDiscount,
	price,
	name,
	_id,
	img,
	sizes,
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 0.5 }}
			className='absolute left-0 top-0 flex h-full w-full select-none p-6 text-white'
		>
			<Link
				to={`/store/${_id}`}
				className='absolute left-0 top-0 z-10 h-full w-full bg-black'
			/>

			<div className='absolute right-0 top-0 z-30 flex pr-6 pt-6'>
				<div className='flex gap-2'>
					<AddToFavs />
					<AddToCart
						discount={discount}
						seasonDiscount={seasonDiscount}
						price={price}
						name={name}
						_id={_id}
						img={img}
						sizes={sizes}
					/>
				</div>
			</div>
			<div className='z-30 flex w-full items-center justify-between self-end text-xl font-medium'>
				<p>{name}</p>
				<div>
					{!discount && !seasonDiscount && <span>${price}</span>}
					{discount && (
						<span>
							${price - price * (discount / 100)}(-{discount}%)
						</span>
					)}
					{seasonDiscount && (
						<span>
							${price - price * (seasonDiscount / 100)}(-
							{seasonDiscount}%)
						</span>
					)}
				</div>
			</div>
		</motion.div>
	)
}

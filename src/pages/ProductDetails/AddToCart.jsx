import { Button } from '@material-tailwind/react'
import { BiPlus } from 'react-icons/bi'
import { useStateContext } from '../../context/StateContext'

export default function AddToCart({
	_id,
	name,
	img,
	price,
	discount,
	seasonDiscount,
}) {
	const { addToCart } = useStateContext()

	return (
		<div className='flex items-center gap-2'>
			<Button
				className='flex gap-2'
				onClick={() => {
					addToCart(_id, name, img, price, discount, seasonDiscount)
				}}
			>
				<span>Add to cart</span>
				<span>
					<BiPlus />
				</span>
			</Button>
			<PriceInfo
				price={price}
				discount={discount}
				seasonDiscount={seasonDiscount}
			/>
		</div>
	)
}

const PriceInfo = ({ price, discount, seasonDiscount }) => {
	return (
		<>
			{!discount && !seasonDiscount && (
				<h4 className='text-lg text-green-600'>${price}</h4>
			)}
			{discount && (
				<h4 className='flex flex-col'>
					<span className='text-red-500 line-through'>${price}</span>
					<span className='text-green-500'>
						${price - price * (discount / 100)} ({discount}%)
					</span>
				</h4>
			)}
			{seasonDiscount && (
				<h4 className='flex flex-col'>
					<span className='text-red-500 line-through'>${price}</span>
					<span className='text-green-500'>
						${price - price * (seasonDiscount / 100)} ({seasonDiscount}%)
					</span>
				</h4>
			)}
		</>
	)
}

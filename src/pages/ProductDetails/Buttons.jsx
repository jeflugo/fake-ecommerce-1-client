import { Button } from '@material-tailwind/react'
import { BiPlus } from 'react-icons/bi'

export default function Buttons({ price, discount, seasonDiscount }) {
	return (
		<div className='flex items-center gap-2'>
			<Button className='flex gap-2'>
				<span>Add to cart</span>
				<span>
					<BiPlus />
				</span>
			</Button>
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
		</div>
	)
}

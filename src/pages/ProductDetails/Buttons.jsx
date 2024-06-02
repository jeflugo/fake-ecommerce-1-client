import { Button } from '@material-tailwind/react'
import { BiPlus } from 'react-icons/bi'

export default function Buttons({ price }) {
	return (
		<div className='flex items-center gap-2'>
			<Button className='flex gap-2'>
				<span>Add to cart</span>
				<span>
					<BiPlus />
				</span>
			</Button>
			<h4 className='text-lg text-green-600'>${price}</h4>
		</div>
	)
}

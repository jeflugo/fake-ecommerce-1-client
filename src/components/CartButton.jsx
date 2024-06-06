import { Badge, Tooltip } from '@material-tailwind/react'
import { BiCart } from 'react-icons/bi'

export default function CartButton() {
	return (
		<div className='fixed right-0 top-[20%] translate-x-1 transition-all hover:-translate-x-0'>
			<Badge content={2} placement='top-start' overlap='circular'>
				<Tooltip content='Check Cart' placement='top-start'>
					<button className='rounded-bl-full rounded-tl-full bg-black px-2 py-1 text-3xl text-white shadow-xl'>
						<BiCart />
					</button>
				</Tooltip>
			</Badge>
		</div>
	)
}

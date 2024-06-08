import { BiChevronDown, BiChevronUp, BiTrash, BiTrashAlt } from 'react-icons/bi'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import { Tooltip } from '@material-tailwind/react'

export default function CartPorduct({
	name,
	img,
	size,
	stock,
	qty,
	totalPrice,
	_id,
}) {
	const { removeFromCart, addOne, removeOne } = useStateContext()
	return (
		<div className='relative mb-4 flex h-[90px] overflow-hidden rounded-md shadow-md'>
			<button
				className='absolute left-2 top-2 text-xl hover:text-red-500'
				onClick={() => {
					removeFromCart(_id, size)
				}}
			>
				<BiTrashAlt />
			</button>
			<img src={urlFor(img)} alt={name} className='h-full w-[25%]' />
			<div className='flex w-[75%] items-center justify-between py-4 pl-4 pr-6'>
				<div>
					<h2 className='text-lg font-medium'>
						<span>
							{name} (#{size}){' '}
						</span>
					</h2>
					<p>
						Total:{' '}
						<span className='font-medium text-green-600'>${totalPrice}</span>
					</p>
				</div>
				<div className='flex flex-col items-center'>
					<Tooltip
						content={qty === stock ? 'No more in stock' : 'Add one'}
						placement='top-end'
					>
						<button
							className='text-3xl disabled:cursor-not-allowed disabled:text-gray-500'
							disabled={qty === stock ? true : false}
							onClick={() => {
								addOne(_id, size)
							}}
						>
							<BiChevronUp />
						</button>
					</Tooltip>
					<p className='font-bold'>{qty}</p>
					<Tooltip
						content={qty === 1 ? "Can't go lower" : 'Remove one'}
						placement='bottom-end'
					>
						<button
							className='text-3xl disabled:cursor-not-allowed disabled:text-gray-500'
							disabled={qty === 1 ? true : false}
							onClick={() => {
								removeOne(_id, size)
							}}
						>
							<BiChevronDown />
						</button>
					</Tooltip>
				</div>
			</div>
		</div>
	)
}

import { BiPlus } from 'react-icons/bi'
import { useStateContext } from '../context/StateContext'
import {
	Popover,
	PopoverHandler,
	PopoverContent,
	Button,
} from '@material-tailwind/react'

export default function AddToCart({
	_id,
	name,
	img,
	price,
	discount,
	seasonDiscount,
	sizes,
}) {
	const { addToCart } = useStateContext()
	return (
		<Popover placement='top-end'>
			<PopoverHandler>
				<button>
					<BiPlus
						size={30}
						className='transition-all hover:scale-125 active:scale-100'
					/>
				</button>
			</PopoverHandler>
			<PopoverContent>
				<Sizes sizes={sizes} />
				<Button
					onClick={() => {
						addToCart(_id, name, img, price, discount, seasonDiscount)
					}}
				>
					Add
				</Button>
			</PopoverContent>
		</Popover>
	)
}

function Sizes({ sizes }) {
	const { selectedSize, selectSize } = useStateContext()
	return (
		<div className='mb-2'>
			<h3 className='mb-1 text-xl font-medium'>Available sizes</h3>
			<div className='flex max-w-52 flex-wrap gap-1'>
				{sizes
					.sort((a, b) => a.size - b.size)
					.map(({ size, stock }, index) => (
						<Button
							tabIndex={null}
							key={index}
							className={`${size === selectedSize?.size && 'scale-110'}`}
							variant='outlined'
							size='sm'
							onClick={() => {
								selectSize({ size, stock })
							}}
						>
							{size}
						</Button>
					))}
			</div>
		</div>
	)
}

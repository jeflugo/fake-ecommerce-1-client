import { Button, Tooltip } from '@material-tailwind/react'
import { useStateContext } from '../../context/StateContext'

export default function Sizes({ sizes }) {
	const { selectedSize, selectSize } = useStateContext()

	return (
		<div className='mb-2 lg:mb-8'>
			<h3 className='mb-1 text-xl font-medium'>Available sizes</h3>
			<div className='flex gap-2'>
				{sizes
					.sort((a, b) => a.size - b.size)
					.map(({ size, stock }, index) => (
						<Tooltip key={index} content={`Stock: ${stock}`}>
							<Button
								className={`${size === selectedSize?.size && 'scale-110'}`}
								variant='outlined'
								size='sm'
								onClick={() => {
									selectSize({ size, stock })
								}}
							>
								{size}
							</Button>
						</Tooltip>
					))}
			</div>
		</div>
	)
}

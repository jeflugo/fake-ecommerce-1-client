import { Button } from '@material-tailwind/react'
import { useState } from 'react'

export default function Sizes({ sizes }) {
	const [selectedSize, setSelectedSize] = useState()
	const selectSize = index => {
		setSelectedSize(prev => {
			if (index === prev) return
			return index
		})
	}
	return (
		<div className='mb-2 lg:mb-8'>
			<h3 className='mb-1 text-xl font-medium'>Available sizes</h3>
			<div className='flex gap-2'>
				{sizes
					.sort((a, b) => a.size - b.size)
					.map(({ size, stock }, index) => (
						<Button
							className={`${index === selectedSize && 'scale-110'}`}
							variant='outlined'
							size='sm'
							key={index}
							onClick={() => {
								selectSize(index)
							}}
						>
							{size}
						</Button>
					))}
			</div>
		</div>
	)
}

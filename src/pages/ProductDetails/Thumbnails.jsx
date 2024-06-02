import { motion } from 'framer-motion'
import { urlFor } from '../../lib/client'
import { useState } from 'react'

export default function Thumbnails({ images, setCurrentImage }) {
	const [visibleOverlay, setVisibleOverlay] = useState()

	const changeImage = index => {
		setVisibleOverlay(index)
		setCurrentImage(index)
	}

	return (
		<div className='mb-4 flex flex-wrap gap-2'>
			{images.map((img, index) => (
				<div
					key={index}
					className='relative'
					onMouseEnter={() => changeImage(index)}
					onMouseLeave={() => setVisibleOverlay(undefined)}
				>
					<img src={urlFor(img)} className='w-12' />
					{visibleOverlay === index && (
						<motion.div className='absolute left-0 top-0 h-full w-full bg-black/20' />
					)}
				</div>
			))}
		</div>
	)
}

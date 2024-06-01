import { useState } from 'react'
import { urlFor } from '../../lib/client'
import { Button } from '@material-tailwind/react'
import { BiHeart, BiPlus } from 'react-icons/bi'
import RalatedProducts from './RalatedProducts'
import { motion } from 'framer-motion'

function ProductDetails({ name, price, images, slug, _id }) {
	const [visibleOverlay, setVisibleOverlay] = useState()
	const [currentImage, setCurrentImage] = useState(0)

	const changeImage = index => {
		setVisibleOverlay(index)
		setCurrentImage(index)
	}

	return (
		<div>
			<div className='mx-auto max-w-96 py-6'>
				<h2 className='ml-2 text-2xl font-medium'>{name}</h2>
				<div>
					<div className='relative'>
						<img
							src={urlFor(images[currentImage])}
							alt={slug.current}
							className='mb-2 h-96 w-full'
						/>
						<BiHeart
							className='absolute right-5 top-5 transition-all hover:scale-125 hover:fill-red-600 active:scale-100'
							size={23}
						/>
					</div>
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
					<div className='ml-2 flex items-center gap-2'>
						<Button className='flex gap-2'>
							<span>Add to cart</span>
							<span>
								<BiPlus />
							</span>
						</Button>
						<Button className='flex gap-2' variant='outlined'>
							Buy now
						</Button>
						<h4 className='text-lg text-green-600'>${price}</h4>
					</div>
				</div>
			</div>
			<RalatedProducts currentId={_id} />
		</div>
	)
}

export default ProductDetails

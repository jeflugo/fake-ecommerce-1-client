import { useState } from 'react'
import { urlFor } from '../../lib/client'
import { Button } from '@material-tailwind/react'
import { BiHeart, BiPlus } from 'react-icons/bi'
import RalatedProducts from './RalatedProducts'

function ProductDetails(product) {
	const { name, price, images, slug, _id } = product
	const [currentImage, setCurrentImage] = useState(images[0])

	const changeImage = index => setCurrentImage(images[index])

	return (
		<div>
			<div className='mx-auto max-w-96 py-6'>
				<h2 className='ml-2 text-2xl font-medium'>{name}</h2>
				<div>
					<div className='relative'>
						<img
							src={urlFor(currentImage)}
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
							<img
								key={index}
								src={urlFor(img)}
								onMouseEnter={() => changeImage(index)}
								className='w-12'
							/>
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

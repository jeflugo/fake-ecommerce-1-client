import { useState } from 'react'
import { urlFor } from '../../lib/client'
import { Button } from '@material-tailwind/react'
import { BiHeart, BiPlus } from 'react-icons/bi'
import RalatedProducts from './RalatedProducts'
import Tags from './Tags'
import Thumbnails from './Thumbnails'
import Sizes from './Sizes'

function ProductDetails({ name, price, tags, images, slug, sizes, _id }) {
	const [currentImage, setCurrentImage] = useState(0)

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
					<Tags tags={tags} />
					<Thumbnails images={images} setCurrentImage={setCurrentImage} />
					<Sizes />
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

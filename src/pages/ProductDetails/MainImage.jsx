import { BiHeart } from 'react-icons/bi'
import { urlFor } from '../../lib/client'

export default function MainImage({ slug, images, currentImage }) {
	return (
		<>
			<img
				src={urlFor(images[currentImage])}
				alt={slug.current}
				className='mb-2 h-96 w-full'
			/>
			<BiHeart
				className='absolute right-5 top-5 transition-all hover:scale-125 hover:fill-red-600 active:scale-100'
				size={23}
			/>
		</>
	)
}

import { urlFor } from '../../lib/client'
import AddToFavs from '../../components/AddToFavs'

export default function MainImage({ slug, images, currentImage }) {
	return (
		<>
			<img
				src={urlFor(images[currentImage])}
				alt={slug.current}
				className='mb-2 h-96 w-full'
			/>
			<div className='absolute right-5 top-5'>
				<AddToFavs slug={slug} />
			</div>
		</>
	)
}

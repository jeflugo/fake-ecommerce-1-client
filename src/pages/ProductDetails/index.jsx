import { useState } from 'react'
import RalatedProducts from './RalatedProducts'
import Tags from './Tags'
import Thumbnails from './Thumbnails'
import Sizes from './Sizes'
import MainImage from './MainImage'
import Buttons from './Buttons'
import Description from './Description'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import ScrollToTop from '../../components/ScrollToTop'

function ProductDetails({ name, price, tags, images, slug, sizes, _id }) {
	const [currentImage, setCurrentImage] = useState(0)
	const navigate = useNavigate()

	return (
		<div>
			<ScrollToTop />
			<div className='mx-auto max-w-96 px-1 py-6 lg:max-w-[800px]'>
				<div>
					<button
						onClick={() => navigate(-1)}
						className='flex items-center gap-1 hover:text-gray-600'
					>
						<FaArrowLeft /> Go back
					</button>
				</div>
				<div>
					<h2 className='ml-2 text-2xl font-medium'>{name}</h2>
				</div>
				<div className='lg:flex lg:gap-4'>
					<div className='lg:w-[400px]'>
						<div className='relative'>
							<MainImage
								slug={slug}
								images={images}
								currentImage={currentImage}
							/>
							<Tags tags={tags} />
						</div>
						<Thumbnails images={images} setCurrentImage={setCurrentImage} />
					</div>
					<div className='lg:w-[300px]'>
						<Description />
						<Sizes sizes={sizes} />
						<Buttons price={price} />
					</div>
				</div>
			</div>
			<RalatedProducts currentId={_id} />
		</div>
	)
}

export default ProductDetails

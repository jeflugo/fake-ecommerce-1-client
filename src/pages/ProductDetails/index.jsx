import { useEffect, useState } from 'react'
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
import { client } from '../../lib/client'

function ProductDetails({ id }) {
	const [product, setProduct] = useState()
	const [currentImage, setCurrentImage] = useState(0)
	const navigate = useNavigate()

	useEffect(() => {
		const productsQuery = `*[_type=="product" && _id match '${id}'][0]{name, slug, images, tags, sizes, price, discount, seasonDiscount}`

		client.fetch(productsQuery).then(data => {
			setProduct(data)
		})
	}, [id])

	return (
		<>
			<ScrollToTop />
			{product && (
				<div>
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
							<h2 className='ml-2 text-2xl font-medium'>{product.name}</h2>
						</div>
						<div className='lg:flex lg:gap-4'>
							<div className='lg:w-[400px]'>
								<div className='relative'>
									<MainImage
										slug={product.slug}
										images={product.images}
										currentImage={currentImage}
									/>
									<Tags tags={product.tags} />
								</div>
								<Thumbnails
									images={product.images}
									setCurrentImage={setCurrentImage}
								/>
							</div>
							<div className='lg:w-[300px]'>
								<Description />
								<Sizes sizes={product.sizes} />
								<Buttons
									price={product.price}
									discount={product.discount}
									seasonDiscount={product.seasonDiscount}
								/>
							</div>
						</div>
					</div>
					<RalatedProducts currentId={id} />
				</div>
			)}
		</>
	)
}

export default ProductDetails

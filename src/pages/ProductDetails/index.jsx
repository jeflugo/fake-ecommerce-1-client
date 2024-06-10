import { useEffect, useState } from 'react'
import RalatedProducts from './RalatedProducts'
import Tags from './Tags'
import Thumbnails from './Thumbnails'
import Sizes from './Sizes'
import MainImage from './MainImage'
import Description from './Description'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import AddToCart from './AddToCart'
import useFetching from '../../hooks/useFetching'
import { Spinner } from '@material-tailwind/react'

function ProductDetails({ id }) {
	const [currentImage, setCurrentImage] = useState(0)
	const navigate = useNavigate()
	const [product, error, isError, isLoading, isSuccess] = useFetching(
		`*[_type=="product" && _id match '${id}'][0]{_id, name, slug, images, tags, sizes, price, discount, seasonDiscount}`,
	)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [product])

	if (isLoading)
		return (
			<div className='flex h-[65vh] items-center justify-center'>
				<Spinner />
			</div>
		)
	if (isError) return <div>{error}</div>

	return (
		<>
			{isSuccess && (
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
								<AddToCart
									name={product.name}
									_id={product._id}
									img={product.images[0]}
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

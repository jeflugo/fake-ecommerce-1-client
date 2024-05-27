import { BiHeart, BiPlus } from 'react-icons/bi'
import { urlFor } from '../../lib/client'
import { Link } from 'react-router-dom'

function Product(productInfo) {
	const { name, price, images, slug } = productInfo
	return (
		<div className='relative max-w-[360px]'>
			<div className='absolute right-0 top-0 flex justify-end px-6 pt-6'>
				<div className='flex gap-2'>
					<BiHeart
						size={23}
						className='transition-all hover:scale-125 hover:fill-red-600 active:scale-100'
					/>
					<BiPlus
						size={23}
						className='transition-all hover:scale-125 active:scale-100'
					/>
				</div>
			</div>
			<Link to={`/store/${slug.current}`}>
				<img src={urlFor(images[0])} className='w-full' />
			</Link>
			<h3 className='absolute bottom-0 flex w-full items-center justify-between px-6 pb-6 text-lg font-medium'>
				<span>{name}</span>
				<span>${price}</span>
			</h3>
		</div>
	)
}

export default Product

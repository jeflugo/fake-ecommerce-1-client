import { BiHeart, BiPlus } from 'react-icons/bi'
import { urlFor } from '../../lib/client'
import { Link } from 'react-router-dom'

function Product({ name, price, images: img, slug }) {
	return (
		<div className='relative max-w-[360px] lg:max-w-sm'>
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
				<img src={urlFor(img)} className='w-full' />
			</Link>
			<h3 className='absolute bottom-0 flex w-full items-end justify-between px-6 pb-6 text-lg font-medium'>
				<span>{name}</span>
				<span>${price}</span>
			</h3>
		</div>
	)
}

export default Product

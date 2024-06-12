import AddToFavs from './AddToFavs'
import AddToCart from './AddToCart'
import { urlFor } from '../lib/client'
import { Link } from 'react-router-dom'

function Product({
	name,
	price,
	images: img,
	_id,
	slug,
	discount,
	seasonDiscount,
	sizes,
}) {
	return (
		<div className='relative max-w-[360px] lg:max-w-sm'>
			<div className='absolute right-0 top-0 flex justify-end px-6 pt-6'>
				<div className='flex gap-2'>
					<AddToFavs slug={slug} />
					<AddToCart
						discount={discount}
						seasonDiscount={seasonDiscount}
						price={price}
						name={name}
						_id={_id}
						img={img}
						sizes={sizes}
					/>
				</div>
			</div>
			<Link to={`/store/${slug.current}`}>
				<img src={urlFor(img)} className='w-full' />
			</Link>
			<h3 className='absolute bottom-0 flex w-full items-center justify-between px-6 pb-6 text-lg font-medium'>
				<span className='w-[60%]'>{name}</span>
				<div className='flex flex-col'>
					{!discount && !seasonDiscount && <span>${price}</span>}
					{discount && (
						<>
							<span className='text-red-500 line-through'>${price}</span>
							<span className='text-green-500'>
								${price - price * (discount / 100)} ({discount}%)
							</span>
						</>
					)}
					{seasonDiscount && (
						<>
							<span className='text-red-500 line-through'>${price}</span>
							<span className='text-green-500'>
								${price - price * (seasonDiscount / 100)} ({seasonDiscount}%)
							</span>
						</>
					)}
				</div>
			</h3>
		</div>
	)
}

export default Product

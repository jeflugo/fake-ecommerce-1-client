import { Button } from '@material-tailwind/react'
import { HERO_BANNERS } from '../../constants'
import { useStateContext } from '../../context/StateContext'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from '../../lib/client'

function HeroSection() {
	const { SM, MD, LG } = HERO_BANNERS
	const { md, lg, width } = useStateContext()
	const [newestProduct, setNewestProduct] = useState()
	useEffect(() => {
		const productsQuery = `*[_type=="product" && isNewest][0]{name, _id, price}`

		client.fetch(productsQuery).then(data => setNewestProduct(data))
	}, [])
	return (
		<>
			{newestProduct && (
				<div className='relative lg:bg-gray-50 lg:py-6'>
					{width < md && <img src={SM} className='w-full' />}
					{width > md && width < lg && <img src={MD} className='w-full' />}
					{width > lg && <img src={LG} className='ml-10 w-1/2' />}

					<div className='absolute lg:right-20 lg:top-0 lg:flex lg:h-full lg:items-center lg-max:bottom-0 lg-max:w-full lg-max:pb-10'>
						<div className='mx-auto lg:mx-0'>
							<h1 className='mx-auto mb-6 max-w-[300px] text-center  text-4xl font-medium lg:text-left'>
								<span className='underline'>NEW</span> {newestProduct.name}
							</h1>
							<div className='flex justify-center gap-4 lg:justify-start'>
								<Link to={`/store/${newestProduct._id}`}>
									<Button size='lg'>Buy now</Button>
								</Link>
								<div>
									<p className='text-red-600 line-through'>
										${newestProduct.price}
									</p>
									<p className='text-green-600'>
										${newestProduct.price / 2} (50% Off)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default HeroSection

import { Button, Spinner } from '@material-tailwind/react'
import { HERO_BANNERS } from '../../constants'
import { useStateContext } from '../../context/StateContext'
import { Link } from 'react-router-dom'
import useFetching from '../../hooks/useFetching'

function HeroSection() {
	const { SM, MD, LG } = HERO_BANNERS
	const { md, lg, width } = useStateContext()
	const [newestProduct, error, isError, isLoading, isSuccess] = useFetching(
		'*[_type=="product" && isNewest][0]{name, slug, price, discount}',
	)
	if (isLoading)
		return (
			<div className='flex h-[300px] items-center justify-center'>
				<Spinner />
			</div>
		)
	if (isError) return <div>{error}</div>
	return (
		<>
			{isSuccess && (
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
								<Link to={`/store/${newestProduct.slug.current}`}>
									<Button size='lg'>Buy now</Button>
								</Link>
								<div>
									<p className='text-red-600 line-through'>
										${newestProduct.price}
									</p>
									<p className='text-green-600'>
										$
										{newestProduct.price -
											newestProduct.price * (newestProduct.discount / 100)}{' '}
										({newestProduct.discount}% Off)
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

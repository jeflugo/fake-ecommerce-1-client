import { Button } from '@material-tailwind/react'
import { HERO_BANNERS } from '../../constants'
import { useStateContext } from '../../context/StateContext'

function HeroSection() {
	const { SM, MD, LG } = HERO_BANNERS
	const { md, lg, width } = useStateContext()
	return (
		<div className='relative lg:bg-gray-50 lg:py-6'>
			{width < md && <img src={SM} className='w-full' />}
			{width > md && width < lg && <img src={MD} className='w-full' />}
			{width > lg && <img src={LG} className='ml-10 w-1/2' />}

			<div className='absolute lg:right-6 lg:top-0 lg:flex lg:h-full lg:items-center lg-max:bottom-0 lg-max:w-full lg-max:pb-10'>
				<div className='mx-auto w-9/12 max-w-[380px] lg:mx-0'>
					<h1 className='mb-6 text-center text-4xl font-medium  lg:text-left'>
						<span className='underline'>NEW</span> Air Force Max Storm
					</h1>
					<div className='flex justify-center gap-4 lg:justify-start'>
						<Button size='lg'>Buy now</Button>
						<div>
							<p className='text-red-600 line-through'>$400</p>
							<p className='text-green-600'>$200 (50 %off)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection

import { Button } from '@material-tailwind/react'
import { HERO_BANNERS } from '../../constants'

function HeroSection() {
	const { SM, MD, LG } = HERO_BANNERS
	return (
		<div className='relative lg:bg-gray-50'>
			<img src={SM} className='w-full md:hidden' />
			<img src={MD} className='hidden w-full md:block lg:hidden' />
			<img src={LG} className='hidden w-full lg:block' />
			<div className='absolute bottom-0  w-full   pb-10'>
				<div className='mx-auto w-9/12 max-w-[420px]'>
					<h1 className='mb-6 text-center text-4xl font-medium underline'>
						NEW Air Force Max Storm
					</h1>
					<div className='flex justify-center gap-4'>
						<Button className='bg-black'>Buy now</Button>
						<div>
							<p className='text-red-600 line-through'>$400</p>
							<p className='text-green-600'>$200 (50%off)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection

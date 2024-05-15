import { Button } from '@material-tailwind/react'
import { HERO_BANNER } from '../../constants'

function HeroSection() {
	return (
		<div className='relative'>
			<img src={HERO_BANNER} className='w-full' />
			<div className='absolute bottom-8 left-16 w-9/12'>
				<h1 className='mb-6 text-center text-4xl font-medium underline'>
					NEW Air Force Max Storm
				</h1>
				<div className='flex justify-center gap-4'>
					<Button>asdasd</Button>
					<button className='rounded-md bg-black px-4 py-2 text-lg text-gray-50'>
						Buy now
					</button>
					<div>
						<p className='text-red-600 line-through'>$400</p>
						<p className='text-green-600'>$200 (50%off)</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection

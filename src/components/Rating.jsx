import { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

export default function Rating({ rating, readOnly = false }) {
	const [finalRate, setfinalRate] = useState()
	const [mouseOver, setMouseOver] = useState(false)
	const [highlightedStars, setHighlightedStars] = useState()
	const [selectedStar, setSelectedStar] = useState()
	const stars = [1, 2, 3, 4, 5]

	useEffect(() => {
		let ones = 0
		let twos = 0
		let threes = 0
		let fours = 0
		let fives = 0
		rating?.forEach(rate => {
			if (rate === 1) ones = ones + 1
			if (rate === 2) twos = twos + 1
			if (rate === 3) threes = threes + 1
			if (rate === 4) fours = fours + 1
			if (rate === 5) fives = fives + 1
		})
		const finalRateComputation = Math.floor(
			(1 * ones + 2 * twos + 3 * threes + 4 * fours + 5 * fives) /
				rating?.length,
		)
		setfinalRate(finalRateComputation)
	}, [rating])

	if (readOnly) {
		return (
			<div className='flex gap-1'>
				{stars.map(star => {
					if (star <= finalRate)
						return <FaStar key={star} className='text-yellow-700' />

					return <FaRegStar key={star} />
				})}
			</div>
		)
	}

	if (selectedStar) {
		return (
			<div className='flex gap-1'>
				{stars.map((star, index) => {
					if (index <= selectedStar)
						return (
							<FaStar
								key={star}
								className='text-yellow-700'
								onMouseLeave={() => {
									setHighlightedStars(index - 1)
								}}
								onClick={() => {
									setSelectedStar(index)
								}}
							/>
						)

					return (
						<FaRegStar
							key={star}
							onMouseEnter={() => {
								setHighlightedStars(index)
							}}
						/>
					)
				})}
			</div>
		)
	}

	return (
		<div
			className='flex gap-1'
			onMouseEnter={() => {
				setMouseOver(true)
			}}
			onMouseLeave={() => {
				setMouseOver(false)
				setHighlightedStars(undefined)
			}}
		>
			{mouseOver &&
				stars.map((star, index) => {
					if (index <= highlightedStars)
						return (
							<FaStar
								key={star}
								className='text-yellow-700'
								onMouseLeave={() => {
									setHighlightedStars(index - 1)
								}}
								onClick={() => {
									setSelectedStar(index)
								}}
							/>
						)
					return (
						<FaRegStar
							key={star}
							onMouseEnter={() => {
								setHighlightedStars(index)
							}}
						/>
					)
				})}
			{!mouseOver &&
				stars.map(star => {
					if (star <= finalRate)
						return <FaStar key={star} className='text-yellow-700' />

					return <FaRegStar key={star} />
				})}
		</div>
	)
}

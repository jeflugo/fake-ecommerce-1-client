import { FaChevronRight } from 'react-icons/fa'
import { SEARCH_CATEGORIES } from '../../constants'
import { capitalizeFirstLetter } from '../../utils'
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
} from '@material-tailwind/react'
import { useState } from 'react'
import { useStateContext } from '../../context/StateContext'

function Categories() {
	const [mainOpen, setMainOpen] = useState(false)
	const [open, setOpen] = useState()
	const handleMainOpen = () => setMainOpen(!mainOpen)
	const handleOpen = curr =>
		setOpen(prevOpen => (curr === prevOpen ? null : curr))
	const setCategories = () => {}

	const { width, lg } = useStateContext()
	return (
		<>
			{width < lg && (
				<Accordion
					open={mainOpen}
					icon={
						<FaChevronRight
							className={`${mainOpen ? 'rotate-90' : 'rotate-0'} transition-all`}
						/>
					}
					className='mb-4'
				>
					<AccordionHeader
						onClick={handleMainOpen}
						className='text-md flex justify-end p-0 py-2'
					>
						<h2>Categories</h2>
					</AccordionHeader>
					<AccordionBody className='py-3'>
						{SEARCH_CATEGORIES.map(({ name, subs }, index) => (
							<Accordion key={index} open={open === index}>
								<AccordionHeader
									onClick={() => handleOpen(index)}
									className='text-md p-0 py-1'
								>
									<h3>{capitalizeFirstLetter(name)}</h3>
								</AccordionHeader>
								<AccordionBody className='ml-3'>
									<ul>
										{subs.map(({ name, value }, index) => (
											<li key={index} onClick={() => setCategories(name)}>
												{value}
											</li>
										))}
									</ul>
								</AccordionBody>
							</Accordion>
						))}
					</AccordionBody>
				</Accordion>
			)}
			{width > lg && (
				<div>
					<div>
						<h2 className='text-xl font-medium'>Categories</h2>
					</div>
					{SEARCH_CATEGORIES.map(({ name, subs }, index) => (
						<Accordion key={index} open={open === index} className='ml-3'>
							<AccordionHeader
								onClick={() => handleOpen(index)}
								className='p-0 py-1 text-lg'
							>
								<h3>{capitalizeFirstLetter(name)}</h3>
							</AccordionHeader>
							<AccordionBody className='ml-3'>
								<ul>
									{subs.map(({ name, value }, index) => (
										<li key={index} onClick={() => setCategories(name)}>
											{value}
										</li>
									))}
								</ul>
							</AccordionBody>
						</Accordion>
					))}
				</div>
			)}
		</>
	)
}

export default Categories

import { FaChevronRight } from 'react-icons/fa'
import { SEARCH_CATEGORIES } from '../../constants'
import { capitalizeFirstLetter } from '../../utils'
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
} from '@material-tailwind/react'
import Container from '../../components/Container'
import { useState } from 'react'

function Categories() {
	const [mainOpen, setMainOpen] = useState(false)
	const [open, setOpen] = useState()
	const handleMainOpen = () => setMainOpen(!mainOpen)
	const handleOpen = curr =>
		setOpen(prevOpen => (curr === prevOpen ? null : curr))
	const setCategories = () => {}
	return (
		<Container>
			<Accordion open={mainOpen}>
				<AccordionHeader
					onClick={handleMainOpen}
					className='text-md flex items-center justify-end gap-1 p-0 py-2'
				>
					<h2>Categories</h2>
					<FaChevronRight
						className={`${mainOpen ? 'rotate-90' : 'rotate-0'} transition-all`}
					/>
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
		</Container>
	)
}

export default Categories

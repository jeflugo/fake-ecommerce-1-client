import { FaChevronRight } from 'react-icons/fa'
import { SEARCH_CATEGORIES } from '../../constants'
import {
	Accordion,
	AccordionBody,
	AccordionHeader,
} from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { useStateContext } from '../../context/StateContext'

function Categories() {
	const [mainOpen, setMainOpen] = useState(false)
	const [open, setOpen] = useState()
	const handleMainOpen = () => setMainOpen(!mainOpen)
	const handleOpen = curr =>
		setOpen(prevOpen => (curr === prevOpen ? null : curr))
	const { width, lg, category, setCategory } = useStateContext()

	useEffect(() => {
		if (category) setOpen(category.catIndex)
	}, [category])

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
						{SEARCH_CATEGORIES.map(({ name: mainCatName, subs }, catIndex) => (
							<Accordion key={catIndex} open={open === catIndex}>
								<AccordionHeader
									onClick={() => handleOpen(catIndex)}
									className='text-md p-0 py-1'
								>
									<h3 className='first-letter:uppercase'>{mainCatName}</h3>
								</AccordionHeader>
								<AccordionBody className='ml-3'>
									<ul>
										{subs.map(({ name: subCatName, value }, index) => (
											<li
												key={index}
												onClick={() =>
													setCategory({ subCatName, mainCatName, catIndex })
												}
											>
												<button
													className={`${category?.subCatName === subCatName && category?.catIndex === catIndex && 'font-bold'} active:underline`}
												>
													{value}
												</button>
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
					{SEARCH_CATEGORIES.map(({ name: mainCatName, subs }, catIndex) => (
						<Accordion key={catIndex} open={open === catIndex} className='ml-3'>
							<AccordionHeader
								onClick={() => handleOpen(catIndex)}
								className='p-0 py-1 text-lg font-medium text-black'
							>
								<h3 className='first-letter:uppercase'>{mainCatName}</h3>
							</AccordionHeader>
							<AccordionBody className='ml-3'>
								<ul>
									{subs.map(({ name: subCatName, value }, index) => (
										<li
											key={index}
											onClick={() =>
												setCategory({ subCatName, mainCatName, catIndex })
											}
										>
											<button
												className={`${category?.subCatName === subCatName && category?.catIndex === catIndex && 'font-bold'} hover:underline`}
											>
												{value}
											</button>
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

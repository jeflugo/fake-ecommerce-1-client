import { Helmet } from 'react-helmet-async'
import SearchBar from './SearchBar'
import Container from '../../components/Container'
import OrderBy from './OrderBy'
import Categories from './Categories'
import Products from './Products'
import { useStateContext } from '../../context/StateContext'

import { useState, useEffect } from 'react'
import { client } from '../../lib/client'
import { ORDER_BY_OPTIONS } from '../../constants'
import ScrollToTop from '../../components/ScrollToTop'
import { Spinner } from '@material-tailwind/react'

function Store() {
	const { width, lg, category } = useStateContext()
	const [shownProducts, setShownProducts] = useState()

	const [orderByOption, setOrderByOption] = useState(ORDER_BY_OPTIONS[0])

	useEffect(() => {
		let filtersQuery = ''
		if (category) {
			if (category.mainCatName !== 'all') {
				filtersQuery += ` && tags match '${category.mainCatName}'`
				if (category.subCatName === 'offers') {
					filtersQuery += ` && discount > 0`
				} else if (category.subCatName === 'seasonal') {
					filtersQuery += ` && seasonDiscount > 0`
				} else if (category.subCatName !== 'all') {
					filtersQuery += ` && tags match '${category.subCatName}'`
				}
			}
		}

		let orderByFilter = ''
		if (orderByOption == 'Price up') {
			orderByFilter += ` | order(price desc)`
		}
		if (orderByOption == 'Price down') {
			orderByFilter += ` | order(price asc)`
		}
		if (orderByOption == 'Newest') {
			orderByFilter += ` | order(_createdAt desc)`
		}

		const productsQuery = `*[_type=="product"${filtersQuery !== '' ? filtersQuery : ''}]${orderByFilter !== '' ? orderByFilter : ''} { name, price, images[0], _id, slug, _createdAt, discount, seasonDiscount, sizes }`

		client.fetch(productsQuery).then(data => setShownProducts(data))
	}, [category, orderByOption])

	return (
		<div>
			<ScrollToTop />
			<Helmet>
				<title>glu - Store</title>
			</Helmet>
			<div className='py-6'>
				<Container>
					<div className='lg:ml-auto lg:max-w-[300px]'>
						<SearchBar />
						<OrderBy
							orderByOption={orderByOption}
							setOrderByOption={setOrderByOption}
						/>
						{width < lg && <Categories />}
					</div>
				</Container>
				{width < lg && (
					<>
						{shownProducts && shownProducts.length !== 0 ? (
							<Products products={shownProducts} />
						) : (
							<>
								{category ? (
									<h2 className='mx-auto text-center text-2xl font-medium'>
										No products were found for the &quot;{category.mainCatName}{' '}
										{category.subCatName}&quot; category
									</h2>
								) : (
									<div className='flex h-[200px] w-full items-center justify-center'>
										<Spinner />
									</div>
								)}
							</>
						)}
					</>
				)}

				{width > lg && (
					<Container>
						<div className='mt-6 flex gap-14'>
							{width > lg && <Categories />}
							{shownProducts && shownProducts.length !== 0 ? (
								<Products products={shownProducts} />
							) : (
								<>
									{category ? (
										<h2 className='mx-auto text-center text-2xl font-medium'>
											No products were found for the &quot;
											{category.mainCatName} {category.subCatName}&quot;
											category
										</h2>
									) : (
										<div className='flex h-[400px] w-full items-center justify-center'>
											<Spinner />
										</div>
									)}
								</>
							)}
						</div>
					</Container>
				)}
			</div>
		</div>
	)
}

export default Store

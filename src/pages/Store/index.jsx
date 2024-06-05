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

function Store() {
	const { width, lg } = useStateContext()
	const [shownProducts, setShownProducts] = useState()

	const { category } = useStateContext()
	const [orderByOption, setOrderByOption] = useState(ORDER_BY_OPTIONS[0])

	useEffect(() => {
		let filtersQuery
		if (category) {
			if (category.mainCatName !== 'all') {
				filtersQuery = ` && tags match '${category.mainCatName}'`
				if (category.subCatName !== 'all')
					filtersQuery =
						filtersQuery + ` && tags match '${category.subCatName}'`
			}
		}

		const productsQuery = `*[_type=="product"${filtersQuery ? filtersQuery : ''}]{ name, price, images[0], slug, _createdAt }`

		client.fetch(productsQuery).then(data => setShownProducts(data))
	}, [category])

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
				{width < lg && shownProducts && (
					<Products products={shownProducts} orderByOption={orderByOption} />
				)}

				{width > lg && (
					<Container>
						<div className='mt-6 flex gap-14'>
							{width > lg && <Categories />}
							{shownProducts && (
								<Products
									products={shownProducts}
									orderByOption={orderByOption}
								/>
							)}
						</div>
					</Container>
				)}
			</div>
		</div>
	)
}

export default Store

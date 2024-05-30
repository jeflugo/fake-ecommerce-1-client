import { Helmet } from 'react-helmet-async'
import SearchBar from './SearchBar'
import Container from '../../components/Container'
import OrderBy from './OrderBy'
import Categories from './Categories'
import Products from './Products'
import { useStateContext } from '../../context/StateContext'

function Store() {
	const { width, lg } = useStateContext()

	return (
		<div>
			<Helmet>
				<title>glu - Store</title>
			</Helmet>
			<div className='py-6'>
				<Container>
					<div className='lg:max-w-[300px] lg:ml-auto'>
						<SearchBar />
						<OrderBy />
						{width < lg && <Categories />}
					</div>
				</Container>
				{width < lg && <Products />}

				{width > lg && (
					<Container>
						<div className='mt-6 flex gap-14'>
							{width > lg && <Categories />}
							<Products />
						</div>
					</Container>
				)}
			</div>
		</div>
	)
}

export default Store

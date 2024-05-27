import { Helmet } from 'react-helmet-async'
import SearchBar from './SearchBar'
import Container from '../../components/Container'
import OrderBy from './OrderBy'
import Categories from './Categories'
import Products from './Products'

function Store() {
	return (
		<div>
			<Helmet>
				<title>glu - Store</title>
			</Helmet>
			<div className='py-6'>
				<Container>
					<SearchBar />
					<OrderBy />
					<Categories />
				</Container>
				<Products />
			</div>
		</div>
	)
}

export default Store

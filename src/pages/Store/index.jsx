import { Helmet } from 'react-helmet-async'
import SearchBar from './SearchBar'
import Container from '../../components/Container'

function Store() {
	return (
		<div>
			<Helmet>
				<title>glu - store</title>
			</Helmet>
			<div className='py-6'>
				<Container>
					<SearchBar />
				</Container>
				{/* <OrderBy/>
					<Filters/>
					<Products/>
					<ShoppingCart/> */}
			</div>
		</div>
	)
}

export default Store

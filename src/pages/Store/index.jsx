import { Helmet } from 'react-helmet-async'
import SearchBar from './SearchBar'
import Container from '../../components/Container'
import OrderBy from './OrderBy'
import Categories from './Categories'

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
				<OrderBy />
				<Categories />
				{/*
					<Products/>
					<ShoppingCart/> 
				*/}
			</div>
		</div>
	)
}

export default Store

import { useStateContext } from '../../context/StateContext'
import Product from './Product'
function Products() {
	const { products } = useStateContext()
	return (
		<div className='flex flex-wrap justify-center gap-4'>
			{products &&
				products.map((product, index) => <Product key={index} {...product} />)}
		</div>
	)
}

export default Products

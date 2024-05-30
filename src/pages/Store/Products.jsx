import { useStateContext } from '../../context/StateContext'
import Product from './Product'
function Products() {
	const { products } = useStateContext()
	return (
		// <div className='flex flex-wrap justify-center gap-4 lg:justify-start'>
		<div className='grid place-items-center grid-cols-3 gap-2 w-full'>
			{products && (
				<>
					{products.map((product, index) => <Product key={index} {...product} />)}
					{products.map((product, index) => <Product key={index} {...product} />)}
					{products.map((product, index) => <Product key={index} {...product} />)}
				</>
			)				
			}
		</div>
	)
}

export default Products

import { useStateContext } from '../../context/StateContext'
import Product from './Product'
function Products() {
	const { products } = useStateContext()
	return (
		<div className='grid w-full grid-cols-3 place-items-center gap-2'>
			{products && (
				<>
					{products.map((product, index) => (
						<Product key={index} {...product} />
					))}
				</>
			)}
		</div>
	)
}

export default Products

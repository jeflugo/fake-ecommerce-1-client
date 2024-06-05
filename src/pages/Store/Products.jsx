import Product from './Product'

function Products({ products, orderByOption }) {
	return (
		<div className='grid w-full grid-cols-1 place-items-center gap-2 md:grid-cols-2 lg:grid-cols-3'>
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

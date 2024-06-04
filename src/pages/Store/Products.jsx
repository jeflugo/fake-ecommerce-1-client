import Product from './Product'

function Products({ products, orderByOption }) {
	return (
		<div className='grid w-full grid-cols-3 place-items-center gap-2'>
			{products && (
				<>
					{products
						.sort((a, b) => {
							if (orderByOption === 'Newest') {
								const firstDate = new Date(a._createdAt)
								const secondDate = new Date(b._createdAt)
								return firstDate - secondDate
							}
							if (orderByOption === 'Price up') return b.price - a.price
							if (orderByOption === 'Price down') return a.price - b.price
						})
						.map((product, index) => (
							<Product key={index} {...product} />
						))}
				</>
			)}
		</div>
	)
}

export default Products

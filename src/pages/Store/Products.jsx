import Product from '../../components/Product'

function Products({ products, highlightedText }) {
	return (
		<div className='grid w-full grid-cols-1 place-items-center gap-2 md:grid-cols-2 lg:grid-cols-3'>
			{products && (
				<>
					{products.map((product, index) => (
						<Product
							key={index}
							{...product}
							highlightedText={highlightedText}
						/>
					))}
				</>
			)}
		</div>
	)
}

export default Products

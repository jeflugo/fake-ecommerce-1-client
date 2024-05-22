import { useState, useEffect, createContext, useContext } from 'react'
import { client } from '../lib/client'

const Context = createContext()

const sm = 330,
	md = 720,
	lg = 1000

export default function StateContext({ children }) {
	const [products, setProducts] = useState()
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		const productsQuery = `*[_type=="product"]`

		client.fetch(productsQuery).then(data => setProducts(data))
	}, [])
	return (
		<Context.Provider value={{ sm, md, lg, width, products }}>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)

import { useState, useEffect, createContext, useContext } from 'react'
import { client } from '../lib/client'

const Context = createContext()

export default function StateContext({ children }) {
	const [products, setProducts] = useState()

	useEffect(() => {
		const productsQuery = '*[_type=="product"]'

		client.fetch(productsQuery).then(data => {
			setProducts(data)
		})
	}, [])
	return <Context.Provider value={{ products }}>{children}</Context.Provider>
}

export const useStateContext = () => useContext(Context)

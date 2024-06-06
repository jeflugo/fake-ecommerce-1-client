import { useState, useEffect, createContext, useContext } from 'react'

const Context = createContext()

const sm = 330
const md = 720
const lg = 1000

export default function StateContext({ children }) {
	const [width, setWidth] = useState(window.innerWidth)
	const [user, setUser] = useState()
	const [cartProducts, setCartProducts] = useState([])
	const [favProducts, setFavsProducts] = useState([])
	const [category, setCategory] = useState()

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const addToCart = () => {
		console.log('Added to cart successfully')
	}
	const addToFavs = () => {
		console.log('Added to favs successfully')
	}

	return (
		<Context.Provider
			value={{ sm, md, lg, width, category, setCategory, addToCart, addToFavs }}
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)

import { useState, useEffect, createContext, useContext } from 'react'

const Context = createContext()

const sm = 330
const md = 720
const lg = 1000

export default function StateContext({ children }) {
	const [width, setWidth] = useState(window.innerWidth)
	const [category, setCategory] = useState()

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<Context.Provider value={{ sm, md, lg, width, category, setCategory }}>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)

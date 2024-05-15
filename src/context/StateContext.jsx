import { createContext, useContext } from 'react'

const Context = createContext()

export default function StateContext({ children }) {
	const getProducts = () => {
		console.log('first')
	}
	return <Context.Provider value={{ getProducts }}>{children}</Context.Provider>
}

export const useStateContext = () => useContext(Context)

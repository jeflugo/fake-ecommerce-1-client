import { useState, useEffect, createContext, useContext } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

const sm = 330
const md = 720
const lg = 1000

export default function StateContext({ children }) {
	const [width, setWidth] = useState(window.innerWidth)
	// const [user, setUser] = useState()
	const [showCart, setShowCart] = useState(false)
	const [cartProducts, setCartProducts] = useState([])
	// const [favProducts, setFavsProducts] = useState([])
	const [category, setCategory] = useState()
	const [selectedSize, setSelectedSize] = useState()

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const selectSize = size => {
		setSelectedSize(prev => {
			if (size === prev) return
			return size
		})
	}

	const toggleCart = () => setShowCart(!showCart)

	const addToCart = (_id, name, img, price, discount, seasonDiscount) => {
		let finalPrice = price
		if (!selectedSize) return toast.error('No size')
		if (discount) finalPrice = price - price * (discount / 100)
		if (seasonDiscount) finalPrice = price - price * (seasonDiscount / 100)

		let newProduct = {
			_id,
			name,
			img,
			qty: 1,
			totalPrice: finalPrice,
			size: selectedSize,
		}

		if (productExist(_id)) {
			const newProductIndex = cartProducts.findIndex(
				product => product._id === _id && product.size === selectedSize,
			)
			newProduct = cartProducts[newProductIndex]
			newProduct.qty = newProduct.qty + 1

			setCartProducts(prev => [
				...prev.slice(0, newProductIndex),
				newProduct,
				...prev.slice(newProductIndex + 1),
			])
			toast.success(`${name}, size: ${selectedSize} added to cart.`)
			setSelectedSize(null)
			return
		}

		setSelectedSize(null)
		setCartProducts(prev => [...prev, newProduct])
		toast.success(`${name}, size: ${selectedSize} added to cart.`)
	}

	function productExist(id) {
		const existence =
			cartProducts.findIndex(
				product => id === product._id && product.size === selectedSize,
			) !== -1
		return existence
	}

	const addToFavs = () => {
		toast.success('Added to favs successfully')
	}

	return (
		<Context.Provider
			value={{
				sm,
				md,
				lg,
				width,
				category,
				setCategory,
				addToCart,
				addToFavs,
				selectedSize,
				selectSize,
				cartProducts,
				toggleCart,
				showCart,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)

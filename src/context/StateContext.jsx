import { useState, useEffect, createContext, useContext } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

const sm = 330
const md = 720
const lg = 1000

export default function StateContext({ children }) {
	const [width, setWidth] = useState(window.innerWidth)
	// const [user, setUser] = useState()
	// const [favProducts, setFavsProducts] = useState([])
	const [showCart, setShowCart] = useState(false)
	const [cartProducts, setCartProducts] = useState([])
	const [category, setCategory] = useState()
	const [selectedSize, setSelectedSize] = useState()

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const toggleCart = () => setShowCart(!showCart)

	const selectSize = ({ size, stock }) => {
		setSelectedSize(prev => {
			if (size === prev?.size) return
			return { size, stock }
		})
	}

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
			size: selectedSize.size,
			stock: selectedSize.stock,
		}

		if (productExist(_id)) {
			const newProductIndex = cartProducts.findIndex(
				product => product._id === _id && product.size === selectedSize.size,
			)
			newProduct = cartProducts[newProductIndex]
			newProduct.qty = newProduct.qty + 1

			setCartProducts(prev => [
				...prev.slice(0, newProductIndex),
				newProduct,
				...prev.slice(newProductIndex + 1),
			])
			setSelectedSize(null)
			toast.success(
				`${newProduct.name}, size: ${newProduct.size} added to cart.`,
			)
			return
		}

		setCartProducts(prev => [...prev, newProduct])
		setSelectedSize(null)
		toast.success(`${newProduct.name}, size: ${newProduct.size} added to cart.`)
	}

	const removeFromCart = (_id, size) => {
		const newCartProducts = cartProducts.filter(product => {
			// console.log('_id !== product._id: ', _id !== product._id)
			// console.log('size !== product.size: ', size !== product.size)
			if (_id !== product._id) return true
			if (_id === product._id && size !== product.size) return true
			return false
		})
		setCartProducts(newCartProducts)
	}

	const addOne = (_id, size) => {
		const productIndex = cartProducts.findIndex(
			product => product._id === _id && product.size === size,
		)
		const product = cartProducts[productIndex]
		product.qty = product.qty + 1

		setCartProducts(prev => [
			...prev.slice(0, productIndex),
			product,
			...prev.slice(productIndex + 1),
		])
	}

	const removeOne = (_id, size) => {
		const productIndex = cartProducts.findIndex(
			product => product._id === _id && product.size === size,
		)
		const product = cartProducts[productIndex]
		product.qty = product.qty - 1

		setCartProducts(prev => [
			...prev.slice(0, productIndex),
			product,
			...prev.slice(productIndex + 1),
		])
	}

	function productExist(id) {
		const existence =
			cartProducts.findIndex(
				product => id === product._id && product.size === selectedSize.size,
			) !== -1
		return existence
	}

	const addToFavs = () => {
		toast.success('Added to favs successfully')
	}

	const handleCheckout = () => {
		console.log('checkout')
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
				addOne,
				removeOne,
				removeFromCart,
				handleCheckout,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)

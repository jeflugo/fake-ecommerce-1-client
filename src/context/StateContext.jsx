import { useState, useEffect, createContext, useContext } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

const sm = 330
const md = 720
const lg = 1000

const initialCartProducts =
	JSON.parse(localStorage.getItem('cartProducts')) || []

export default function StateContext({ children }) {
	const [width, setWidth] = useState(window.innerWidth)
	// const [user, setUser] = useState()
	// const [favProducts, setFavsProducts] = useState([])
	const [showCart, setShowCart] = useState(false)
	const [cartProducts, setCartProducts] = useState(initialCartProducts)
	const [category, setCategory] = useState()
	const [selectedSize, setSelectedSize] = useState()

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	//* PRODUCTS
	const toggleCart = () => setShowCart(!showCart)

	const selectSize = ({ size, stock }) => {
		if (size === selectedSize?.size) return
		setSelectedSize({ size, stock })
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
			unitPrice: finalPrice,
			size: selectedSize.size,
			stock: selectedSize.stock,
		}

		if (productExist(_id)) {
			const newProductIndex = cartProducts.findIndex(
				product => product._id === _id && product.size === selectedSize.size,
			)
			newProduct = cartProducts[newProductIndex]
			newProduct.qty = newProduct.qty + 1

			const newCartProducts = [
				...cartProducts.slice(0, newProductIndex),
				newProduct,
				...cartProducts.slice(newProductIndex + 1),
			]

			setCartProducts(newCartProducts)
			localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
			setSelectedSize(null)
			toast.success(
				`${newProduct.name}, size: ${newProduct.size} added to cart.`,
			)
			return
		}

		const newCartProducts = [...cartProducts, newProduct]
		setCartProducts(newCartProducts)
		localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
		setSelectedSize(null)
		toast.success(`${newProduct.name}, size: ${newProduct.size} added to cart.`)
	}

	const removeFromCart = (_id, size) => {
		const newCartProducts = cartProducts.filter(product => {
			if (_id !== product._id) return true
			if (_id === product._id && size !== product.size) return true
			return false
		})
		setCartProducts(newCartProducts)
		localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
	}

	const addOne = (_id, size) => {
		const productIndex = cartProducts.findIndex(
			product => product._id === _id && product.size === size,
		)
		const product = cartProducts[productIndex]
		product.qty++
		product.totalPrice += product.unitPrice

		const newCartProducts = [
			...cartProducts.slice(0, productIndex),
			product,
			...cartProducts.slice(productIndex + 1),
		]

		setCartProducts(newCartProducts)
		localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
	}

	const removeOne = (_id, size) => {
		const productIndex = cartProducts.findIndex(
			product => product._id === _id && product.size === size,
		)
		const product = cartProducts[productIndex]
		product.qty--
		product.totalPrice -= product.unitPrice

		const newCartProducts = [
			...cartProducts.slice(0, productIndex),
			product,
			...cartProducts.slice(productIndex + 1),
		]

		setCartProducts(newCartProducts)
		localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
	}

	const handleCheckout = async () => {
		const serverUrl = import.meta.env.VITE_SERVER_URL
			? import.meta.env.VITE_SERVER_URL
			: 'http://localhost:3000'

		const response = await fetch(`${serverUrl}/create-checkout-session`, {
			method: 'POST',

			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cartProducts),
		})

		if (response.statusCode === 500) return

		const session = await response.json()

		toast.loading('Redirecting...')

		window.location = session.url
	}

	const resetStore = () => {
		localStorage.clear()
		setCartProducts([])
	}

	//* USER
	const addToFavs = () => {
		toast.success('Added to favs successfully')
	}

	//* UTILS
	function productExist(id) {
		const existence =
			cartProducts.findIndex(
				product => id === product._id && product.size === selectedSize.size,
			) !== -1
		return existence
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
				resetStore,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)

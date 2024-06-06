import { BiPlus } from 'react-icons/bi'
import { useStateContext } from '../context/StateContext'

export default function AddToCart() {
	const { addToCart } = useStateContext()
	return (
		<BiPlus
			size={30}
			className='transition-all hover:scale-125 active:scale-100'
			onClick={() => {
				addToCart()
			}}
		/>
	)
}

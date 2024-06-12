import { BiHeart, BiSolidHeart } from 'react-icons/bi'
import { useStateContext } from '../context/StateContext'
import toast from 'react-hot-toast'

export default function AddToFavs({ slug }) {
	const { addToFavs, removeFromFavs, user, favProducts } = useStateContext()
	if (!user) {
		return (
			<BiHeart
				size={30}
				className='transition-all hover:scale-125 hover:fill-red-600 active:scale-100'
				onClick={() => toast.error('Login required for this functionality')}
			/>
		)
	}
	if (favProducts.includes(slug.current))
		return (
			<BiSolidHeart
				size={30}
				className='fill-red-600 transition-all hover:scale-125 active:scale-100'
				onClick={() => {
					removeFromFavs(slug)
				}}
			/>
		)

	return (
		<BiHeart
			size={30}
			className='transition-all hover:scale-125 hover:fill-red-600 active:scale-100'
			onClick={() => {
				addToFavs(slug)
			}}
		/>
	)
}

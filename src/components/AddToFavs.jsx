import { BiHeart } from 'react-icons/bi'
import { useStateContext } from '../context/StateContext'

export default function AddToFavs({ slug }) {
	const { addToFavs } = useStateContext()
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

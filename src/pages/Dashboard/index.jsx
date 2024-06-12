import { useState, useEffect } from 'react'
import { useStateContext } from '../../context/StateContext'
import useFetching from '../../hooks/useFetching'
import {
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Spinner,
	Tooltip,
} from '@material-tailwind/react'
import Container from '../../components/Container'
import { AiOutlineSetting } from 'react-icons/ai'
import { client } from '../../lib/client'
import Product from '../../components/Product'

export default function Dashboard() {
	const { user } = useStateContext()
	const [currentUser, error, isError, isLoading, isSuccess] = useFetching(
		`*[_type=="user" && email match '${user.email}'][0]`,
	)
	const [favorites, setFavorites] = useState([])
	const { logout, favProducts } = useStateContext()

	useEffect(() => {
		let addedFilters = ''
			favProducts.forEach((fav,index) => {
				if(index === favProducts.length-1) return addedFilters = addedFilters + `slug.current match '${fav}'` 

				addedFilters = addedFilters + `slug.current match '${fav}' || `
			})
				const query = `*[_type=="product" && ${addedFilters}] {name,	price, images[0],	_id, slug,	discount,	seasonDiscount,	sizes }`
				client.fetch(query).then(data => {
					setFavorites(data)
				})	
	}, [favProducts])


	if (isLoading)
		return (
			<div className='flex h-[60vh] items-center justify-center'>
				<Spinner />
			</div>
		)
	if (isError) return <div>{error}</div>
	return (
		<>
			{isSuccess && (
				<div className='py-10'>
					<Container>
						<div className='relative mb-6 flex gap-6'>
							<h1 className='text-2xl font-medium'>Dashboard</h1>
							<Menu placement='bottom-start' className='relative top-[20pxs]'>
								<MenuHandler>
									<button>
										<Tooltip content='Options' placement='top-start'>
											<span>
												<AiOutlineSetting
													size={30}
													className='transition-all hover:rotate-90'
												/>
											</span>
										</Tooltip>
									</button>
								</MenuHandler>
								<MenuList>
									<MenuItem>
										<button>Settings</button>
									</MenuItem>
									<MenuItem>
										<button onClick={logout}>Logout</button>
									</MenuItem>
								</MenuList>
							</Menu>
						</div>
						<div>
							<h2 className='mb-4 text-xl'>
								<span className='font-bold'>
									{currentUser.userName}&lsquo;s
								</span>{' '}
								favorite products
							</h2>
							{favorites.length !== 0 ? (
								<div className='mx-auto grid w-full max-w-[1100px] place-items-center md:grid-cols-2 lg:grid-cols-3 gap-3 content-center'>
									{favorites.map(fav => (
										<Product key={fav._id} {...fav} />
									))}
								</div>
							) : (
								<h3 className='w-full text-center text-lg h-[50vh]'>
									You have no favorite products yet
								</h3>
							)}
						</div>
					</Container>
				</div>
			)}
		</>
	)
}

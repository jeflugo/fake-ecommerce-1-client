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
import { useNavigate } from 'react-router-dom'
import { AiOutlineSetting } from 'react-icons/ai'

export default function Dashboard() {
	const { user } = useStateContext()
	const [currentUser, error, isError, isLoading, isSuccess] = useFetching(
		`*[_type=="user" && email match '${user.email}'][0]`,
	)

	const navigate = useNavigate()
	const { setUser } = useStateContext()

	const logout = () => {
		navigate('/')
		setUser()
	}

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
							{currentUser.favorites.length !== 0 ? (
								<div className='flex gap-3'>
									{currentUser.favorites.map(fav => (
										// <Product key={fav._id} {...fav} />
										<>
											<div key={fav}>{fav}</div>
											<span>{currentUser.favorites.length}</span>
										</>
									))}
								</div>
							) : (
								<h3 className='w-full text-center text-lg'>
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

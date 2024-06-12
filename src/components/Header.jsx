import { Link } from 'react-router-dom'
import { AiFillHome, AiOutlineUser } from 'react-icons/ai'
import Container from './Container'
import { useStateContext } from '../context/StateContext'

import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Tooltip,
} from '@material-tailwind/react'

function Header() {
	const { user } = useStateContext()
	return (
		<header className='bg-white py-3 shadow-lg'>
			<Container>
				<div className='flex items-center justify-between'>
					<h2 className='mt-[-5px] text-3xl font-medium'>
						<Link to='/'>glu</Link>
					</h2>
					<div className='flex items-center gap-4'>
						<Link to='/store'>
							<Button size='sm'>
								<span>Store</span>
							</Button>
						</Link>
						{user ? (
							<Link to='/dashboard'>
								<Tooltip content='Go to dahsboard'>
									<div className='rounded-full p-1 transition-all hover:text-gray-800 hover:shadow-lg'>
										<AiFillHome size={25} />
									</div>
								</Tooltip>
							</Link>
						) : (
							<Menu placement='bottom-end'>
								<MenuHandler>
									<button className='rounded-full p-1 transition-all hover:text-gray-800 hover:shadow-lg'>
										<AiOutlineUser size={25} />
									</button>
								</MenuHandler>
								<MenuList>
									<MenuItem>
										<Link to='/login'>Sign in</Link>
									</MenuItem>
									<MenuItem>
										<Link to='/register'>Sign up</Link>
									</MenuItem>
								</MenuList>
							</Menu>
						)}
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header

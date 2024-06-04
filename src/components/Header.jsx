import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import Container from './Container'

import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
} from '@material-tailwind/react'

function Header() {
	return (
		<header className='bg-white py-3 shadow-lg'>
			<Container>
				<div className='flex items-center justify-between'>
					<h2 className='mt-[-5px] text-3xl font-medium'>
						<Link to='/'>glu</Link>
					</h2>
					<div className='flex items-center gap-4'>
						<Menu>
							<MenuHandler>
								<div>
									<AiOutlineUser size={25} />
								</div>
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
						<Link to='/store'>
							<Button size='sm'>
								<span>Store</span>
							</Button>
						</Link>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header

import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import Container from './Container'

function Header() {
	return (
		<header className='bg-white shadow-lg'>
			<Container>
				<div className='flex items-center justify-between'>
					<h2 className='mt-[-5px] text-3xl font-medium'>
						<Link to='/'>glu</Link>
					</h2>
					<div className='flex gap-4'>
						<Link to='/'>
							<AiOutlineUser size={25} />
						</Link>
						<Link to='/store'>
							<AiOutlineShoppingCart size={25} />
						</Link>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header

import {
	Menu,
	MenuHandler,
	Button,
	MenuItem,
	MenuList,
} from '@material-tailwind/react'

function OrderBy() {
	return (
		<div className='flex justify-end'>
			<Menu placement='bottom-end'>
				<MenuHandler>
					<Button variant='outlined' size='sm'>
						Order By
					</Button>
				</MenuHandler>
				<MenuList>
					<MenuItem>Newest</MenuItem>
					<MenuItem>Price up</MenuItem>
					<MenuItem>Price down</MenuItem>
				</MenuList>
			</Menu>
		</div>
	)
}

export default OrderBy

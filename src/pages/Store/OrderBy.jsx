import {
	Menu,
	MenuHandler,
	Button,
	MenuItem,
	MenuList,
} from '@material-tailwind/react'
import { ORDER_BY_OPTIONS } from '../../constants'

function OrderBy({ orderByOption, setOrderByOption }) {
	return (
		<div className='flex justify-end'>
			<Menu placement='bottom-end'>
				<MenuHandler>
					<Button variant='outlined' size='sm'>
						{orderByOption === 'Default' ? 'Order By' : orderByOption}
					</Button>
				</MenuHandler>
				<MenuList>
					{ORDER_BY_OPTIONS.map((option, index) => {
						if (option !== orderByOption)
							return (
								<MenuItem key={index} onClick={() => setOrderByOption(option)}>
									{option}
								</MenuItem>
							)
					})}
				</MenuList>
			</Menu>
		</div>
	)
}

export default OrderBy

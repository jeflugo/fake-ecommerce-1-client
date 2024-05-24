import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import { FiDelete } from 'react-icons/fi'

function SearchBar() {
	const [text, setText] = useState('')
	const [showButton, setShowButton] = useState(false)

	const handleChange = e => setText(e.target.value)
	const resetText = () => setText('')
	const toggleButton = () => setShowButton(!showButton)
	return (
		<form>
			<label
				className='relative block rounded border-2 border-black px-3 py-1'
				onFocus={toggleButton}
				onBlur={toggleButton}
			>
				<input
					type='text'
					value={text}
					onChange={handleChange}
					placeholder='Search +1M Products'
					className='w-full outline-none'
				/>
				{text !== '' && (
					<div className='absolute right-0 top-0 mr-10 flex h-full items-center bg-white px-3'>
						<FiDelete onClick={resetText} />
					</div>
				)}
				{showButton ? (
					<div className='absolute right-0 top-0 flex h-full items-center gap-3 bg-black px-3'>
						{<FaSearch color='white' />}
					</div>
				) : (
					<div className='absolute right-0 top-0 mr-3 flex h-full items-center gap-3'>
						{<FaSearch />}
					</div>
				)}
			</label>
		</form>
	)
}

export default SearchBar

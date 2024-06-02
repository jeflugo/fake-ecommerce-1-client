export default function Tags({ tags }) {
	return (
		<div className='absolute left-5 top-5 flex gap-1'>
			{tags.map((name, index) => (
				<span key={index} className='text-sm'>
					#{name}
				</span>
			))}
		</div>
	)
}

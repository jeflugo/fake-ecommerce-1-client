import { useEffect, useState } from 'react'
import { FETCHING_STATUS } from '../constants'
import { client } from '../lib/client'

export default function useFetching(query) {
	const [status, setStatus] = useState(FETCHING_STATUS.IDLE)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	const isError = status === FETCHING_STATUS.ERROR
	const isLoading = status === FETCHING_STATUS.LOADING
	const isSuccess = status === FETCHING_STATUS.SUCCESS

	useEffect(() => {
		setStatus(FETCHING_STATUS.LOADING)

		client
			.fetch(query)
			.then(data => {
				setData(data)
				setStatus(FETCHING_STATUS.SUCCESS)
			})
			.catch(err => {
				setStatus(FETCHING_STATUS.ERROR)
				setError(err.message)
			})
	}, [query])
	return [data, error, isError, isLoading, isSuccess]
}

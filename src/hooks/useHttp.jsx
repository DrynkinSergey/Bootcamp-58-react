import { useEffect, useState } from 'react'

export const useHttp = (fn, params) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	useEffect(() => {
		const getData = async () => {
			setLoading(true)
			try {
				const res = await fn(params)
				setData(res)
				setLoading(false)
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}

		getData()
	}, [fn, params])
	return { data, error, loading }
}

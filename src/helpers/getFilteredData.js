export const getFilteredData = (data, filter) => {
	return data.filter(
		item =>
			item.name.toLowerCase().includes(filter.toLowerCase()) || item.email.toLowerCase().includes(filter.toLowerCase())
	)
}

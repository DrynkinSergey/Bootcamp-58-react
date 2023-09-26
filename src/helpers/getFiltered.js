export const getFilteredData = (filter, data) => {
	return data.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
}

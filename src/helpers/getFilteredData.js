export const getFilteredData = (data, filter, isAvailable, activeSkill) => {
	return data
		.filter(
			item =>
				item.name.toLowerCase().includes(filter.toLowerCase()) ||
				item.email?.toLowerCase().includes(filter.toLowerCase())
		)
		.filter(item => (isAvailable ? item.isOpenToWork : item))
		.filter(item => (activeSkill === 'all' ? item : item.skills.includes(activeSkill)))
}

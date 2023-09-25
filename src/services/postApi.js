import axios from 'axios'
const dummyInstance = axios.create({
	baseURL: 'https://dummyjson.com',
})

export const fetchPosts = async params => {
	const { data } = await dummyInstance.get('/posts', {
		params: {
			limit: 5,
			...params,
		},
	})
	return data.posts
}
export const fetchPostsByQuery = async params => {
	const { data } = await dummyInstance.get('/posts/search', {
		params: {
			...params,
		},
	})
	return data
}

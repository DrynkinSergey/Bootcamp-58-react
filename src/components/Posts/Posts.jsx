import React, { Component, useEffect, useRef, useState } from 'react'
import { Header } from './Header'
import { PostList } from './PostList'
import { fetchPosts, fetchPostsByQuery } from '../../services/postApi'
import { WrapperPosts } from './Posts.styled'
import { Button } from './Button'
import { Spinner } from './Spinner'
import { toast } from 'react-toastify'

// export default class Posts extends Component {
// 	state = {
// 		posts: [],
// 		limit: 3,
// 		skip: 0,
// 		loading: false,
// 		error: null,
// 		query: '',
// 	}
// 	async componentDidMount() {
// 		this.setState({ loading: true })
// 		try {
// 			const { posts, limit } = await fetchPosts({ limit: this.state.limit, skip: this.state.skip })
// 			this.setState(prev => ({ posts: [...prev.posts, ...posts], limit }))
// 		} catch (error) {
// 			alert(error.message)
// 		} finally {
// 			toast.success('You data is ready!')
// 			this.setState({ loading: false })
// 		}
// 	}
// 	async componentDidUpdate(prevProps, prevState) {
// 		const { skip, query } = this.state
// 		if (prevState.skip !== skip && !query) {
// 			this.setState({ loading: true })
// 			try {
// 				const { posts } = await fetchPosts({ limit: this.state.limit, skip: this.state.skip })
// 				this.setState(prev => ({ posts: [...prev.posts, ...posts] }))
// 				toast.info(`You add to your posts ${this.state.limit} elems!`)
// 			} catch (error) {
// 				alert(error.message)
// 			} finally {
// 				this.setState({ loading: false })
// 			}
// 		}

// 		if (query && (prevState.query !== query || prevState.skip !== skip)) {
// 			this.setState({ loading: true })
// 			try {
// 				const { posts } = await fetchPostsByQuery({ limit: this.state.limit, skip: this.state.skip, q: query })
// 				this.setState(prev => ({ posts: [...prev.posts, ...posts] }))
// 				toast.info(`You add to your posts ${this.state.limit} elems!`)
// 			} catch (error) {
// 				alert(error.message)
// 			} finally {
// 				this.setState({ loading: false })
// 			}
// 		}
// 	}
// handleLoadMore = () => {
// 	this.setState(prev => ({ skip: prev.skip + prev.limit }))
// }
// handleChangeQuery = queryStr => {
// 	this.setState({ query: queryStr, posts: [] })
// 	}
// 	render() {
// 		const { posts, loading, query } = this.state
// return (
// 	<>
// 		<Header onChangeQuery={this.handleChangeQuery} />
// 		<WrapperPosts>
// 			<h1>Your query is:{query} </h1>
// 			{loading && !posts.length ? <Spinner /> : <PostList posts={posts} />}
// 			<Button disabled={loading} onClick={this.handleLoadMore} $bg='teal'>
// 				{loading ? 'Loading...' : 'Load more'}
// 			</Button>
// 		</WrapperPosts>
// 	</>
// )
// 	}
// }

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [limitValue, setLimitValue] = useState(3)
	const [skip, setSkip] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [query, setQuery] = useState('')
	const [user, setUser] = useState({ name: 'Alex', email: 'a@.ua', age: 11 })
	const firstRender = useRef(true)
	const countOfRenders = useRef(0)
	useEffect(() => {
		countOfRenders.current += 1
		console.log('RENDER COUNT : ', countOfRenders.current)
	})
	useEffect(() => {
		// if (firstRender.current) {
		// 	console.log('Тут ми відмінили виконання еффекта при  першому рендері')
		// 	firstRender.current = false
		// 	return
		// }
		const getPostsFn = async fnType => {
			// this.setState({ loading: true })
			setLoading(true)
			try {
				const { posts, limit } = await fnType({ limit: limitValue, skip, q: query })
				// this.setState(prev => ({ posts: [...prev.posts, ...posts], limitValue: limit }))
				setPosts(prev => [...prev, ...posts])
				setLimitValue(limit)
			} catch (error) {
				alert(error.message)
			} finally {
				toast.success('You data is ready!')
				// this.setState({ loading: false })
				setLoading(false)
			}
		}
		if (query) {
			getPostsFn(fetchPostsByQuery)
		} else {
			getPostsFn(fetchPosts)
		}
	}, [limitValue, skip, query])

	const calc = (title, THE_BEST_FUNCTION_EVER) => {
		console.log(title)
		THE_BEST_FUNCTION_EVER()
	}
	const sum = () => {
		console.log(1 + 2)
	}
	const multi = () => {
		console.log(2 * 6)
	}
	useEffect(() => {
		calc('Сумма елементів', sum)
		calc('Множення елементів', multi)
	}, [])

	const handleLoadMore = () => {
		// this.setState(prev => ({ skip: prev.skip + prev.limit }))
		setSkip(prev => prev + limitValue)
	}
	const handleChangeQuery = queryStr => {
		// this.setState({ query: queryStr, posts: [] })
		setQuery(queryStr)
		setPosts([])
	}
	return (
		<>
			<Header onChangeQuery={handleChangeQuery} />
			<WrapperPosts>
				<h1>Your query is:{query} </h1>
				{loading && !posts.length ? <Spinner /> : <PostList posts={posts} />}
				<Button disabled={loading} onClick={handleLoadMore} $bg='teal'>
					{loading ? 'Loading...' : 'Load more'}
				</Button>
			</WrapperPosts>
		</>
	)
}

export default Posts

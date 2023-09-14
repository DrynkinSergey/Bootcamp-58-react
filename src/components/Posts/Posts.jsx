import React, { Component } from 'react'
import { Header } from './Header'
import { PostList } from './PostList'
import { fetchPosts, fetchPostsByQuery } from '../../services/postApi'
import { WrapperPosts } from './Posts.styled'
import { Button } from './Button'
import { Spinner } from './Spinner'
import { toast } from 'react-toastify'

export default class Posts extends Component {
	state = {
		posts: [],
		limit: 3,
		skip: 0,
		loading: false,
		error: null,
		query: '',
	}
	async componentDidMount() {
		this.setState({ loading: true })
		try {
			const { posts, limit } = await fetchPosts({ limit: this.state.limit, skip: this.state.skip })
			this.setState(prev => ({ posts: [...prev.posts, ...posts], limit }))
		} catch (error) {
			alert(error.message)
		} finally {
			toast.success('You data is ready!')
			this.setState({ loading: false })
		}
	}
	async componentDidUpdate(prevProps, prevState) {
		const { skip, query } = this.state
		if (prevState.skip !== skip && !query) {
			this.setState({ loading: true })
			try {
				const { posts } = await fetchPosts({ limit: this.state.limit, skip: this.state.skip })
				this.setState(prev => ({ posts: [...prev.posts, ...posts] }))
				toast.info(`You add to your posts ${this.state.limit} elems!`)
			} catch (error) {
				alert(error.message)
			} finally {
				this.setState({ loading: false })
			}
		}

		if (query && (prevState.query !== query || prevState.skip !== skip)) {
			this.setState({ loading: true })
			try {
				const { posts } = await fetchPostsByQuery({ limit: this.state.limit, skip: this.state.skip, q: query })
				this.setState(prev => ({ posts: [...prev.posts, ...posts] }))
				toast.info(`You add to your posts ${this.state.limit} elems!`)
			} catch (error) {
				alert(error.message)
			} finally {
				this.setState({ loading: false })
			}
		}
	}
	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + prev.limit }))
	}
	handleChangeQuery = queryStr => {
		this.setState({ query: queryStr, posts: [] })
	}
	render() {
		const { posts, loading, query } = this.state
		return (
			<>
				<Header onChangeQuery={this.handleChangeQuery} />
				<WrapperPosts>
					<h1>Your query is:{query} </h1>
					{loading && !posts.length ? <Spinner /> : <PostList posts={posts} />}
					<Button disabled={loading} onClick={this.handleLoadMore} $bg='teal'>
						{loading ? 'Loading...' : 'Load more'}
					</Button>
				</WrapperPosts>
			</>
		)
	}
}

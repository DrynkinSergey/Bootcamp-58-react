import React, { Component } from 'react'
import { Header } from './Header'
import { PostList } from './PostList'
import { fetchPosts } from '../../services/postApi'
import { Wrapper, WrapperPosts } from './Posts.styled'
import axios from 'axios'
import { Button } from './Button'
import { Comment } from 'react-loader-spinner'
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
			//Alternative
			// const data = await fetchPosts()
			// this.setState({ posts: data.posts, limit: data.limit })
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
		const { skip } = this.state
		if (prevState.skip !== skip) {
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
	}
	handleLoadMore = () => {
		this.setState(prev => ({ skip: prev.skip + prev.limit }))
	}
	handleChangeQuery = queryStr => {
		this.setState({ query: queryStr })
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

import React, { Component } from 'react'
import { Header } from './Header'
import { PostList } from './PostList'
import { fetchPosts } from '../../services/postApi'

export default class Posts extends Component {
	state = {
		posts: [],
		limit: null,
	}
	async componentDidMount() {
		try {
			//Alternative
			// const data = await fetchPosts()
			// this.setState({ posts: data.posts, limit: data.limit })
			const { posts, limit } = await fetchPosts({ limit: 1, skip: 10 })
			this.setState({ posts, limit })
		} catch (error) {
			alert(error.message)
		}
	}
	render() {
		const { posts } = this.state
		return (
			<>
				<Header />
				<section>
					<PostList posts={posts} />
				</section>
			</>
		)
	}
}

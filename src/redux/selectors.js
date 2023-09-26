// posts
export const selectPosts = state => state.postsList.posts
export const selectPostById = (state, id) => state.postsList.posts.find(post => post.id === id)

//filter
export const selectFilter = state => state.filter

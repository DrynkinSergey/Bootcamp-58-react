import { types } from './typesConst'

export const initialState = {
	posts: [],
	limitValue: 3,
	skip: 0,
	loading: false,
	error: null,
	query: '',
}

export const postReducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case types.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			}
		case types.SET_LIMIT:
			return {
				...state,
				limit: action.payload,
			}
		case types.SET_POSTS:
			return {
				...state,
				posts: [...state.posts, ...action.payload],
			}
		case types.NEXT_PAGE:
			return {
				...state,
				skip: state.skip + state.limitValue,
			}
		case types.CHANGE_QUERY:
			return {
				...state,
				query: action.payload,
				posts: [],
			}
		default:
			return state
	}
}

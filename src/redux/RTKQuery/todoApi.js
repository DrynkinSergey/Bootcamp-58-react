// Створення RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
	reducerPath: 'todoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://6513d1618e505cebc2ea317b.mockapi.io',
	}),
	endpoints: builder => ({
		fetchTodos: builder.query({
			query: () => `todos`,
		}),
	}),
})

export const { useFetchTodosQuery } = todoApi

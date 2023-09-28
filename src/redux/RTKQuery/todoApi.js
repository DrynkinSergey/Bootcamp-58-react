// Створення RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
	tagTypes: ['todos'],
	refetchOnFocus: true,
	reducerPath: 'todoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://6513d1618e505cebc2ea317b.mockapi.io`,
	}),
	endpoints: builder => ({
		fetchTodos: builder.query({
			query: () => `todos`,
			providesTags: ['todos'],
		}),
		addTodo: builder.mutation({
			query: body => ({
				url: 'todos',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
		deleteTodo: builder.mutation({
			query: id => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['todos'],
		}),
		toggleTodo: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body: { ...body, completed: !body.completed },
			}),
			invalidatesTags: ['todos'],
		}),
	}),
})

export const { useFetchTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useToggleTodoMutation } = todoApi

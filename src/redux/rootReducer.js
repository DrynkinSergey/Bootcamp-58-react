// Імпортуємо метод з редакс, котрий може об'єднати декілька редьюсерів в один великий
import { combineReducers } from 'redux'

// Імпортуємо всі наші редьюсери сюди, якщо їх більше одного
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todoList/reducer'

// Створюємо рут редьюсер (ОДИН великий) за допомогою метода combineReducers
// CombineReducers включає в себе об'єкт, в якому ключ - це назва редьюсер, значення - це сам редьюсер
export const rootReducer = combineReducers({
	count: counterReducer,
	todos: todoReducer,
})

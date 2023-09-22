import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { devToolsEnhancer } from '@redux-devtools/extension'

const enhancer = devToolsEnhancer()
export const store = createStore(
	rootReducer,
	enhancer
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

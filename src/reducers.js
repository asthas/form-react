import { combineReducers } from 'redux'
import {
	POST_DATA, POST_DATA_SUCCESS, POST_DATA_FAILURE 
} from './actions'

const form = (state={
	isFetching: false,
	data: null,
	error: null
}, action) => {
	switch(action.type){
		case POST_DATA:
			return {
				...state,
				isFetching: true
			}
		case POST_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.data,
				error: null
			}
		case POST_DATA_FAILURE:
			return{
				...state,
				isFetching: false,
				error: action.error,
				data: null
			}
		default:
			return state
	}
}

const reducers = combineReducers({
	form
})

export default reducers
import fetch from 'isomorphic-fetch'

export const POST_DATA = 'POST_DATA'
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS'
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE'

export function postData() {
	return {
		type: POST_DATA
	}
}

export function postDataSuccess(data) {
	return {
		type: POST_DATA_SUCCESS,
		data,
	}
}

export function postDataFailure(error) {
	return {
		type: POST_DATA_FAILURE,
		error
	}
}

export function submitForm(values){
	return (dispatch) => {
		dispatch(postData())
		return fetch('http://localhost:8080/api/users', { 
			method: 'POST',
			data: values
		})
		.then((response) => response.json())
		.then((json) => dispatch(postDataSuccess(json)))
		.catch((err) => {
			dispatch(postDataFailure(err.message))
		})
	}
}
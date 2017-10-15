import axios from 'axios'

export const POST_DATA = 'POST_DATA'
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS'
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE'
export const SHOW_PROGRESS = 'SHOW_PROGRESS'

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

export function showProgress(progress){
	return {
		type: SHOW_PROGRESS,
		progress
	}
}

const progressHandler = (dispatch) => {
	onUploadProgress: (progressEvent) => {
		let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
		dispatch(showProgress(percentCompleted))
	}
}

export function submitForm(values){
	return (dispatch) => {
		dispatch(postData())
		return axios.post('http://localhost:8080/api/users', values, progressHandler(dispatch))
		.then((res) => dispatch(postDataSuccess(res)))
		.catch((err) =>	dispatch(postDataFailure(err.message)))
	}
}
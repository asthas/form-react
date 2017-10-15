import axios from 'axios'

export const POST_DATA = 'POST_DATA'
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS'
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE'
export const SHOW_PROGRESS = 'SHOW_PROGRESS'
export const DISMISS_INFO = 'DISMISS_INFO'

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

export function dismissInfo(){
	return {
		type: DISMISS_INFO
	}
}

export function showProgress(progress){
	return {
		type: SHOW_PROGRESS,
		progress
	}
}

const progressHandler = (dispatch) => ({
	onUploadProgress: (progressEvent) => {
		let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
		dispatch(showProgress(percentCompleted))
	}
})

export function submitForm(values){
	return (dispatch) => {
		dispatch(postData())
		return axios.post('http://localhost:8080/api/users', values, progressHandler(dispatch))
		.then((res) => dispatch(postDataSuccess(res.data)))
		.then(() => setTimeout(() => dispatch(dismissInfo()), 5000))
		.catch((err) =>	{
			dispatch(postDataFailure(err.message))
			setTimeout(() => dispatch(dismissInfo()), 5000)
		})
	}
}

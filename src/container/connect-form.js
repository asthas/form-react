import React from 'react'
import submitForm  from '../actions'
import formComponent  from '../presentational/form'

const mapDispatchToProps = (dispatch) => {
	return{
		onFormSubmit: () => {
			dispatch(submitForm)
		}
	}
}

const ConnenctedForm = connect(
	mapDispatchToProps
)(Form)

export default ConnenctedForm
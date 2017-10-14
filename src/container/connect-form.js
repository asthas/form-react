import React from 'react'
import { submitForm }  from '../actions'
import FormComponent  from '../presentational/form'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
	return{
		onFormSubmit: (e) => {
			e.preventDefault()
			console.log('This was called')
			console.log(dispatch)
			console.log(submitForm)
			dispatch(submitForm)
		}
	}
}

const ConnenctedForm = connect(
	null,
	mapDispatchToProps
)(FormComponent)

export default ConnenctedForm
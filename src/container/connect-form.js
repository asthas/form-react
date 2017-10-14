import React from 'react'
import { submitForm }  from '../actions'
import FormComponent  from '../presentational/form'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
	return{
		onFormSubmit: () => {
			dispatch(submitForm)
		}
	}
}

const ConnenctedForm = connect(
	mapDispatchToProps
)(FormComponent)

export default ConnenctedForm
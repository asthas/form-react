import { submitForm }  from '../actions'
import FormComponent  from '../presentational/form'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		data: state.form.data,
		error: state.form.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onFormSubmit: (values) => {
			dispatch(submitForm(values))
		}
	}
}

const ConnenctedForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(FormComponent)

export default ConnenctedForm
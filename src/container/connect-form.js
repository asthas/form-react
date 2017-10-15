import { submitForm, uploadDocuments }  from '../actions'
import FormComponent  from '../presentational/form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
	return {
		data: state.form.data,
		error: state.form.error,
		progress: state.form.progress
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	onFormSubmit: submitForm,
}, dispatch)

const ConnenctedForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(FormComponent)

export default ConnenctedForm
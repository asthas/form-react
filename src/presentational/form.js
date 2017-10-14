import React, {Component} from 'react'
import '../styles/form.css'

class FormComponent extends Component {

	constructor(props){
		super(props)
	}

	parseForm = (form) => {
		const inputEls = Array.from(form.querySelectorAll('input'))
		const values = inputEls.reduce((acc, el) => ({
			...acc,
			[el.name]: el.value,
		}), {})
		return values
	}

	formHandler = (event) => {
		event.preventDefault()
		const values = this.parseForm(event.target)
		this.props.onFormSubmit(values)
	}
	
	render(){
		return(
			<div className="form-container">
				<form onSubmit={this.formHandler} className="content">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Name" name="name" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Phone" name="phone" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Email" name="email" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Pan No." name="pan" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Company Name" name="company" required/>
					</div>
					<label class="custom-file-upload">
					    <input type="file"/>
					    Upload Documents
					</label>
					<div className="progress">
					  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<div>
						<button className="btn btn-success submit-btn">Submit</button>
					</div>
					
					{this.props.error &&  <div className="alert alert-danger" role="alert">{this.props.error}</div>} 
					{this.props.data && <div className="alert alert-success" role="alert">Form successfully submitted!</div>}
					
				</form> 
			</div>		
		)
	}
	
}

export default FormComponent
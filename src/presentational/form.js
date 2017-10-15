import React, {Component} from 'react'
import FileInput from './file-input'
import '../styles/form.css'

class FormComponent extends Component {

	parseData = (form, data) => {
		const inputEls = Array.from(form.querySelectorAll('input[data]'))
		inputEls.forEach((el) => {
			data.append(el.name, el.value)
		})
	}

	parseFiles = (form, data) => {
		const inputFileEls = Array.from(form.querySelectorAll('input[type="file"]'))
		inputFileEls.forEach((fileEl) => {
			data.append(fileEl.name, fileEl.files[0])
		})
	}

	parseForm = (form) => {
		const data = new FormData()
		this.parseData(form, data)
		this.parseFiles(form, data)
		return data
	}

	formHandler = (event) => {
		event.preventDefault()
		const values = this.parseForm(event.target)
		this.props.onFormSubmit(values)
	}

	renderSuccessOrError = () => {
		const { error, data } = this.props;
		if (error) 
			return this.renderError(error)
		else
			return this.renderSuccess(data)
	}

	renderSuccess = (data) => {
		if (!data) {
			return null
		}
		const values = this.parseForm(this.formEl)
		const totalVals = Array.from(values.values())
		const filledVals = totalVals.filter(v => !!v && v !== "undefined")
		return(
			<div className="alert alert-success" role="alert">
				Form successfully submitted!
				<div>{filledVals.length} / {totalVals.length} submitted!</div>
			</div>
		)
	}

	renderError = (error) => {
		if(!error){
			return null
		}
		return(
			<div className="alert alert-danger" role="alert">{error}</div>
		)
	}

	render(){
		return(
			<div className="form-container">
				<form ref={(el) => this.formEl = el} onSubmit={this.formHandler} className="content">
					<div className="form-group">
						<label className="form-label">NAME</label>
						<input type="text" className="form-control" data="data" placeholder="Name" name="name" required/>
					</div>
					<div className="form-group">
						<label className="form-label">PHONE NUMBER</label>
						<input type="number" className="form-control" data="data" placeholder="Phone" name="phone" required/>
					</div>
					<div className="form-group">
						<label className="form-label">EMAIL</label>
						<input type="email" className="form-control" data="data" placeholder="Email" name="email" required/>
					</div>
					<div className="form-group">
						<label className="form-label">PAN NUMBER</label>
						<input type="text" className="form-control" data="data" placeholder="Pan No." name="panNo" required/>
					</div>
					<div className="form-group">
						<label className="form-label">COMPANY NAME</label>
						<input type="text" className="form-control" data="data" placeholder="Company Name" name="company" />
					</div>
					<div>
						<FileInput name="photo" description="Upload Photo"/>
						<FileInput name="pan" description="Upload Pan"/>
						<FileInput name="aadhar" description="Upload Aadhar"/>
						<FileInput name="passport" description="Upload Passport"/>
						<div className="progress">
						  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${this.props.progress}%`}} aria-valuenow={this.props.progress} aria-valuemin="0" aria-valuemax="100"></div>
						</div>
					</div>
					<div>
						<button className="btn btn-success submit-btn">Submit</button>
					</div>
					{this.renderSuccessOrError()}					
				</form> 
			</div>		
		)
	}
	
}

export default FormComponent
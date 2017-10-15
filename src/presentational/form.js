import React, {Component} from 'react'
import '../styles/form.css'

class FormComponent extends Component {

	constructor(props){
		super(props)
	}

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
	
	render(){
		return(
			<div className="form-container">
				<form onSubmit={this.formHandler} className="content">
					<div className="form-group">
						<input type="text" className="form-control" data="data" placeholder="Name" name="name" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" data="data" placeholder="Phone" name="phone" required/>
					</div>
					<div className="form-group">
						<input type="email" className="form-control" data="data" placeholder="Email" name="email" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" data="data" placeholder="Pan No." name="panNo" required/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" data="data" placeholder="Company Name" name="company" />
					</div>
					<div>
						<div className="upload-doc-div">
							<label class="custom-file-upload">
							    <input type="file" accept='.jpg,.png,.jpeg' name="photo" />
							    Upload Photo
							</label>
						</div>
						<div className="upload-doc-div">
							<label class="custom-file-upload">
							    <input type="file" accept='.pdf,.doc,.docx,.jpg,.png,.jpeg' name="pan" />
							    Upload Pan 
							</label>
						</div>
						<div className="upload-doc-div">
							<label class="custom-file-upload">
							    <input type="file" accept='.pdf,.doc,.docx,.jpg,.png,.jpeg' name="aadhar" />
							    Upload Aadhar
							</label>
						</div>
						<div className="upload-doc-div">
							<label class="custom-file-upload">
							    <input type="file" accept='.pdf,.doc,.docx,.jpg,.png,.jpeg' name="passport" />
							    Upload Passport
							</label>
						</div>
						<div className="progress">
						  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${this.props.progress}%`}} aria-valuenow={this.props.progress} aria-valuemin="0" aria-valuemax="100"></div>
						</div>
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
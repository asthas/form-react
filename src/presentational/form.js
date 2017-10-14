import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'

const FormComponent = ({
	onFormSubmit
}) => {
	return(
		<div className="form-container">
			<form className="content">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Name" required/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Phone" required/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Email" required/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Pan No." required/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Company Name" required/>
				</div>
				<div className="form-group">
					<input type="file" />
				</div>
				<div className="progress">
				  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
				<div>
					<button className="btn btn-success" onClick={onFormSubmit}>Submit</button>
				</div>
			</form> 
		</div>		
	)
}

export default FormComponent
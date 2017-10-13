import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/form.css'

const formComponent = () => {
	return(
		<div className="form-container">
			<form className="content">
				<div className="form-group">
					<input type="text" className="login-form-control" placeholder="FIRST NAME"/>
				</div>
				<div className="form-group">
					<input type="password" className="login-form-control" placeholder="LAST NAME"/>
				</div>
				<div className="form-group">
					<input type="text" className="login-form-control" placeholder="PHONE"/>
				</div>
				<div className="form-group">
					<input type="text" className="login-form-control" placeholder="EMAIL"/>
				</div>
				<div className="form-group">
					<input type="password" className="login-form-control" placeholder="PASSWORD"/>
				</div>
				<div>
					<button className="btn btn-primary">Sign Up</button>
				</div>
			</form> 
		</div>		
	)
}

export default formComponent
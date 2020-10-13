import React, { Component } from 'react';
class FormLogin extends Component {

	render() {
		return (
		    <div className="bg-faded p-4 my-4">
				<hr className="divider" />
				<h2 className="text-center text-lg text-uppercase my-0">Login <strong>Form</strong></h2>
				<hr className="divider" />
				<form onSubmit={this.handleSubmit}>
				    <div className="row center">
				        <div className="form-group col-lg-6">
				            <label className="text-heading">username</label>
				            <input name="username"   type="text" className="form-control" />
				        </div>
					</div>
					<div className="row center">
				        <div className="form-group col-lg-6">
				            <label className="text-heading">Password</label>
				            <input name="password" type="text" className="form-control" />
				        </div>
					</div>
					<div className="row center">
						<div className="form-group col-lg-6 center">
							<button type="submit" className="btn btn-secondary">Submit</button>
						</div>
				    </div>
				</form>
			</div>
		);
	}
}



export default FormLogin;
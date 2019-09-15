import React from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import * as actionCreators from '../actions/Actions';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const mapDispatchToProps = function(dispatch) {
	return bindActionCreators({
		Login: actionCreators.Login
	}, dispatch)
};

class LoginFormContainer extends React.Component {
	state = {
		error: false,
	};

	enterToChat = (event) => {
		event.preventDefault();
		let inputValue = event.target.username.value;
		if (this.validate(inputValue)) {
			this.props.Login(inputValue);
			sessionStorage.setItem('username', inputValue);
		}
	};

	validate(username) {
		if (username.length < 4 || username.length > 15) {
			this.setState((state) => ({
				error: true
			}));
			return false;
		} else {
			return true;
		}
	}

	render() {
		return (
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={this.enterToChat}>
						<Form.Control required name="username" type="text" placeholder="Username" className='mb-2' />
						<Button variant="primary" type="submit">Enter</Button>
					</Form>
					{
						this.state.error &&
						<Alert variant='danger' className='mt-2'>
							Minimum 4 symbols, maximum 15
						</Alert>
					}
				</Modal.Body>

			</Modal.Dialog>
		)
	}
}

export default connect(null, mapDispatchToProps)(LoginFormContainer)
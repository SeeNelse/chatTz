import React from 'react';
import {Col, Container, Form, Row, Button} from 'react-bootstrap';
import * as actionCreators from "../actions/Actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import currentDate from "../helpers/currentDate";

const mapStateToProps = function(state) {
	return {
		isLogged: state.isLogged,
		userName: state.userName,
		chatHistory: state.chatHistory
	}
};

const mapDispatchToProps = function(dispatch) {
	return bindActionCreators({
		NewMessage: actionCreators.NewMessage
	}, dispatch)
};

class MessageForm extends React.Component {

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.newMessage(event)
		}
	};

	newMessage = (event) => {
		event.preventDefault();
		let message = this.refs['form'].message.value;
		if (message.length === 0) {
			return;
		}
		let newMessage = {
			username: this.props.userName,
			time: currentDate(),
			messageText: message
		};
		this.updateHistory(newMessage);
		this.props.NewMessage(newMessage);
		this.refs['form'].message.value = '';
	};

	updateHistory(message) {
		let updatedChatHistory = [...this.props.chatHistory, message];
		localStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
	}

	render() {
		return (
			<Container className='mt-3'>
				<Row>
					<Col xs={12}>
						<Form ref='form' onSubmit={this.newMessage} onKeyPress={this.handleKeyPress} className='d-flex flex-column align-items-end'>
							<Form.Control name="message" as="textarea" rows="2" className='mb-1' />
							<Button variant="primary" type="submit">Send</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
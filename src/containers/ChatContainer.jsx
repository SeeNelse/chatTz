import React from 'react';
import MessageForm from '../components/MessageForm';
import Message from '../components/Message';
import '../css/main.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import {connect} from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = function(state) {
	return {
		chatHistory: state.chatHistory
	}
};

class ChatContainer extends React.Component {
	componentDidMount() {
		this.refs['chat-window'].lastChild.scrollIntoView();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.chatHistory.length !== this.props.chatHistory) {
			this.refs['chat-window'].lastChild.scrollIntoView();
		}
	}

	render() {
		return (
			<React.Fragment>
				<Container>
					<Row>
						<Col ref='chat-window' xs={12} className='chat-window'>
							{
								this.props.chatHistory.length ?
								this.props.chatHistory.map((el, index) => {
									return (
										<Message key={index} message={el}/>
									)
								}) :
								<Alert variant='danger'>No messages</Alert>
							}
						</Col>
					</Row>
				</Container>
				<MessageForm />
			</React.Fragment>
		)
	}
}

ChatContainer.propTypes = {
	chatHistory: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(ChatContainer)
import React from 'react';
import { Card } from 'react-bootstrap';
import UserAvatar  from 'react-user-avatar';

const Message = ({message}) => {
	return (
		<Card className='mb-2'>
			<Card.Body className='d-flex flex-row'>
				<UserAvatar className='mr-3' size="38" name={`${message.username}`} style={{color: '#ffffff'}} />
				<div>
					<Card.Title>{message.username}</Card.Title>
					<Card.Subtitle className="mb-1 text-muted">{message.time}</Card.Subtitle>
					<Card.Text>{message.messageText}</Card.Text>
				</div>
			</Card.Body>
		</Card>
	)
}

export default Message;
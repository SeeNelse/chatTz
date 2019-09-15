import {actionTypes} from '../constants/actionTypes';

export const Login = props => ({
	type: actionTypes.LOGIN,
	payload: props
});

export const Logout = props => ({
	type: actionTypes.LOGOUT,
	payload: props
});

export const NewMessage = props => ({
	type: actionTypes.NEW_MESSAGE,
	payload: props
});

export const UpdateMessages = props => ({
	type: actionTypes.UPDATE_MESSAGES,
	payload: props
});
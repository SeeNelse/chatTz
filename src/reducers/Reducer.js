import {actionTypes} from '../constants/actionTypes';

const defaultState = {
	isLogged: false,
	chatHistory: JSON.parse(localStorage.getItem("chatHistory")) || []
};

const appReducer = (state = defaultState, action) => {
	switch (action.type) {

		case actionTypes.LOGIN: {
			return {
				...state,
				isLogged: true,
				userName: action.payload
			}
		}

		case actionTypes.LOGOUT: {
			return {
				...state,
				isLogged: false,
				userName: ''
			}
		}

		case actionTypes.NEW_MESSAGE: {
			let chatHistory = [...state.chatHistory, action.payload];
			return {
				...state,
				chatHistory: chatHistory
			}
		}

		case actionTypes.UPDATE_MESSAGES: {
			return {
				...state,
				chatHistory: action.payload
			}
		}

		default:
			return state;

	}
};

export default appReducer;
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import appReducer from "./reducers/Reducer";

function configureStore(initialState) {
	const store = createStore(appReducer, initialState, applyMiddleware(logger));
	return store;
}

const reduxStore = configureStore();

export default reduxStore;
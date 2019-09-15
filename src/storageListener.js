import Store from "./Store";
import {UpdateMessages} from './actions/Actions';

window.addEventListener('storage', function(e) {
	Store.dispatch(UpdateMessages(JSON.parse(localStorage.getItem("chatHistory"))));
});
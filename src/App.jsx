import React from 'react';
import { Provider } from "react-redux";
import Store from "./Store";
import RootContainer from './containers/RootContainer';
import './storageListener';

function App () {
	return (
		<Provider store={ Store }>
			<RootContainer />
		</Provider>
	);
}

export default App;

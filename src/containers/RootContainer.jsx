import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import NavBarComponent from "./NavBarComponent";
import ChatContainer from "./ChatContainer";
import LoginFormContainer from './LoginFormContainer'
import PropTypes from "prop-types";
import * as actionCreators from "../actions/Actions";

const mapStateToProps = function(state) {
	return {
		isLogged: state.isLogged
	}
};

const mapDispatchToProps = function(dispatch) {
	return bindActionCreators({
		Login: actionCreators.Login
	}, dispatch)
};

class RootContainer extends React.Component {
	componentDidMount() {
		if (sessionStorage.getItem('username')) {
			this.props.Login(sessionStorage.getItem('username'))
		}
	}

	render() {
		return (
			<React.Fragment>
				{
					this.props.isLogged ?
						<React.Fragment>
							<NavBarComponent />
							<ChatContainer />
						</React.Fragment> :
						<LoginFormContainer />
				}
			</React.Fragment>
		)
	}
}

RootContainer.propTypes = {
	isLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
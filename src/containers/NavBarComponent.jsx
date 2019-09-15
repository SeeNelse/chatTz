import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Navbar, Nav, Row, Col, Container, NavDropdown} from 'react-bootstrap';
import * as actionCreators from "../actions/Actions";
import PropTypes from "prop-types";


const mapStateToProps = function(state) {
	return {
		userName: state.userName
	}
};

const mapDispatchToProps = function(dispatch) {
	return bindActionCreators({
		Logout: actionCreators.Logout
	}, dispatch)
};

class NavBarComponent extends React.Component {
	handleLogout = () => {
		sessionStorage.setItem('username', '');
		this.props.Logout();
	}

	render() {
		const {userName} = this.props;
		return (
			<Navbar bg="primary" variant="dark" className='mb-3'>
				<Container>
					<Row style={{width: '100%'}}>
						<Col xs={12} className="d-flex align-items-center justify-content-between">
							<Navbar.Brand href="#home">React chat</Navbar.Brand>
							<Nav>
								<NavDropdown className='text-white' title={`Hello, ${userName}!`} id="collasible-nav-dropdown">
									<NavDropdown.Item onClick={this.handleLogout} >Logout</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Col>
					</Row>
				</Container>
			</Navbar>
		)
	}
}

NavBarComponent.propTypes = {
	userName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent)
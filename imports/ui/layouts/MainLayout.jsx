import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import Navigation from '../components/Navigation.jsx';

export default class MainLayout extends React.Component {
	constructor() {
		super();
	}

	
	render() {
		return (
		<div className="main-layout">
			<header>
				<Navigation {...this.props} />
			</header>
			<main>
				<div className="container">{this.props.children}</div>
			</main>
		</div>
	);


	}
}
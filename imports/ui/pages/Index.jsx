import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Index extends React.Component {

    constructor(props) {
		super(props);
    }


	render() {
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}>
				<div className="jumbotron">
					<h1>{Meteor.settings.public.MainTitle}</h1>
					<p>This is a boiler plate setup for Meteor+React with Bootstrap 4, custom user registration and react-router routes.</p>
				</div>
			</ReactCSSTransitionGroup>
		);

	}
}


import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

export default class SignIn extends Component {

   SignInUser(event) {
        event.preventDefault();
        var email = this.refs.email.value.trim();
        var password = this.refs.password.value.trim();

		Meteor.loginWithPassword(email, password, (error) => { 
			if (error) {
				return swal({
					title: "Email or password incorrect",
					text: "Please try again",
					timer: 2500,
					showConfirmButton: false,
					type: "error"
				});
			} else {
				    console.log("Successfull Login!");
                    browserHistory.push('/');
			}
		});

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
				<div>
				   <h2>Sign In</h2>
                   <form onSubmit={this.SignInUser.bind(this)}>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" ref="email" id="email" placeholder="Email"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" ref="password" id="password" placeholder="Password"/>
                      </div>

                       <div className="form-group">
                        <button type="submit" className="btn btn-default">Submit</button>
                      </div>

                      <div className="form-group">
                         <Link to="/register">Click here to register...</Link>
                      </div>
                    </form>

                </div>
			</ReactCSSTransitionGroup>
		)	
	}
}
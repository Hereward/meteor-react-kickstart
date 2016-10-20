import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

export default class About extends Component {

    constructor(props) {
        super(props);
    }


    RegisterUser(event) {
        event.preventDefault();
        var email = this.refs.email.value.trim();
        var password1 = this.refs.password1.value.trim();
        var password2 = this.refs.password2.value.trim();
        var token = this.refs.token.value.trim();


        var isValidPassword = function(password1, password2) {
            if (password1 === password2) {
                return password1.length >= 6 ? true : false;
            } else {
                return swal({
                    title: "Passwords don't match",
                    text: "Please try again",
                    showConfirmButton: true,
                    type: "error"
                });
            }
        };

        if (isValidPassword(password1, password2)) {
            Accounts.createUser({
                username: email,
                email: email,
                token: token,
                password: password1
            }, (error) => {
                if (error) {
                    console.log("Error: " + error.reason);
                    return swal({
                        title: "Oops, something went wrong!",
                        text: "There was a problem creating this account. Please try again.",
                        showConfirmButton: true,
                        type: "error"
                    });
                } else {
                    console.log("Successfully created account!");
                    browserHistory.push('/');
                }
            });
        } else {
            return swal({
                title: "Password must be at least 6 characters.",
                text: "Please try again",
                showConfirmButton: true,
                type: "error"
            });
        }

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
                <h2>Register</h2>
                   <form onSubmit={this.RegisterUser.bind(this)}>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" ref="email" id="email" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password1">Password</label>
                        <input type="password" className="form-control" ref="password1" id="password1" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" className="form-control" ref="password2" id="password2" placeholder="Confirm Password"/>
                      </div>
                       <div className="form-group">
                        <label htmlFor="token">Token</label>
                        <input type="text" className="form-control" id="token" ref="token" placeholder="6 digit access token"/>
                      </div>

                      <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </ReactCSSTransitionGroup>
        );   
    }
}

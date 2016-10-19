import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default class Navigation extends React.Component {
    LogOut(event) {
        event.preventDefault();
        Meteor.logout(() => {
            console.log("Successfull log out!");
            browserHistory.push('/');
        });
    }

    getAuthLayout() {
        let SignedInLayout = 
            <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span>{this.props.UserName}</span>
                    <span className="caret"></span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link to="#" ref="logout" onClick={this.LogOut.bind(this)}>Sign Out</Link>
                    </li>
                </ul>
            </li>;

        let SignedOuLayout = 
            <li>
                <Link to="/signin">Sign In</Link>
            </li>;
            return (this.props.SignedIn)?SignedInLayout:SignedOuLayout;
  }


    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href={this.props.ShortTitleExternalLink}>{this.props.ShortTitle}</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/">
                                    <i className="fa fa-home fa-lg"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">{this.getAuthLayout()}</ul>
                    </div>
                </div>
            </nav>
        ); 
    }
}
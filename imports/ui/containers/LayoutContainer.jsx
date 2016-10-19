import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import MainLayout from '../../ui/layouts/MainLayout.jsx';
import Index from '../../ui/pages/Index.jsx';
import { browserHistory } from 'react-router';

export default createContainer(() => {
  let UserName = '';
  const SignedIn = (Meteor.user())?true:false;
  const ShortTitle = Meteor.settings.public.ShortTitle;
  const ShortTitleExternalLink = Meteor.settings.public.ShortTitleExternalLink;
  if (SignedIn) {
  	UserName = Meteor.user().username;
  }

  return {SignedIn, UserName, ShortTitle, ShortTitleExternalLink};
}, MainLayout);
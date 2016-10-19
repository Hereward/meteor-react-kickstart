
import 'bootstrap-sass';
import '/imports/ui/css';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';
import { addMeta } from '../imports/startup/client/meta.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
  addMeta();
});







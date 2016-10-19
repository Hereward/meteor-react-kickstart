import '/imports/startup/server';
import '/imports/startup/both';

Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
   user.profile.token = options.token;
   return user;
});